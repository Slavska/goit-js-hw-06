const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
let result = [];

ingredients.forEach((el) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  ingredientsEl.append(itemEl);
  itemEl.textContent = el;
  result.push(itemEl);
});

ingredientsEl.append(...result);
