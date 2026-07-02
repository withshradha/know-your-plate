const meals = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "snacks", label: "Snacks" }
];

const filters = [
  ["all", "All"],
  ["vegProtein", "Veg protein"],
  ["nonvegProtein", "Non-veg protein"],
  ["dal", "Dal & legumes"],
  ["dairy", "Dairy"],
  ["grains", "Grains"],
  ["veg", "Vegetables"],
  ["fruit", "Fruits"],
  ["seeds", "Seeds & nuts"],
  ["custom", "My foods"]
];

const vitaminLabels = {
  a: "Vitamin A",
  c: "Vitamin C",
  d: "Vitamin D",
  e: "Vitamin E",
  k: "Vitamin K",
  b1: "B1",
  b2: "B2",
  b3: "B3",
  b6: "B6",
  folate: "Folate",
  b12: "B12",
  iron: "Iron",
  calcium: "Calcium",
  magnesium: "Magnesium",
  potassium: "Potassium",
  zinc: "Zinc"
};

const foods = [
  { id: "idli", name: "Idli", portion: "2 pieces", protein: 4, calories: 100, fiber: 2, cat: "grains", type: "veg", v: { b1: 8, b3: 6 } },
  { id: "dosa", name: "Plain dosa", portion: "1 medium", protein: 4, calories: 150, fiber: 2, cat: "grains", type: "veg", v: { b1: 8, b3: 6 } },
  { id: "poha", name: "Poha", portion: "1 bowl", protein: 5, calories: 240, fiber: 3, cat: "grains", type: "veg", v: { iron: 12, b1: 10 } },
  { id: "oats", name: "Oats", portion: "40g dry", protein: 7, calories: 155, fiber: 4, cat: "grains", type: "veg", v: { magnesium: 18, zinc: 12, b1: 16 } },
  { id: "besan_chilla", name: "Besan chilla", portion: "2 medium", protein: 12, calories: 230, fiber: 5, cat: "vegProtein", type: "veg", v: { folate: 18, iron: 12, magnesium: 16, b6: 10 } },
  { id: "wheat_roti", name: "Wheat roti", portion: "1 medium", protein: 3, calories: 105, fiber: 3, cat: "grains", type: "veg", v: { b1: 10, magnesium: 8, zinc: 6 } },
  { id: "jowar_roti", name: "Jowar roti", portion: "1 medium", protein: 4, calories: 120, fiber: 4, cat: "grains", type: "veg", v: { magnesium: 14, b3: 10, iron: 8 } },
  { id: "bajra_roti", name: "Bajra roti", portion: "1 medium", protein: 4, calories: 130, fiber: 4, cat: "grains", type: "veg", v: { iron: 12, magnesium: 16, zinc: 10 } },
  { id: "ragi_roti", name: "Ragi roti", portion: "1 medium", protein: 3, calories: 120, fiber: 4, cat: "grains", type: "veg", v: { calcium: 14, iron: 8, magnesium: 12 } },
  { id: "rice", name: "Cooked rice", portion: "1 katori", protein: 4, calories: 205, fiber: 1, cat: "grains", type: "veg", v: { b1: 6 } },
  { id: "quinoa", name: "Quinoa", portion: "1 katori", protein: 8, calories: 220, fiber: 5, cat: "grains", type: "veg", v: { magnesium: 28, folate: 18, iron: 15 } },
  { id: "dal", name: "Dal", portion: "1 katori", protein: 9, calories: 180, fiber: 6, cat: "dal", type: "veg", v: { folate: 24, iron: 14, magnesium: 18, potassium: 10 } },
  { id: "rajma", name: "Rajma", portion: "1 katori", protein: 13, calories: 235, fiber: 10, cat: "dal", type: "veg", v: { folate: 32, iron: 18, magnesium: 20, potassium: 16 } },
  { id: "chana", name: "Chana", portion: "1 katori", protein: 14, calories: 270, fiber: 11, cat: "dal", type: "veg", v: { folate: 35, iron: 20, magnesium: 22, zinc: 12 } },
  { id: "moong", name: "Moong dal", portion: "1 katori", protein: 10, calories: 175, fiber: 6, cat: "dal", type: "veg", v: { folate: 24, iron: 12, magnesium: 14 } },
  { id: "masoor", name: "Masoor dal", portion: "1 katori", protein: 12, calories: 190, fiber: 7, cat: "dal", type: "veg", v: { folate: 28, iron: 18, b1: 12 } },
  { id: "sprouts", name: "Sprouted moong", portion: "1 bowl", protein: 7, calories: 105, fiber: 4, cat: "vegProtein", type: "veg", v: { c: 18, folate: 24, k: 12 } },
  { id: "soya", name: "Soya chunks", portion: "50g dry", protein: 26, calories: 170, fiber: 6, cat: "vegProtein", type: "veg", v: { iron: 28, calcium: 18, magnesium: 20, zinc: 14 } },
  { id: "tofu", name: "Tofu", portion: "100g", protein: 12, calories: 125, fiber: 1, cat: "vegProtein", type: "veg", v: { calcium: 25, iron: 16, magnesium: 12 } },
  { id: "tempeh", name: "Tempeh", portion: "100g", protein: 19, calories: 195, fiber: 5, cat: "vegProtein", type: "veg", v: { b2: 20, magnesium: 20, iron: 16, zinc: 14 } },
  { id: "paneer", name: "Paneer", portion: "100g", protein: 18, calories: 300, fiber: 0, cat: "dairy", type: "veg", v: { calcium: 35, b12: 18, b2: 20 } },
  { id: "curd", name: "Curd", portion: "1 bowl", protein: 6, calories: 100, fiber: 0, cat: "dairy", type: "veg", v: { calcium: 20, b12: 12, b2: 16 } },
  { id: "greek_yogurt", name: "Greek yogurt", portion: "170g", protein: 17, calories: 120, fiber: 0, cat: "dairy", type: "veg", v: { calcium: 20, b12: 20, b2: 22 } },
  { id: "milk", name: "Milk", portion: "1 cup", protein: 8, calories: 150, fiber: 0, cat: "dairy", type: "veg", v: { calcium: 28, b12: 18, b2: 25, d: 10 } },
  { id: "palak", name: "Palak", portion: "1 bowl cooked", protein: 4, calories: 80, fiber: 4, cat: "veg", type: "veg", v: { a: 70, k: 100, folate: 25, iron: 18, magnesium: 20 } },
  { id: "methi", name: "Methi leaves", portion: "1 bowl cooked", protein: 4, calories: 70, fiber: 4, cat: "veg", type: "veg", v: { a: 45, k: 80, folate: 18, iron: 16 } },
  { id: "broccoli", name: "Broccoli", portion: "1 cup", protein: 4, calories: 55, fiber: 4, cat: "veg", type: "veg", v: { c: 90, k: 85, folate: 16 } },
  { id: "bhindi", name: "Bhindi", portion: "1 bowl", protein: 2, calories: 85, fiber: 4, cat: "veg", type: "veg", v: { k: 25, c: 20, folate: 18 } },
  { id: "matar", name: "Green peas", portion: "1/2 cup", protein: 5, calories: 75, fiber: 5, cat: "veg", type: "veg", v: { c: 28, k: 20, b1: 18 } },
  { id: "carrot", name: "Carrot", portion: "1 cup", protein: 1, calories: 50, fiber: 4, cat: "veg", type: "veg", v: { a: 110, k: 18, potassium: 8 } },
  { id: "capsicum", name: "Capsicum", portion: "1 cup", protein: 1, calories: 40, fiber: 3, cat: "veg", type: "veg", v: { c: 120, a: 18, b6: 12 } },
  { id: "sweet_potato", name: "Sweet potato", portion: "1 medium", protein: 2, calories: 115, fiber: 4, cat: "veg", type: "veg", v: { a: 120, c: 20, potassium: 12, b6: 16 } },
  { id: "banana", name: "Banana", portion: "1 medium", protein: 1, calories: 105, fiber: 3, cat: "fruit", type: "veg", v: { b6: 25, potassium: 12, c: 12 } },
  { id: "orange", name: "Orange", portion: "1 medium", protein: 1, calories: 65, fiber: 3, cat: "fruit", type: "veg", v: { c: 90, folate: 10 } },
  { id: "amla", name: "Amla", portion: "1 fruit", protein: 1, calories: 45, fiber: 3, cat: "fruit", type: "veg", v: { c: 180, iron: 4 } },
  { id: "papaya", name: "Papaya", portion: "1 cup", protein: 1, calories: 60, fiber: 3, cat: "fruit", type: "veg", v: { c: 95, a: 30, folate: 14 } },
  { id: "hemp", name: "Hemp seeds", portion: "3 tbsp", protein: 10, calories: 170, fiber: 1, cat: "seeds", type: "veg", v: { magnesium: 45, zinc: 25, b1: 25, e: 8 } },
  { id: "pumpkin", name: "Pumpkin seeds", portion: "2 tbsp", protein: 5, calories: 120, fiber: 1, cat: "seeds", type: "veg", v: { magnesium: 38, zinc: 25, iron: 12 } },
  { id: "chia", name: "Chia seeds", portion: "2 tbsp", protein: 4, calories: 140, fiber: 10, cat: "seeds", type: "veg", v: { magnesium: 24, calcium: 18, iron: 12 } },
  { id: "flax", name: "Flaxseeds", portion: "2 tbsp", protein: 4, calories: 110, fiber: 6, cat: "seeds", type: "veg", v: { magnesium: 20, b1: 25 } },
  { id: "almonds", name: "Almonds", portion: "30g", protein: 6, calories: 175, fiber: 4, cat: "seeds", type: "veg", v: { e: 45, magnesium: 20, calcium: 8 } },
  { id: "peanuts", name: "Peanuts", portion: "30g", protein: 8, calories: 170, fiber: 3, cat: "seeds", type: "veg", v: { b3: 25, folate: 12, magnesium: 14 } },
  { id: "egg", name: "Whole egg", portion: "1 egg", protein: 6, calories: 75, fiber: 0, cat: "nonvegProtein", type: "nonveg", v: { b12: 20, d: 8, a: 8, b2: 15 } },
  { id: "egg_white", name: "Egg whites", portion: "2 whites", protein: 7, calories: 35, fiber: 0, cat: "nonvegProtein", type: "nonveg", v: { b2: 10 } },
  { id: "chicken", name: "Chicken breast", portion: "75g cooked", protein: 23, calories: 125, fiber: 0, cat: "nonvegProtein", type: "nonveg", v: { b3: 45, b6: 35, zinc: 10 } },
  { id: "fish", name: "Fish fillet", portion: "75g cooked", protein: 18, calories: 110, fiber: 0, cat: "nonvegProtein", type: "nonveg", v: { b12: 70, d: 30, b3: 35 } },
  { id: "salmon", name: "Salmon", portion: "75g cooked", protein: 20, calories: 155, fiber: 0, cat: "nonvegProtein", type: "nonveg", v: { b12: 90, d: 70, b3: 40, b6: 30 } },
  { id: "prawns", name: "Prawns", portion: "75g cooked", protein: 18, calories: 90, fiber: 0, cat: "nonvegProtein", type: "nonveg", v: { b12: 60, zinc: 18, b3: 20 } },
  { id: "mutton", name: "Mutton", portion: "75g cooked", protein: 19, calories: 190, fiber: 0, cat: "nonvegProtein", type: "nonveg", v: { b12: 80, zinc: 35, iron: 18, b3: 30 } },
  { id: "tuna", name: "Tuna", portion: "75g cooked", protein: 21, calories: 105, fiber: 0, cat: "nonvegProtein", type: "nonveg", v: { b12: 80, d: 25, b3: 50, b6: 30 } }
];

const additionLibrary = [
  { nutrient: "c", ids: ["amla", "orange", "capsicum", "broccoli", "papaya"], why: "Vitamin C supports iron absorption, skin health, and collagen support." },
  { nutrient: "a", ids: ["carrot", "sweet_potato", "palak", "papaya"], why: "Vitamin A supports eyes, skin, and immunity." },
  { nutrient: "k", ids: ["palak", "methi", "broccoli", "bhindi"], why: "Vitamin K is naturally high in leafy greens and cruciferous vegetables." },
  { nutrient: "folate", ids: ["chana", "rajma", "dal", "sprouts", "palak"], why: "Folate is commonly improved with legumes and greens." },
  { nutrient: "b12", ids: ["curd", "milk", "paneer", "egg", "fish"], why: "B12 is mainly covered by dairy, eggs, fish, and meat." },
  { nutrient: "d", ids: ["fish", "salmon", "egg", "milk"], why: "Vitamin D is difficult to cover from food alone, but fish, eggs, and fortified milk can help." },
  { nutrient: "e", ids: ["almonds", "hemp", "pumpkin"], why: "Vitamin E comes naturally from nuts and seeds." },
  { nutrient: "iron", ids: ["chana", "rajma", "soya", "palak", "mutton"], why: "Iron improves with legumes, greens, soya, and meat; add Vitamin C foods with plant iron." },
  { nutrient: "calcium", ids: ["curd", "milk", "paneer", "tofu", "ragi_roti"], why: "Calcium is easiest through dairy, calcium-set tofu, and ragi." },
  { nutrient: "magnesium", ids: ["pumpkin", "hemp", "chia", "quinoa", "oats"], why: "Seeds, whole grains, and legumes help magnesium intake." },
  { nutrient: "zinc", ids: ["pumpkin", "hemp", "chana", "mutton", "prawns"], why: "Seeds, legumes, and animal proteins help zinc." },
  { nutrient: "potassium", ids: ["banana", "sweet_potato", "dal", "rajma", "palak"], why: "Potassium improves with fruit, potatoes, legumes, and greens." }
];

const recipeTemplates = [
  { needs: ["dal", "rice"], title: "Dal khichdi bowl", desc: "Use dal and rice with palak, carrot, or capsicum for a softer high-fiber one-pot meal." },
  { needs: ["paneer"], title: "Paneer protein plate", desc: "Pair paneer with roti, capsicum, palak, and curd for protein plus calcium and Vitamin C." },
  { needs: ["tofu"], title: "Tofu palak bowl", desc: "Saute tofu with palak or methi, add rice or roti, and finish with lemon for iron support." },
  { needs: ["chana"], title: "Chana salad chaat", desc: "Mix chana with onion, tomato, capsicum, lemon, and curd for protein, fiber, folate, and Vitamin C." },
  { needs: ["egg"], title: "Egg bhurji plate", desc: "Make bhurji with capsicum and palak, then serve with roti and curd." },
  { needs: ["chicken"], title: "Chicken roti bowl", desc: "Use chicken with roti or rice, a leafy sabzi, and curd for a complete plate." },
  { needs: ["fish"], title: "Fish curry meal", desc: "Serve fish with rice, bhindi or broccoli, and citrus on the side for a light protein-rich meal." },
  { needs: ["oats"], title: "Protein oats", desc: "Cook oats with milk or curd, then top with chia, almonds, banana, or amla on the side." },
  { needs: ["besan_chilla"], title: "Besan chilla wrap", desc: "Fill chilla with paneer or tofu, palak, capsicum, and curd dip." }
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const counts = {};
let currentMeal = "breakfast";
let currentFilter = "all";

meals.forEach((meal) => {
  counts[meal.id] = {};
  foods.forEach((food) => counts[meal.id][food.id] = 0);
});

const q = (selector) => document.querySelector(selector);
const mealTabs = q("#mealTabs");
const filtersEl = q("#filters");
const foodsEl = q("#foods");

function round(n) {
  return Math.round(n).toLocaleString("en-IN");
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

function profile() {
  const sex = q("#sex").value;
  const age = Number(q("#age").value || 30);
  const weight = Number(q("#weight").value || 60);
  const activity = q("#activity").value;
  const bodyGoal = q("#bodyGoal").value;
  const planMode = q("#planMode").value;
  const dietStyle = q("#dietStyle").value;
  const proteinFactor = bodyGoal === "muscle" ? 1.6 : bodyGoal === "fatloss" ? 1.35 : activity === "active" ? 1.25 : 1;
  const activityCal = activity === "active" ? 34 : activity === "moderate" ? 30 : 27;
  const goalCalorieShift = bodyGoal === "fatloss" ? -250 : bodyGoal === "muscle" ? 200 : 0;
  return {
    sex,
    age,
    weight,
    activity,
    bodyGoal,
    planMode,
    dietStyle,
    proteinTarget: Math.round(weight * proteinFactor),
    fiberTarget: sex === "male" && age < 51 ? 38 : sex === "male" ? 30 : age < 51 ? 25 : 21,
    calorieTarget: Math.max(1200, Math.round(weight * activityCal + goalCalorieShift))
  };
}

function adjustedReqs() {
  const p = profile();
  return {
    protein: p.proteinTarget,
    calories: p.calorieTarget,
    fiber: p.fiberTarget,
    a: 100,
    c: 100,
    d: 100,
    e: 100,
    k: 100,
    b1: 100,
    b2: 100,
    b3: 100,
    b6: 100,
    folate: 100,
    b12: p.dietStyle === "veg" ? 115 : 100,
    iron: p.sex === "female" && p.age < 51 ? 100 : 70,
    calcium: p.age > 50 ? 120 : 100,
    magnesium: 100,
    potassium: 100,
    zinc: 100
  };
}

function targetCards() {
  const p = profile();
  q("#summaryMode").textContent = p.planMode === "week" ? "Weekly basket" : "Today";
  q("#targetStrip").innerHTML = [
    ["Protein", `${p.proteinTarget}g/day`, "based on weight, activity, and goal"],
    ["Fiber", `${p.fiberTarget}g/day`, "daily planning target"],
    ["Calories", `~${round(p.calorieTarget)}/day`, "rough energy estimate"],
    ["Mode", p.planMode === "week" ? "Weekly planner" : "Daily planner", p.dietStyle === "veg" ? "vegetarian foods shown" : "all matching foods shown"]
  ].map(([label, value, helper]) => `<div class="target-card"><span>${label}</span><b>${value}</b><span>${helper}</span></div>`).join("");
}

function renderTabs() {
  mealTabs.innerHTML = meals.map((meal) => `<button class="tab" type="button" role="tab" aria-selected="${meal.id === currentMeal}" data-meal="${meal.id}">${meal.label}</button>`).join("");
}

function renderFilters() {
  filtersEl.innerHTML = filters.map(([id, label]) => `<button class="pill ${id === currentFilter ? "active" : ""}" type="button" data-filter="${id}">${label}</button>`).join("");
}

function visibleFoods() {
  const p = profile();
  return foods.filter((food) => {
    if (food.cat === "recipe") return false;
    const filterMatch = currentFilter === "all" || food.cat === currentFilter;
    const dietMatch = p.dietStyle !== "veg" || food.type !== "nonveg";
    const nonVegFocus = p.dietStyle !== "nonveg" || food.type !== "veg" || ["dairy", "veg", "fruit", "grains", "seeds"].includes(food.cat);
    return filterMatch && dietMatch && nonVegFocus;
  });
}

function renderFoods() {
  const list = visibleFoods();
  foodsEl.innerHTML = list.map((food) => {
    const count = counts[currentMeal][food.id] || 0;
    return `
      <article class="food">
        <div>
          <h3>${food.name}</h3>
          <div class="portion">${food.portion}</div>
          <div class="tags">
            <span class="tag">${food.protein}g protein</span>
            <span class="tag cal">${food.calories} kcal</span>
            <span class="tag fiber">${food.fiber}g fiber</span>
            <span class="tag type">${food.type === "nonveg" ? "non-veg" : "veg"}</span>
          </div>
        </div>
        <div class="stepper" aria-label="${food.name} quantity">
          <button type="button" data-step="-1" data-food="${food.id}" aria-label="Remove ${food.name}">-</button>
          <span class="count">${count}</span>
          <button type="button" data-step="1" data-food="${food.id}" aria-label="Add ${food.name}">+</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderProteinLibrary() {
  const vegSources = foods.filter((food) => food.cat !== "recipe" && food.type === "veg" && (food.protein >= 5 || ["dal", "vegProtein", "dairy", "seeds"].includes(food.cat)));
  const nonVegSources = foods.filter((food) => food.cat !== "recipe" && food.type === "nonveg");
  const render = (items) => items
    .map((food) => `<div class="source-pill"><b>${food.name}</b><span>${food.protein}g protein - ${food.portion}</span></div>`)
    .join("");
  q("#vegProteinList").innerHTML = render(vegSources);
  q("#nonVegProteinList").innerHTML = render(nonVegSources);
}

function totalsFor(mealId) {
  return foods.reduce((total, food) => {
    const amount = counts[mealId][food.id] || 0;
    addFoodToTotal(total, food, amount);
    return total;
  }, blankTotal());
}

function blankTotal() {
  return { protein: 0, calories: 0, fiber: 0, vitamins: Object.fromEntries(Object.keys(vitaminLabels).map((k) => [k, 0])) };
}

function addFoodToTotal(total, food, amount) {
  if (!amount) return;
  total.protein += amount * food.protein;
  total.calories += amount * food.calories;
  total.fiber += amount * food.fiber;
  Object.entries(food.v || {}).forEach(([key, value]) => {
    total.vitamins[key] = (total.vitamins[key] || 0) + value * amount;
  });
}

function allTotals() {
  return meals.reduce((total, meal) => {
    const mealTotal = totalsFor(meal.id);
    total.protein += mealTotal.protein;
    total.calories += mealTotal.calories;
    total.fiber += mealTotal.fiber;
    Object.keys(total.vitamins).forEach((key) => total.vitamins[key] += mealTotal.vitamins[key] || 0);
    return total;
  }, blankTotal());
}

function selectedItems(mealId) {
  return foods
    .filter((food) => (counts[mealId][food.id] || 0) > 0)
    .map((food) => ({ ...food, count: counts[mealId][food.id] }));
}

function selectedBasket() {
  const map = new Map();
  meals.forEach((meal) => {
    selectedItems(meal.id).forEach((item) => {
      const existing = map.get(item.id) || { ...item, count: 0 };
      existing.count += item.count;
      map.set(item.id, existing);
    });
  });
  return [...map.values()];
}

function updateSummary() {
  const p = profile();
  const total = allTotals();
  targetCards();
  q("#proteinTotal").textContent = `${round1(total.protein)}g`;
  q("#calorieTotal").textContent = total.calories ? `~${round(total.calories)}` : "0";
  q("#fiberTotal").textContent = `${round1(total.fiber)}g`;
  q("#proteinFill").style.width = `${Math.min(100, total.protein / p.proteinTarget * 100)}%`;
  q("#calorieFill").style.width = `${Math.min(100, total.calories / p.calorieTarget * 100)}%`;
  q("#fiberFill").style.width = `${Math.min(100, total.fiber / p.fiberTarget * 100)}%`;
  q("#mealSplit").innerHTML = meals.map((meal) => {
    const t = totalsFor(meal.id);
    return `<div class="meal-mini"><span>${meal.label}</span><b>${round1(t.protein)}g protein</b></div>`;
  }).join("");
  renderNutrients();
  renderRecipes();
  renderWeeklyPlan();
  q("#shareText").value = buildShareText();
}

function nutrientRows() {
  const p = profile();
  const req = adjustedReqs();
  const total = allTotals();
  return [
    ["Protein", total.protein, req.protein, "g"],
    ["Fiber", total.fiber, req.fiber, "g"],
    ["Calories", total.calories, p.calorieTarget, "kcal"],
    ...Object.keys(vitaminLabels).map((key) => [vitaminLabels[key], Math.round(total.vitamins[key] || 0), req[key], "%"])
  ];
}

function renderNutrients() {
  const rows = nutrientRows();
  q("#nutrientSummary").innerHTML = rows.map(([label, value, target, unit]) => {
    const percent = target ? Math.min(160, Math.round(value / target * 100)) : 0;
    const display = unit === "%" ? `${percent}%` : `${round(value)} / ${round(target)}${unit}`;
    return `<div class="nutrient-row"><b>${label}</b><div class="smallbar"><span style="width:${Math.min(100, percent)}%"></span></div><span>${display}</span></div>`;
  }).join("");

  const total = allTotals();
  const covered = Object.keys(vitaminLabels)
    .filter((key) => (total.vitamins[key] || 0) >= 70)
    .sort((a, b) => (total.vitamins[b] || 0) - (total.vitamins[a] || 0));
  q("#vitaminCoverage").innerHTML = covered.length
    ? covered.slice(0, 8).map((key) => `<div class="coverage-item"><b>${vitaminLabels[key]} looks covered</b><span>About ${Math.round(total.vitamins[key])}% from selected foods.</span></div>`).join("")
    : `<div class="coverage-item"><b>No major vitamin is covered yet</b><span>Add legumes, greens, dairy, fruit, seeds, eggs, fish, or other protein sources to start seeing coverage.</span></div>`;

  renderGapSuggestions();
}

function renderGapSuggestions() {
  const p = profile();
  const total = allTotals();
  const macroSuggestions = [];
  if (total.protein < p.proteinTarget) macroSuggestions.push({ label: "Protein", gap: `${round1(p.proteinTarget - total.protein)}g`, ids: p.dietStyle === "veg" ? ["soya", "paneer", "tofu", "greek_yogurt", "dal"] : ["chicken", "fish", "egg", "curd", "dal"], why: "Add one protein anchor to a main meal." });
  if (total.fiber < p.fiberTarget) macroSuggestions.push({ label: "Fiber", gap: `${round1(p.fiberTarget - total.fiber)}g`, ids: ["chana", "rajma", "chia", "palak", "fruit"], why: "Add legumes, seeds, fruit, or vegetables." });

  const vitaminSuggestions = additionLibrary
    .filter((item) => (total.vitamins[item.nutrient] || 0) < 80)
    .slice(0, 5)
    .map((item) => ({ label: vitaminLabels[item.nutrient], gap: `${Math.max(0, 80 - Math.round(total.vitamins[item.nutrient] || 0))}%`, ids: item.ids, why: item.why }));

  const all = [...macroSuggestions, ...vitaminSuggestions].slice(0, 7);
  q("#gapSuggestions").innerHTML = all.length ? all.map((item) => {
    const options = item.ids
      .map((id) => foods.find((food) => food.id === id))
      .filter((food) => food && (p.dietStyle !== "veg" || food.type !== "nonveg"))
      .slice(0, 4)
      .map((food) => food.name)
      .join(", ");
    return `<div class="suggestion-item"><b>${item.label}: fill about ${item.gap}</b><span>${item.why} Try: ${options || "more colorful whole foods"}.</span></div>`;
  }).join("") : `<div class="suggestion-item"><b>Your selected ingredients look well rounded</b><span>Rotate colors, legumes, protein anchors, fruit, dairy or alternatives, nuts, and seeds across the week.</span></div>`;
}

function renderRecipes() {
  const basket = selectedBasket();
  const selectedIds = new Set(basket.map((item) => item.id));
  const ideas = recipeTemplates.filter((recipe) => recipe.needs.some((id) => selectedIds.has(id))).slice(0, 5);
  const fallback = basket.slice(0, 5).map((item) => ({
    title: `${item.name} balanced plate`,
    desc: `Build around ${item.name}: add one grain, one vegetable, one curd or dal side, and one Vitamin C source like lemon, amla, orange, or capsicum.`
  }));
  const finalIdeas = ideas.length ? ideas : fallback;
  q("#recipeIdeas").innerHTML = finalIdeas.length
    ? finalIdeas.map((idea) => `<div class="recipe-item"><b>${idea.title}</b><span>${idea.desc}</span></div>`).join("")
    : `<div class="recipe-item"><b>Select a few ingredients first</b><span>Recipe ideas will appear once the planner has a food basket to work with.</span></div>`;
}

function weeklyMeals() {
  const basket = selectedBasket();
  const defaults = foods.filter((food) => ["dal", "paneer", "curd", "palak", "rice", "chana", "oats", "carrot", "orange", "pumpkin"].includes(food.id));
  const pool = [...basket, ...defaults.filter((food) => !basket.some((item) => item.id === food.id))];
  const proteins = pool.filter((item) => item.protein >= 6);
  const grains = pool.filter((item) => item.cat === "grains");
  const vegetables = pool.filter((item) => item.cat === "veg" || item.cat === "fruit");
  const extras = pool.filter((item) => item.cat === "seeds" || item.cat === "dairy" || item.cat === "dal");

  return days.map((day, index) => {
    const protein = (proteins[index % Math.max(1, proteins.length)] || pool[index % pool.length]).name;
    const grain = (grains[index % Math.max(1, grains.length)] || pool[(index + 1) % pool.length]).name;
    const veg = (vegetables[index % Math.max(1, vegetables.length)] || pool[(index + 2) % pool.length]).name;
    const extra = (extras[index % Math.max(1, extras.length)] || pool[(index + 3) % pool.length]).name;
    return { day, meals: [`${protein} + ${grain}`, `${veg} side`, `${extra} add-on`] };
  });
}

function renderWeeklyPlan() {
  const plans = weeklyMeals();
  q("#weeklyPlan").innerHTML = plans.map((plan) => `
    <article class="day-card">
      <b>${plan.day}</b>
      <span>${profile().planMode === "week" ? "Planned from your selected weekly basket" : "Preview from selected foods"}</span>
      <ul>${plan.meals.map((meal) => `<li>${meal}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function buildShareText() {
  const p = profile();
  const total = allTotals();
  const parts = ["Know Your Plate meal plan", ""];
  parts.push(`Targets: ${p.proteinTarget}g protein | ${p.fiberTarget}g fiber | ~${round(p.calorieTarget)} kcal/day`);
  parts.push(`Selected: ${round1(total.protein)}g protein | ${round1(total.fiber)}g fiber | ~${round(total.calories)} kcal`);
  parts.push("");
  meals.forEach((meal) => {
    const items = selectedItems(meal.id);
    if (!items.length) return;
    parts.push(`${meal.label}:`);
    items.forEach((item) => parts.push(`- ${item.count > 1 ? item.count + "x " : ""}${item.name} (${item.portion})`));
    parts.push("");
  });
  parts.push("Food-first next steps:");
  const suggestionText = [...q("#gapSuggestions").querySelectorAll(".suggestion-item")].slice(0, 4).map((el) => el.textContent.trim());
  suggestionText.forEach((text) => parts.push(`- ${text}`));
  parts.push("");
  parts.push("Note: Values are estimates for planning and education.");
  return parts.join("\n");
}

function addFood(id, step) {
  counts[currentMeal][id] = Math.max(0, (counts[currentMeal][id] || 0) + step);
  renderFoods();
  updateSummary();
}

function populateCustomTemplates() {
  q("#customTemplate").innerHTML += foods
    .filter((food) => food.cat !== "recipe" && (food.type === "veg" || food.type === "nonveg"))
    .map((food) => `<option value="${food.id}">${food.name} (${food.portion})</option>`)
    .join("");
}

mealTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-meal]");
  if (!button) return;
  currentMeal = button.dataset.meal;
  renderTabs();
  renderFoods();
});

filtersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  currentFilter = button.dataset.filter;
  renderFilters();
  renderFoods();
});

foodsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-food]");
  if (!button) return;
  addFood(button.dataset.food, Number(button.dataset.step));
});

["planMode", "dietStyle", "sex", "age", "weight", "activity", "bodyGoal"].forEach((id) => {
  q(`#${id}`).addEventListener("input", () => {
    renderFoods();
    updateSummary();
  });
});

q("#resetAll").addEventListener("click", () => {
  meals.forEach((meal) => foods.forEach((food) => counts[meal.id][food.id] = 0));
  renderFoods();
  updateSummary();
});

q("#generateWeek").addEventListener("click", renderWeeklyPlan);

q("#copyPlan").addEventListener("click", async () => {
  const text = q("#shareText").value;
  try {
    await navigator.clipboard.writeText(text);
    q("#copyPlan").textContent = "Copied";
    setTimeout(() => q("#copyPlan").textContent = "Copy plan", 1300);
  } catch {
    q("#shareText").select();
  }
});

q("#customTemplate").addEventListener("input", (event) => {
  const food = foods.find((item) => item.id === event.target.value);
  if (!food) return;
  q("#customServing").value = food.portion;
  q("#customProtein").value = food.protein;
  q("#customCalories").value = food.calories;
  q("#customFiber").value = food.fiber;
});

q("#customForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = q("#customName").value.trim();
  const template = foods.find((item) => item.id === q("#customTemplate").value);
  const serving = q("#customServing").value.trim() || template?.portion || "1 single-person serving";
  const protein = Number(q("#customProtein").value || template?.protein || 0);
  const calories = Number(q("#customCalories").value || template?.calories || 0);
  const fiber = Number(q("#customFiber").value || template?.fiber || 0);
  if (!name) return;
  const id = `custom_${Date.now()}`;
  foods.push({
    id,
    name,
    portion: serving,
    protein,
    calories,
    fiber,
    cat: "custom",
    type: "veg",
    v: template ? { ...template.v } : {}
  });
  meals.forEach((meal) => counts[meal.id][id] = meal.id === currentMeal ? 1 : 0);
  event.target.reset();
  currentFilter = "custom";
  renderFilters();
  renderProteinLibrary();
  renderFoods();
  updateSummary();
});

/* =========================================================
   RECIPE BUILDER (Version 2)
   Ingredient nutrition database + unit conversion engine.
   Values are per-100g (or per-100ml) practical estimates,
   same "planning estimate" spirit as the foods list above.
   ========================================================= */

const unitLabels = {
  g: "grams", ml: "ml", cup: "cup", tbsp: "tablespoon", tsp: "teaspoon",
  piece: "piece", katori: "katori", bowl: "bowl", roti: "roti", slice: "slice", custom: "custom (g)"
};

// Generic fallback grams for count-style units when an ingredient has no override.
const genericUnitGrams = { piece: 50, katori: 150, bowl: 200, roti: 40, slice: 25 };

const ingredientDB = [
  { names: ["rolled oats", "oats"], per100: { calories: 380, protein: 13, carbs: 67, fat: 7, fiber: 10 }, cup: 90 },
  { names: ["paneer", "cottage cheese"], per100: { calories: 300, protein: 18, carbs: 4, fat: 24, fiber: 0 } },
  { names: ["spinach", "palak"], per100: { calories: 23, protein: 3, carbs: 4, fat: 0, fiber: 2 } },
  { names: ["corn", "sweet corn", "makai"], per100: { calories: 96, protein: 3, carbs: 21, fat: 1, fiber: 2 } },
  { names: ["olive oil"], per100: { calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0 }, tbsp: 14, tsp: 4.5, density: 0.92 },
  { names: ["oil", "cooking oil", "vegetable oil", "sunflower oil", "mustard oil"], per100: { calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0 }, tbsp: 14, tsp: 4.5, density: 0.92 },
  { names: ["ghee", "clarified butter"], per100: { calories: 900, protein: 0, carbs: 0, fat: 100, fiber: 0 }, tbsp: 13, tsp: 4.5 },
  { names: ["butter"], per100: { calories: 717, protein: 1, carbs: 0, fat: 81, fiber: 0 }, tbsp: 14, tsp: 5 },
  { names: ["onion", "pyaz"], per100: { calories: 40, protein: 1, carbs: 9, fat: 0, fiber: 2 }, piece: 100 },
  { names: ["garlic"], per100: { calories: 149, protein: 6, carbs: 33, fat: 0, fiber: 2 }, piece: 3 },
  { names: ["ginger"], per100: { calories: 80, protein: 2, carbs: 18, fat: 1, fiber: 2 }, piece: 5 },
  { names: ["tomato"], per100: { calories: 18, protein: 1, carbs: 4, fat: 0, fiber: 1 }, piece: 100 },
  { names: ["potato", "aloo"], per100: { calories: 77, protein: 2, carbs: 17, fat: 0, fiber: 2 }, piece: 150 },
  { names: ["cooked rice", "rice", "steamed rice"], per100: { calories: 130, protein: 3, carbs: 28, fat: 0, fiber: 0 }, katori: 150 },
  { names: ["brown rice"], per100: { calories: 123, protein: 3, carbs: 26, fat: 1, fiber: 2 }, katori: 150 },
  { names: ["quinoa"], per100: { calories: 120, protein: 4, carbs: 21, fat: 2, fiber: 3 }, katori: 150 },
  { names: ["whole wheat pasta", "wheat pasta"], per100: { calories: 124, protein: 5, carbs: 25, fat: 1, fiber: 4 } },
  { names: ["pasta", "penne", "spaghetti", "macaroni"], per100: { calories: 131, protein: 5, carbs: 25, fat: 1, fiber: 2 } },
  { names: ["wheat flour", "atta"], per100: { calories: 340, protein: 12, carbs: 72, fat: 2, fiber: 11 }, cup: 120 },
  { names: ["maida", "refined flour", "all purpose flour"], per100: { calories: 364, protein: 10, carbs: 76, fat: 1, fiber: 3 }, cup: 120 },
  { names: ["besan", "chickpea flour", "gram flour"], per100: { calories: 387, protein: 22, carbs: 58, fat: 6, fiber: 11 }, cup: 100 },
  { names: ["sooji", "rava", "semolina"], per100: { calories: 360, protein: 13, carbs: 73, fat: 1, fiber: 4 }, cup: 170 },
  { names: ["bread", "white bread"], per100: { calories: 265, protein: 9, carbs: 49, fat: 3, fiber: 3 }, slice: 25 },
  { names: ["brown bread", "whole wheat bread"], per100: { calories: 247, protein: 13, carbs: 41, fat: 3, fiber: 7 }, slice: 28 },
  { names: ["roti", "chapati", "phulka"], per100: { calories: 297, protein: 9, carbs: 55, fat: 5, fiber: 8 }, roti: 40 },
  { names: ["tortilla", "wheat tortilla"], per100: { calories: 289, protein: 8, carbs: 48, fat: 7, fiber: 3 }, piece: 45 },
  { names: ["corn tortilla", "taco shell"], per100: { calories: 218, protein: 6, carbs: 45, fat: 3, fiber: 4 }, piece: 30 },
  { names: ["egg", "whole egg", "eggs"], per100: { calories: 155, protein: 13, carbs: 1, fat: 11, fiber: 0 }, piece: 50 },
  { names: ["egg white", "egg whites"], per100: { calories: 52, protein: 11, carbs: 1, fat: 0, fiber: 0 }, piece: 33 },
  { names: ["chicken breast", "chicken"], per100: { calories: 165, protein: 31, carbs: 0, fat: 4, fiber: 0 } },
  { names: ["chicken thigh", "chicken keema", "minced chicken"], per100: { calories: 209, protein: 26, carbs: 0, fat: 11, fiber: 0 } },
  { names: ["fish", "fish fillet"], per100: { calories: 145, protein: 21, carbs: 0, fat: 6, fiber: 0 } },
  { names: ["prawns", "shrimp"], per100: { calories: 99, protein: 24, carbs: 0, fat: 1, fiber: 0 } },
  { names: ["mutton", "lamb"], per100: { calories: 258, protein: 25, carbs: 0, fat: 17, fiber: 0 } },
  { names: ["beef", "ground beef", "minced beef", "keema"], per100: { calories: 250, protein: 26, carbs: 0, fat: 15, fiber: 0 } },
  { names: ["pork"], per100: { calories: 242, protein: 27, carbs: 0, fat: 14, fiber: 0 } },
  { names: ["bacon"], per100: { calories: 541, protein: 37, carbs: 1, fat: 42, fiber: 0 }, slice: 8 },
  { names: ["sausage"], per100: { calories: 301, protein: 12, carbs: 3, fat: 27, fiber: 0 }, piece: 60 },
  { names: ["tofu"], per100: { calories: 125, protein: 12, carbs: 3, fat: 7, fiber: 1 } },
  { names: ["tempeh"], per100: { calories: 195, protein: 19, carbs: 8, fat: 11, fiber: 5 } },
  { names: ["soya chunks", "soy chunks", "nutrela"], per100: { calories: 345, protein: 52, carbs: 33, fat: 1, fiber: 13 } },
  { names: ["chickpeas", "chana", "kabuli chana", "garbanzo beans"], per100: { calories: 164, protein: 9, carbs: 27, fat: 3, fiber: 8 }, katori: 150 },
  { names: ["kidney beans", "rajma"], per100: { calories: 127, protein: 9, carbs: 23, fat: 0, fiber: 7 }, katori: 150 },
  { names: ["black beans"], per100: { calories: 132, protein: 9, carbs: 24, fat: 1, fiber: 9 }, katori: 150 },
  { names: ["refried beans"], per100: { calories: 93, protein: 6, carbs: 15, fat: 1, fiber: 6 }, katori: 150 },
  { names: ["dal", "lentils", "toor dal", "arhar dal"], per100: { calories: 116, protein: 9, carbs: 20, fat: 0, fiber: 4 }, katori: 150 },
  { names: ["moong dal"], per100: { calories: 105, protein: 7, carbs: 19, fat: 0, fiber: 4 }, katori: 150 },
  { names: ["masoor dal"], per100: { calories: 116, protein: 9, carbs: 20, fat: 0, fiber: 5 }, katori: 150 },
  { names: ["sprouts", "sprouted moong"], per100: { calories: 105, protein: 3, carbs: 19, fat: 1, fiber: 2 }, bowl: 100 },
  { names: ["milk"], per100: { calories: 61, protein: 3, carbs: 5, fat: 3, fiber: 0 }, cup: 240 },
  { names: ["curd", "yogurt", "dahi"], per100: { calories: 60, protein: 4, carbs: 5, fat: 3, fiber: 0 }, bowl: 200 },
  { names: ["greek yogurt"], per100: { calories: 59, protein: 10, carbs: 4, fat: 0, fiber: 0 }, bowl: 170 },
  { names: ["buttermilk", "chaas"], per100: { calories: 40, protein: 3, carbs: 5, fat: 1, fiber: 0 }, cup: 240 },
  { names: ["cheese", "cheddar cheese"], per100: { calories: 402, protein: 25, carbs: 1, fat: 33, fiber: 0 }, slice: 20 },
  { names: ["mozzarella"], per100: { calories: 280, protein: 28, carbs: 3, fat: 17, fiber: 0 }, slice: 28 },
  { names: ["parmesan"], per100: { calories: 431, protein: 38, carbs: 4, fat: 29, fiber: 0 }, tbsp: 5 },
  { names: ["cream cheese"], per100: { calories: 342, protein: 6, carbs: 4, fat: 34, fiber: 0 }, tbsp: 15 },
  { names: ["ricotta"], per100: { calories: 174, protein: 11, carbs: 3, fat: 13, fiber: 0 } },
  { names: ["feta cheese"], per100: { calories: 264, protein: 14, carbs: 4, fat: 21, fiber: 0 } },
  { names: ["sour cream"], per100: { calories: 198, protein: 2, carbs: 4, fat: 20, fiber: 0 }, tbsp: 12 },
  { names: ["cream", "fresh cream"], per100: { calories: 340, protein: 2, carbs: 3, fat: 36, fiber: 0 }, tbsp: 15 },
  { names: ["coconut milk"], per100: { calories: 230, protein: 2, carbs: 6, fat: 24, fiber: 2 }, cup: 240 },
  { names: ["capsicum", "bell pepper"], per100: { calories: 31, protein: 1, carbs: 6, fat: 0, fiber: 2 }, piece: 120 },
  { names: ["carrot"], per100: { calories: 41, protein: 1, carbs: 10, fat: 0, fiber: 3 }, piece: 60 },
  { names: ["broccoli"], per100: { calories: 34, protein: 3, carbs: 7, fat: 0, fiber: 3 }, cup: 90 },
  { names: ["cabbage"], per100: { calories: 25, protein: 1, carbs: 6, fat: 0, fiber: 3 }, cup: 90 },
  { names: ["cucumber"], per100: { calories: 15, protein: 1, carbs: 4, fat: 0, fiber: 1 }, piece: 150 },
  { names: ["lettuce"], per100: { calories: 15, protein: 1, carbs: 3, fat: 0, fiber: 1 }, cup: 55 },
  { names: ["bhindi", "okra"], per100: { calories: 33, protein: 2, carbs: 7, fat: 0, fiber: 3 }, bowl: 150 },
  { names: ["methi", "fenugreek leaves"], per100: { calories: 49, protein: 4, carbs: 6, fat: 1, fiber: 2 }, bowl: 100 },
  { names: ["green peas", "matar", "peas"], per100: { calories: 81, protein: 5, carbs: 14, fat: 0, fiber: 5 }, cup: 145 },
  { names: ["mushroom"], per100: { calories: 22, protein: 3, carbs: 3, fat: 0, fiber: 1 }, cup: 70 },
  { names: ["avocado"], per100: { calories: 160, protein: 2, carbs: 9, fat: 15, fiber: 7 }, piece: 150 },
  { names: ["zucchini", "courgette"], per100: { calories: 17, protein: 1, carbs: 3, fat: 0, fiber: 1 }, piece: 200 },
  { names: ["sweet potato"], per100: { calories: 86, protein: 2, carbs: 20, fat: 0, fiber: 3 }, piece: 130 },
  { names: ["jalapeno"], per100: { calories: 29, protein: 1, carbs: 6, fat: 0, fiber: 3 }, piece: 14 },
  { names: ["spring onion", "green onion", "scallion"], per100: { calories: 32, protein: 2, carbs: 7, fat: 0, fiber: 3 }, piece: 15 },
  { names: ["bean sprouts"], per100: { calories: 30, protein: 3, carbs: 6, fat: 0, fiber: 2 }, bowl: 100 },
  { names: ["banana"], per100: { calories: 89, protein: 1, carbs: 23, fat: 0, fiber: 3 }, piece: 120 },
  { names: ["apple"], per100: { calories: 52, protein: 0, carbs: 14, fat: 0, fiber: 2 }, piece: 180 },
  { names: ["orange"], per100: { calories: 47, protein: 1, carbs: 12, fat: 0, fiber: 2 }, piece: 130 },
  { names: ["lemon"], per100: { calories: 29, protein: 1, carbs: 9, fat: 0, fiber: 3 }, piece: 60 },
  { names: ["lime"], per100: { calories: 30, protein: 1, carbs: 11, fat: 0, fiber: 3 }, piece: 45 },
  { names: ["mango"], per100: { calories: 60, protein: 1, carbs: 15, fat: 0, fiber: 2 }, piece: 200 },
  { names: ["papaya"], per100: { calories: 43, protein: 1, carbs: 11, fat: 0, fiber: 2 }, cup: 145 },
  { names: ["hemp seeds"], per100: { calories: 553, protein: 32, carbs: 9, fat: 49, fiber: 4 }, tbsp: 10 },
  { names: ["pumpkin seeds"], per100: { calories: 559, protein: 30, carbs: 11, fat: 49, fiber: 6 }, tbsp: 8 },
  { names: ["chia seeds", "chia"], per100: { calories: 486, protein: 17, carbs: 42, fat: 31, fiber: 34 }, tbsp: 12 },
  { names: ["flaxseeds", "flax seeds", "flax"], per100: { calories: 534, protein: 18, carbs: 29, fat: 42, fiber: 27 }, tbsp: 10 },
  { names: ["sesame seeds", "til"], per100: { calories: 573, protein: 18, carbs: 23, fat: 50, fiber: 12 }, tbsp: 9 },
  { names: ["almonds"], per100: { calories: 579, protein: 21, carbs: 22, fat: 50, fiber: 12 }, piece: 1.2 },
  { names: ["peanuts", "groundnuts"], per100: { calories: 567, protein: 26, carbs: 16, fat: 49, fiber: 8 }, tbsp: 9 },
  { names: ["walnuts"], per100: { calories: 654, protein: 15, carbs: 14, fat: 65, fiber: 7 }, piece: 10 },
  { names: ["cashews"], per100: { calories: 553, protein: 18, carbs: 30, fat: 44, fiber: 3 }, piece: 2 },
  { names: ["peanut butter"], per100: { calories: 588, protein: 25, carbs: 20, fat: 50, fiber: 6 }, tbsp: 16 },
  { names: ["tahini"], per100: { calories: 595, protein: 17, carbs: 21, fat: 54, fiber: 9 }, tbsp: 15 },
  { names: ["hummus"], per100: { calories: 166, protein: 8, carbs: 14, fat: 10, fiber: 6 }, tbsp: 15 },
  { names: ["coconut", "grated coconut"], per100: { calories: 354, protein: 3, carbs: 15, fat: 33, fiber: 9 }, tbsp: 6 },
  { names: ["sugar"], per100: { calories: 387, protein: 0, carbs: 100, fat: 0, fiber: 0 }, tbsp: 12, tsp: 4 },
  { names: ["jaggery", "gur"], per100: { calories: 383, protein: 0, carbs: 98, fat: 0, fiber: 0 }, tbsp: 12 },
  { names: ["honey"], per100: { calories: 304, protein: 0, carbs: 82, fat: 0, fiber: 0 }, tbsp: 21, tsp: 7 },
  { names: ["dates"], per100: { calories: 282, protein: 2, carbs: 75, fat: 0, fiber: 7 }, piece: 8 },
  { names: ["raisins"], per100: { calories: 299, protein: 3, carbs: 79, fat: 0, fiber: 4 }, tbsp: 9 },
  { names: ["granola", "muesli"], per100: { calories: 471, protein: 10, carbs: 64, fat: 20, fiber: 7 }, cup: 100 },
  { names: ["soy sauce"], per100: { calories: 53, protein: 8, carbs: 5, fat: 0, fiber: 0 }, tbsp: 16, tsp: 5 },
  { names: ["oyster sauce"], per100: { calories: 51, protein: 1, carbs: 11, fat: 0, fiber: 0 }, tbsp: 16 },
  { names: ["hoisin sauce"], per100: { calories: 220, protein: 2, carbs: 44, fat: 3, fiber: 1 }, tbsp: 16 },
  { names: ["rice vinegar", "vinegar"], per100: { calories: 18, protein: 0, carbs: 0, fat: 0, fiber: 0 }, tbsp: 15 },
  { names: ["sesame oil"], per100: { calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0 }, tbsp: 14, tsp: 4.5 },
  { names: ["cornflour", "corn starch"], per100: { calories: 381, protein: 0, carbs: 91, fat: 0, fiber: 1 }, tbsp: 8 },
  { names: ["noodles", "egg noodles", "hakka noodles"], per100: { calories: 138, protein: 5, carbs: 25, fat: 2, fiber: 1 } },
  { names: ["rice noodles"], per100: { calories: 109, protein: 2, carbs: 25, fat: 0, fiber: 1 } },
  { names: ["ketchup", "tomato ketchup"], per100: { calories: 112, protein: 1, carbs: 27, fat: 0, fiber: 0 }, tbsp: 17 },
  { names: ["mayonnaise"], per100: { calories: 680, protein: 1, carbs: 2, fat: 75, fiber: 0 }, tbsp: 14 },
  { names: ["salsa"], per100: { calories: 36, protein: 1, carbs: 7, fat: 0, fiber: 2 }, tbsp: 16 },
  { names: ["guacamole"], per100: { calories: 150, protein: 2, carbs: 9, fat: 13, fiber: 6 }, tbsp: 15 },
  { names: ["taco seasoning", "spice mix", "garam masala", "curry powder", "spices"], per100: { calories: 280, protein: 10, carbs: 50, fat: 8, fiber: 30 }, tsp: 2.5 },
  { names: ["cumin seeds", "jeera"], per100: { calories: 375, protein: 18, carbs: 44, fat: 22, fiber: 11 }, tsp: 2 },
  { names: ["turmeric", "haldi"], per100: { calories: 312, protein: 8, carbs: 67, fat: 3, fiber: 21 }, tsp: 3 },
  { names: ["coriander leaves", "cilantro", "dhania", "mint", "parsley", "basil", "oregano"], per100: { calories: 23, protein: 2, carbs: 4, fat: 0, fiber: 3 }, tbsp: 2 },
  { names: ["salt"], per100: { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }, tsp: 6 },
  { names: ["pepper", "black pepper"], per100: { calories: 251, protein: 10, carbs: 64, fat: 3, fiber: 25 }, tsp: 2 },
  { names: ["water"], per100: { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 } },
  { names: ["vegetable stock", "chicken stock", "broth"], per100: { calories: 10, protein: 1, carbs: 1, fat: 0, fiber: 0 }, cup: 240 },
  { names: ["momo wrapper", "dumpling wrapper", "wonton wrapper"], per100: { calories: 280, protein: 9, carbs: 57, fat: 1, fiber: 2 }, piece: 8 },
  { names: ["idli"], per100: { calories: 132, protein: 4, carbs: 25, fat: 1, fiber: 1 }, piece: 40 },
  { names: ["dosa batter", "dosa"], per100: { calories: 168, protein: 4, carbs: 28, fat: 4, fiber: 1 } },
  { names: ["poha", "flattened rice"], per100: { calories: 350, protein: 7, carbs: 77, fat: 1, fiber: 3 }, bowl: 60 },
  { names: ["whey protein", "protein powder"], per100: { calories: 380, protein: 80, carbs: 8, fat: 5, fiber: 2 }, piece: 30 }
];

function normalizeIngredientKey(text) {
  return String(text || "").toLowerCase().trim().replace(/[^a-z\s]/g, "").replace(/\s+/g, " ");
}

function matchIngredient(nameText) {
  const key = normalizeIngredientKey(nameText);
  if (!key) return null;
  let best = null;
  let bestLen = 0;
  ingredientDB.forEach((entry) => {
    entry.names.forEach((alias) => {
      if (key.includes(alias) && alias.length > bestLen) {
        best = entry;
        bestLen = alias.length;
      }
    });
  });
  return best;
}

function gramsFromQty(entry, qty, unit) {
  const amount = Number(qty) || 0;
  if (unit === "g" || unit === "custom") return amount;
  if (entry && entry[unit] != null) return amount * entry[unit];
  if (unit === "ml") return amount * ((entry && entry.density) || 1);
  if (unit === "cup") return amount * ((entry && entry.density ? entry.density * 240 : 240));
  if (unit === "tbsp") return amount * ((entry && entry.density ? entry.density * 15 : 15));
  if (unit === "tsp") return amount * ((entry && entry.density ? entry.density * 5 : 5));
  return amount * (genericUnitGrams[unit] || 50);
}

const genericFallback = { calories: 100, protein: 3, carbs: 15, fat: 2, fiber: 1 };

function estimateIngredientNutrition(name, qty, unit) {
  const entry = matchIngredient(name);
  const per100 = entry ? entry.per100 : genericFallback;
  const grams = gramsFromQty(entry, qty, unit);
  const factor = grams / 100;
  return {
    calories: per100.calories * factor,
    protein: per100.protein * factor,
    carbs: per100.carbs * factor,
    fat: per100.fat * factor,
    fiber: per100.fiber * factor,
    matched: !!entry,
    grams
  };
}

/* ---------- Recipe data model + persistence ---------- */

const RECIPES_KEY = "kyp_recipes_v1";
const recipeMealLabels = { breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner", snack: "Snack", dessert: "Dessert" };
const cuisineLabels = { indian: "Indian", italian: "Italian", chinese: "Chinese", mexican: "Mexican", other: "Other" };

function loadRecipes() {
  try {
    const raw = localStorage.getItem(RECIPES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistRecipes() {
  localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
}

function uid(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function recipeFoodId(recipeId) {
  return `recipe_food_${recipeId}`;
}

let recipes = loadRecipes();
let editingRecipeId = null;
let builderIngredients = [];
let builderSteps = [];
let lastAnalysis = null;
let recipeSearchTerm = "";
let recipeCategoryFilter = "all";
let recipeCuisineFilter = "all";
let recipeSortBy = "recent";
let pendingAddToMealRecipeId = null;
let pendingDeleteRecipeId = null;

/* Register/refresh a recipe's per-serving nutrition as a normal "food" entry so it
   flows through the existing totals, progress bars, and weekly planner untouched. */
function syncRecipeIntoFoods(recipe) {
  const id = recipeFoodId(recipe.id);
  const existingIndex = foods.findIndex((food) => food.id === id);
  const entry = {
    id,
    name: recipe.name,
    portion: "1 serving",
    protein: Math.round(recipe.nutrition.perServing.protein * 10) / 10,
    calories: Math.round(recipe.nutrition.perServing.calories),
    fiber: Math.round(recipe.nutrition.perServing.fiber * 10) / 10,
    cat: "recipe",
    type: "veg",
    v: {}
  };
  if (existingIndex >= 0) foods[existingIndex] = entry;
  else foods.push(entry);
  meals.forEach((meal) => {
    if (counts[meal.id][id] == null) counts[meal.id][id] = 0;
  });
}

function removeRecipeFromFoods(recipeId) {
  const id = recipeFoodId(recipeId);
  const index = foods.findIndex((food) => food.id === id);
  if (index >= 0) foods.splice(index, 1);
  meals.forEach((meal) => delete counts[meal.id][id]);
}

recipes.forEach(syncRecipeIntoFoods);

/* ---------- Health analysis ---------- */

function computeHealthAnalysis(perServing, ingredientNames) {
  const pros = [];
  const cons = [];
  const suggestions = [];
  let score = 55;

  if (perServing.protein >= 15) { score += 15; pros.push("High protein"); }
  else if (perServing.protein >= 8) { score += 6; pros.push("Decent protein"); }
  else { score -= 10; cons.push("Low protein"); suggestions.push("Increase protein (add paneer, egg, chicken, tofu, or dal)"); }

  if (perServing.fiber >= 5) { score += 12; pros.push("Good fiber"); }
  else if (perServing.fiber >= 3) { score += 5; }
  else { score -= 8; cons.push("Low fiber"); suggestions.push("Increase vegetables or add legumes for more fiber"); }

  if (perServing.fat > 25) { score -= 12; cons.push("High fat"); suggestions.push("Reduce oil, butter, or ghee"); }
  else if (perServing.fat > 15) { score -= 5; }
  else { score += 4; }

  if (perServing.calories > 700) { score -= 10; cons.push("High calorie density"); suggestions.push("Reduce portion size or oil"); }
  else if (perServing.calories >= 300 && perServing.calories <= 600) { score += 6; pros.push("Balanced calories"); }

  const carbCalories = perServing.carbs * 4;
  if (perServing.calories > 0 && carbCalories / perServing.calories > 0.65) {
    score -= 6;
    cons.push("Carb-heavy");
    suggestions.push("Balance with more protein or vegetables");
  }

  const sugarIngredients = ["sugar", "honey", "jaggery", "syrup"];
  const hasAddedSugar = ingredientNames.some((name) => sugarIngredients.some((s) => name.toLowerCase().includes(s)));
  if (hasAddedSugar) { score -= 6; cons.push("Contains added sugar"); suggestions.push("Reduce added sugar or use fruit for sweetness"); }
  else { pros.push("Low added sugar"); }

  const vegKeywords = ["spinach", "palak", "capsicum", "carrot", "broccoli", "cabbage", "onion", "tomato", "peas", "beans", "methi", "bhindi", "mushroom", "cucumber", "lettuce"];
  const vegCount = ingredientNames.filter((name) => vegKeywords.some((v) => name.toLowerCase().includes(v))).length;
  if (vegCount >= 2) { score += 6; pros.push("Contains vegetables"); }
  else if (vegCount === 0) { suggestions.push("Add a vegetable for more fiber and micronutrients"); }

  if (pros.length >= 3 && cons.length === 0) pros.push("Balanced meal");

  score = Math.max(0, Math.min(100, Math.round(score)));
  return {
    score,
    pros: [...new Set(pros)],
    cons: [...new Set(cons)],
    suggestions: [...new Set(suggestions)].slice(0, 5)
  };
}

/* ---------- Recipe builder form state ---------- */

const ingredientRowsEl = q("#ingredientRows");
const stepRowsEl = q("#stepRows");

function blankIngredientRow() {
  return { name: "", qty: 1, unit: "g" };
}

function unitOptionsHtml(selected) {
  return Object.entries(unitLabels).map(([value, label]) => `<option value="${value}" ${value === selected ? "selected" : ""}>${label}</option>`).join("");
}

function renderIngredientRows() {
  ingredientRowsEl.innerHTML = builderIngredients.map((row, index) => `
    <div class="ingredient-row" data-index="${index}">
      <input type="text" class="ing-name" placeholder="Ingredient name" value="${escapeAttr(row.name)}">
      <input type="number" class="ing-qty" min="0" step="0.25" placeholder="Qty" value="${row.qty}">
      <select class="ing-unit">${unitOptionsHtml(row.unit)}</select>
      <button type="button" class="row-remove" data-remove="${index}" aria-label="Remove ingredient">&times;</button>
    </div>
  `).join("");
}

function renderStepRows() {
  stepRowsEl.innerHTML = builderSteps.map((step, index) => `
    <div class="step-row" data-index="${index}">
      <div class="step-number">${index + 1}</div>
      <textarea class="step-text" rows="1" placeholder="e.g. Boil rolled oats.">${escapeAttr(step)}</textarea>
      <button type="button" class="row-remove" data-remove="${index}" aria-label="Remove step">&times;</button>
    </div>
  `).join("");
}

function escapeAttr(text) {
  return String(text || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function addIngredientRow() {
  builderIngredients.push(blankIngredientRow());
  renderIngredientRows();
}

function addStepRow() {
  builderSteps.push("");
  renderStepRows();
}

ingredientRowsEl.addEventListener("input", (event) => {
  const row = event.target.closest(".ingredient-row");
  if (!row) return;
  const index = Number(row.dataset.index);
  if (event.target.classList.contains("ing-name")) builderIngredients[index].name = event.target.value;
  if (event.target.classList.contains("ing-qty")) builderIngredients[index].qty = event.target.value;
  if (event.target.classList.contains("ing-unit")) builderIngredients[index].unit = event.target.value;
});

ingredientRowsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  builderIngredients.splice(Number(button.dataset.remove), 1);
  renderIngredientRows();
});

stepRowsEl.addEventListener("input", (event) => {
  const row = event.target.closest(".step-row");
  if (!row) return;
  const index = Number(row.dataset.index);
  if (event.target.classList.contains("step-text")) builderSteps[index] = event.target.value;
});

stepRowsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  builderSteps.splice(Number(button.dataset.remove), 1);
  renderStepRows();
});

q("#addIngredientRow").addEventListener("click", addIngredientRow);
q("#addStepRow").addEventListener("click", addStepRow);

/* Paste-to-parse: split pasted lines into ingredient rows vs recipe steps. */
const qtyUnitPattern = /^(\d+(?:\.\d+)?)\s*(g|grams?|ml|millilitres?|cups?|tbsp|tablespoons?|tsp|teaspoons?|pieces?|katori|katoris?|bowls?|rotis?|slices?)\s+(.+)$/i;
const unitAliasMap = { g: "g", gram: "g", grams: "g", ml: "ml", millilitre: "ml", millilitres: "ml", cup: "cup", cups: "cup", tbsp: "tbsp", tablespoon: "tbsp", tablespoons: "tbsp", tsp: "tsp", teaspoon: "tsp", teaspoons: "tsp", piece: "piece", pieces: "piece", katori: "katori", katoris: "katori", bowl: "bowl", bowls: "bowl", roti: "roti", rotis: "roti", slice: "slice", slices: "slice" };

function parsePastedRecipeText(text) {
  const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  const parsedIngredients = [];
  const parsedSteps = [];
  lines.forEach((line) => {
    const match = line.match(qtyUnitPattern);
    if (match) {
      const unit = unitAliasMap[match[2].toLowerCase()] || "g";
      parsedIngredients.push({ name: match[3].replace(/[.]+$/, "").trim(), qty: Number(match[1]), unit });
    } else {
      parsedSteps.push(line.replace(/^\d+[.)]\s*/, ""));
    }
  });
  return { ingredients: parsedIngredients, steps: parsedSteps };
}

q("#togglePasteBox").addEventListener("click", () => {
  q("#pasteBox").classList.toggle("show");
});

q("#parsePasteBtn").addEventListener("click", () => {
  const { ingredients, steps } = parsePastedRecipeText(q("#pasteText").value);
  if (builderIngredients.length === 1 && !builderIngredients[0].name) builderIngredients = [];
  if (builderSteps.length === 1 && !builderSteps[0]) builderSteps = [];
  builderIngredients.push(...ingredients);
  builderSteps.push(...steps);
  renderIngredientRows();
  renderStepRows();
  q("#pasteText").value = "";
  q("#pasteBox").classList.remove("show");
});

/* ---------- Recipe modal open/close + analyze/save ---------- */

function openRecipeModal(recipeId) {
  editingRecipeId = recipeId || null;
  const recipe = recipeId ? recipes.find((item) => item.id === recipeId) : null;
  q("#recipeModalTitle").textContent = recipe ? "Edit recipe" : "Create recipe";
  q("#recipeName").value = recipe ? recipe.name : "";
  q("#recipeCategory").value = recipe ? recipe.category : "lunch";
  q("#recipeCuisine").value = recipe ? recipe.cuisine || "" : "";
  q("#recipeServings").value = recipe ? recipe.servings : 2;
  q("#recipeDescription").value = recipe ? recipe.description || "" : "";
  builderIngredients = recipe ? recipe.ingredients.map((item) => ({ ...item })) : [blankIngredientRow()];
  builderSteps = recipe ? [...recipe.steps] : [""];
  lastAnalysis = recipe ? { nutrition: recipe.nutrition, health: recipe.health } : null;
  renderIngredientRows();
  renderStepRows();
  q("#pasteBox").classList.remove("show");
  q("#pasteText").value = "";
  showRecipeFormView();
  q("#recipeModalOverlay").classList.add("open");
}

function closeRecipeModal() {
  q("#recipeModalOverlay").classList.remove("open");
  editingRecipeId = null;
  lastAnalysis = null;
}

function showRecipeFormView() {
  q("#recipeFormView").hidden = false;
  q("#recipeAnalysisView").hidden = true;
}

function showRecipeAnalysisView() {
  q("#recipeFormView").hidden = true;
  q("#recipeAnalysisView").hidden = false;
}

function collectRecipeDraft() {
  const name = q("#recipeName").value.trim();
  const category = q("#recipeCategory").value;
  const cuisine = q("#recipeCuisine").value;
  const description = q("#recipeDescription").value.trim();
  const servings = Math.max(1, Number(q("#recipeServings").value) || 1);
  const ingredients = builderIngredients
    .map((row) => ({ name: row.name.trim(), qty: Number(row.qty) || 0, unit: row.unit }))
    .filter((row) => row.name);
  const steps = builderSteps.map((step) => step.trim()).filter(Boolean);
  return { name, category, cuisine, description, servings, ingredients, steps };
}

function analyzeIngredientList(ingredients) {
  const total = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
  const unmatched = [];
  ingredients.forEach((row) => {
    const result = estimateIngredientNutrition(row.name, row.qty, row.unit);
    total.calories += result.calories;
    total.protein += result.protein;
    total.carbs += result.carbs;
    total.fat += result.fat;
    total.fiber += result.fiber;
    if (!result.matched) unmatched.push(row.name);
  });
  return { total, unmatched };
}

function roundMacros(obj) {
  return {
    calories: Math.round(obj.calories),
    protein: Math.round(obj.protein * 10) / 10,
    carbs: Math.round(obj.carbs * 10) / 10,
    fat: Math.round(obj.fat * 10) / 10,
    fiber: Math.round(obj.fiber * 10) / 10
  };
}

function runAnalyzeRecipe() {
  const draft = collectRecipeDraft();
  if (!draft.name) { q("#recipeName").focus(); return; }
  if (!draft.ingredients.length) { return; }

  const { total, unmatched } = analyzeIngredientList(draft.ingredients);
  const perServing = {
    calories: total.calories / draft.servings,
    protein: total.protein / draft.servings,
    carbs: total.carbs / draft.servings,
    fat: total.fat / draft.servings,
    fiber: total.fiber / draft.servings
  };
  const health = computeHealthAnalysis(perServing, draft.ingredients.map((row) => row.name));

  lastAnalysis = {
    draft,
    nutrition: { total: roundMacros(total), perServing: roundMacros(perServing) },
    health,
    unmatched
  };
  renderAnalysisResults();
  showRecipeAnalysisView();
}

function metricHtml(label, value, unit) {
  return `<div class="analysis-metric"><span>${label}</span><b>${value}${unit}</b></div>`;
}

function renderAnalysisResults() {
  const { nutrition, health, unmatched } = lastAnalysis;
  q("#wholeRecipeMetrics").innerHTML = [
    metricHtml("Calories", nutrition.total.calories, ""),
    metricHtml("Protein", nutrition.total.protein, "g"),
    metricHtml("Carbs", nutrition.total.carbs, "g"),
    metricHtml("Fat", nutrition.total.fat, "g"),
    metricHtml("Fiber", nutrition.total.fiber, "g")
  ].join("");
  q("#perServingMetrics").innerHTML = [
    metricHtml("Calories", nutrition.perServing.calories, ""),
    metricHtml("Protein", nutrition.perServing.protein, "g"),
    metricHtml("Carbs", nutrition.perServing.carbs, "g"),
    metricHtml("Fat", nutrition.perServing.fat, "g"),
    metricHtml("Fiber", nutrition.perServing.fiber, "g")
  ].join("");

  const badge = q("#healthScoreBadge");
  badge.textContent = health.score;
  badge.className = `health-score-badge ${health.score >= 70 ? "" : health.score >= 45 ? "mid" : "low"}`.trim();
  q("#healthScoreLabel").textContent = health.score >= 70 ? "Good balance" : health.score >= 45 ? "Reasonable, room to improve" : "Needs adjustment";

  q("#healthPros").innerHTML = health.pros.length ? health.pros.map((item) => `<li>${item}</li>`).join("") : "<li>No standout strengths yet</li>";
  q("#healthCons").innerHTML = health.cons.length ? health.cons.map((item) => `<li>${item}</li>`).join("") : "<li>No major concerns</li>";
  q("#healthSuggestions").innerHTML = health.suggestions.length ? health.suggestions.map((item) => `<li>${item}</li>`).join("") : "<li>Looks well rounded as is</li>";

  const note = q("#unmatchedNote");
  if (unmatched && unmatched.length) {
    note.hidden = false;
    note.textContent = `Estimated using a generic average for: ${unmatched.join(", ")}. Edit the ingredient name for a closer match if needed.`;
  } else {
    note.hidden = true;
  }
}

function saveRecipeFromBuilder() {
  if (!lastAnalysis) return;
  const { draft, nutrition, health } = lastAnalysis;
  const now = new Date().toISOString();
  let recipe;
  if (editingRecipeId) {
    recipe = recipes.find((item) => item.id === editingRecipeId);
    Object.assign(recipe, draft, { nutrition, health, updatedAt: now });
  } else {
    recipe = { id: uid("recipe"), ...draft, nutrition, health, createdAt: now, updatedAt: now };
    recipes.push(recipe);
  }
  persistRecipes();
  syncRecipeIntoFoods(recipe);
  closeRecipeModal();
  renderRecipeLibrary();
  updateSummary();
}

q("#createRecipeBtn").addEventListener("click", () => openRecipeModal(null));
q("#closeRecipeModal").addEventListener("click", closeRecipeModal);
q("#cancelRecipeForm").addEventListener("click", closeRecipeModal);
q("#analyzeRecipeBtn").addEventListener("click", runAnalyzeRecipe);
q("#backToEditRecipe").addEventListener("click", showRecipeFormView);
q("#saveRecipeBtn").addEventListener("click", saveRecipeFromBuilder);
q("#recipeModalOverlay").addEventListener("click", (event) => {
  if (event.target === q("#recipeModalOverlay")) closeRecipeModal();
});

/* ---------- Recipe Library: search, filter, sort, cards ---------- */

function filteredSortedRecipes() {
  let list = recipes.filter((recipe) => {
    const matchesSearch = !recipeSearchTerm || recipe.name.toLowerCase().includes(recipeSearchTerm) || (recipe.description || "").toLowerCase().includes(recipeSearchTerm);
    const matchesCategory = recipeCategoryFilter === "all" || recipe.category === recipeCategoryFilter;
    const matchesCuisine = recipeCuisineFilter === "all" || recipe.cuisine === recipeCuisineFilter;
    return matchesSearch && matchesCategory && matchesCuisine;
  });
  list = [...list];
  if (recipeSortBy === "protein") list.sort((a, b) => b.nutrition.perServing.protein - a.nutrition.perServing.protein);
  else if (recipeSortBy === "calories") list.sort((a, b) => a.nutrition.perServing.calories - b.nutrition.perServing.calories);
  else if (recipeSortBy === "alpha") list.sort((a, b) => a.name.localeCompare(b.name));
  else list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return list;
}

function recipeCardHtml(recipe) {
  const p = recipe.nutrition.perServing;
  return `
    <article class="recipe-card" data-recipe="${recipe.id}">
      <div>
        <h3>${recipe.name}</h3>
        <div class="recipe-card-meta">
          <span class="tag">${recipeMealLabels[recipe.category] || recipe.category}</span>
          ${recipe.cuisine ? `<span class="tag type">${cuisineLabels[recipe.cuisine] || recipe.cuisine}</span>` : ""}
          <span class="tag cal">${recipe.servings} serving${recipe.servings > 1 ? "s" : ""}</span>
        </div>
      </div>
      <div class="recipe-card-stats">
        <div><b>${p.calories}</b><span>kcal / serving</span></div>
        <div><b>${p.protein}g</b><span>protein</span></div>
        <div><b>${p.fiber}g</b><span>fiber</span></div>
      </div>
      <div class="recipe-card-actions">
        <button type="button" class="ghost" data-action="edit">Edit</button>
        <button type="button" class="ghost" data-action="duplicate">Duplicate</button>
        <button type="button" class="ghost danger-text" data-action="delete">Delete</button>
        <button type="button" class="ghost" data-action="export">Export</button>
        <button type="button" class="add-meal-btn" data-action="add-meal">Add to meal</button>
      </div>
    </article>
  `;
}

function renderRecipeLibrary() {
  const list = filteredSortedRecipes();
  q("#recipeLibraryGrid").innerHTML = list.map(recipeCardHtml).join("");
  const showEmpty = recipes.length === 0;
  q("#recipeEmptyState").classList.toggle("show", showEmpty);
  q("#recipeLibraryGrid").style.display = list.length ? "grid" : "none";
}

q("#recipeSearch").addEventListener("input", (event) => {
  recipeSearchTerm = event.target.value.trim().toLowerCase();
  renderRecipeLibrary();
});
q("#recipeFilterCategory").addEventListener("change", (event) => {
  recipeCategoryFilter = event.target.value;
  renderRecipeLibrary();
});
q("#recipeFilterCuisine").addEventListener("change", (event) => {
  recipeCuisineFilter = event.target.value;
  renderRecipeLibrary();
});
q("#recipeSort").addEventListener("change", (event) => {
  recipeSortBy = event.target.value;
  renderRecipeLibrary();
});

/* ---------- Recipe card actions: edit, duplicate, delete, export, add to meal ---------- */

function duplicateRecipe(recipeId) {
  const source = recipes.find((item) => item.id === recipeId);
  if (!source) return;
  const now = new Date().toISOString();
  const copy = { ...source, id: uid("recipe"), name: `Copy of ${source.name}`, createdAt: now, updatedAt: now };
  recipes.push(copy);
  persistRecipes();
  syncRecipeIntoFoods(copy);
  renderRecipeLibrary();
}

function openDeleteConfirm(recipeId) {
  pendingDeleteRecipeId = recipeId;
  const recipe = recipes.find((item) => item.id === recipeId);
  q("#deleteConfirmText").textContent = `Delete "${recipe ? recipe.name : "this recipe"}"? This will permanently remove it from your library. This cannot be undone.`;
  q("#deleteConfirmOverlay").classList.add("open");
}

function closeDeleteConfirm() {
  q("#deleteConfirmOverlay").classList.remove("open");
  pendingDeleteRecipeId = null;
}

function deleteRecipeConfirmed() {
  if (!pendingDeleteRecipeId) return;
  removeRecipeFromFoods(pendingDeleteRecipeId);
  recipes = recipes.filter((item) => item.id !== pendingDeleteRecipeId);
  persistRecipes();
  closeDeleteConfirm();
  renderRecipeLibrary();
  renderFoods();
  updateSummary();
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function exportRecipe(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) return;
  downloadJson(`${recipe.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.json`, recipe);
}

q("#exportAllRecipesBtn").addEventListener("click", () => downloadJson("know-your-plate-recipes.json", recipes));

q("#importRecipeBtn").addEventListener("click", () => q("#importRecipeInput").click());

q("#importRecipeInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const incoming = Array.isArray(parsed) ? parsed : [parsed];
      const now = new Date().toISOString();
      incoming.forEach((item) => {
        if (!item || !item.name || !item.ingredients) return;
        const recipe = { ...item, id: uid("recipe"), createdAt: item.createdAt || now, updatedAt: now };
        recipes.push(recipe);
        syncRecipeIntoFoods(recipe);
      });
      persistRecipes();
      renderRecipeLibrary();
    } catch {
      alert("This file doesn't look like a valid recipe JSON export.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
});

q("#recipeLibraryGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const recipeId = button.closest("[data-recipe]").dataset.recipe;
  const action = button.dataset.action;
  if (action === "edit") openRecipeModal(recipeId);
  else if (action === "duplicate") duplicateRecipe(recipeId);
  else if (action === "delete") openDeleteConfirm(recipeId);
  else if (action === "export") exportRecipe(recipeId);
  else if (action === "add-meal") openAddToMealModal(recipeId);
});

q("#closeDeleteConfirm").addEventListener("click", closeDeleteConfirm);
q("#cancelDeleteRecipe").addEventListener("click", closeDeleteConfirm);
q("#confirmDeleteRecipe").addEventListener("click", deleteRecipeConfirmed);
q("#deleteConfirmOverlay").addEventListener("click", (event) => {
  if (event.target === q("#deleteConfirmOverlay")) closeDeleteConfirm();
});

/* ---------- Add to meal modal ---------- */

function openAddToMealModal(recipeId) {
  pendingAddToMealRecipeId = recipeId;
  const recipe = recipes.find((item) => item.id === recipeId);
  q("#addToMealRecipeName").textContent = recipe ? recipe.name : "";
  q("#addToMealMeal").value = meals.some((meal) => meal.id === currentMeal) ? currentMeal : "breakfast";
  q("#addToMealServings").value = "1";
  q("#addToMealOverlay").classList.add("open");
}

function closeAddToMealModal() {
  q("#addToMealOverlay").classList.remove("open");
  pendingAddToMealRecipeId = null;
}

function confirmAddToMealAction() {
  if (!pendingAddToMealRecipeId) return;
  const meal = q("#addToMealMeal").value;
  const servings = Number(q("#addToMealServings").value) || 1;
  const foodId = recipeFoodId(pendingAddToMealRecipeId);
  counts[meal][foodId] = (counts[meal][foodId] || 0) + servings;
  closeAddToMealModal();
  if (meal === currentMeal) renderFoods();
  updateSummary();
}

q("#closeAddToMealModal").addEventListener("click", closeAddToMealModal);
q("#cancelAddToMeal").addEventListener("click", closeAddToMealModal);
q("#confirmAddToMeal").addEventListener("click", confirmAddToMealAction);
q("#addToMealOverlay").addEventListener("click", (event) => {
  if (event.target === q("#addToMealOverlay")) closeAddToMealModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (q("#recipeModalOverlay").classList.contains("open")) closeRecipeModal();
  if (q("#addToMealOverlay").classList.contains("open")) closeAddToMealModal();
  if (q("#deleteConfirmOverlay").classList.contains("open")) closeDeleteConfirm();
});

populateCustomTemplates();
renderTabs();
renderFilters();
renderProteinLibrary();
renderFoods();
updateSummary();
renderRecipeLibrary();
