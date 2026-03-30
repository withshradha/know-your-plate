const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured' }) };
  }

  let body;
  try { body = JSON.parse(event.body); }
  catch { return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }; }

  const { type, food, foods, gender } = body;

  let system, userMsg, maxTokens;

  if (type === 'lookup') {
    if (!food) return { statusCode: 400, body: JSON.stringify({ error: 'No food specified' }) };
    system = 'You are a nutrition database for Indian foods. Return ONLY a valid JSON object with these exact fields: name (string), portion (string, typical Indian measure like "1 katori" or "1 roti"), protein (number, grams per portion), cal_low (number, lower calorie estimate), cal_high (number, higher calorie estimate), fiber_low (number, grams), fiber_high (number, grams). No markdown, no explanation, just JSON.';
    userMsg = 'Nutrition per typical Indian portion of: ' + food;
    maxTokens = 300;
  } else if (type === 'minerals') {
    if (!foods) return { statusCode: 400, body: JSON.stringify({ error: 'No foods specified' }) };
    const genderLabel = gender || 'woman';
    system = `You are a warm, expert nutritionist analyzing a day's meal plan for an Indian ${genderLabel} aged 18–55. Estimate mineral and vitamin status and give practical, encouraging guidance.

RULES:
- Warm and guiding tone, never judgmental
- Keep concise, no repetition
- Simple food fixes only (dal, banana, lemon, nuts — not supplements or complex recipes)
- Use exactly these status labels: Low | Slightly Low | Optimal | High

OUTPUT FORMAT (follow exactly, no deviations):
## Mineral Health
Iron: [status] — ~[X]%
Magnesium: [status] — ~[X]%
Calcium: [status] — ~[X]%
Zinc: [status] — ~[X]%
Potassium: [status] — ~[X]%

## Vitamin Health
Vitamin C: [status] — ~[X]%
Vitamin A: [status] — ~[X]%
Vitamin B9 (Folate): [status] — ~[X]%
Vitamin E: [status] — ~[X]%
Biotin (B7): [status] — ~[X]%
Collagen support (Vit C + Glycine): [status] — ~[X]%

## What this means for you
- [energy or recovery impact]
- [skin or hormones impact]
- [sleep or mood impact]
- [one positive observation]

## Quick fixes
- [Fix 1]
- [Fix 2]
- [Fix 3]

## Interesting observation
[1–2 sentences, specific to their actual food choices]`;
    userMsg = `My meal plan today: ${foods}\n\nI am a ${genderLabel}. Analyse my mineral and vitamin intake.`;
    maxTokens = 1200;
  } else {
    return { statusCode: 400, body: JSON.stringify({ error: 'Unknown type' }) };
  }

  try {
    const res = await fetch(ANTHROPIC_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: maxTokens,
        system,
        messages: [{ role: 'user', content: userMsg }]
      })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || 'API error');

    const text = (data.content?.[0]?.text || '').replace(/```json|```/g, '').trim();

    if (type === 'lookup') {
      const parsed = JSON.parse(text);
      return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed) };
    } else {
      return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ report: text }) };
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message || 'Failed to call AI' }) };
  }
};
