const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createEl = (arr) => {
  const ingredientsEl = document.querySelector("#ingredients");

  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  ingredientsEl.append(itemEl);

  return (itemEl.textContent = arr);
};

ingredients.map((el) => createEl(el));
