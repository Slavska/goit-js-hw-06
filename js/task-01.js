const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

const childrenEl = itemEl.forEach((item) => {
  console.log(`Categories: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
