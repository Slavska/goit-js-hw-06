function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divList = document.querySelector("#controls");
const inputEl = divList.firstElementChild;
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesList = document.querySelector("#boxes");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const itemEl = document.createElement("div");
    itemEl.classList.add("box-div");
    itemEl.style.backgroundColor = getRandomHexColor();
    const result = boxesList.children.length;

    if (result > 0) {
      itemEl.style.width = `${30 + result * 10}px`;
      itemEl.style.height = `${30 + result * 10}px`;
      boxesList.append(itemEl);
    } else {
      itemEl.style.width = `${30 + i * 10}px`;
      itemEl.style.height = `${30 + i * 10}px`;
      boxesList.append(itemEl);
    }
  }
  return boxesList;
};

const destroyBoxes = () => {
  boxesList.innerHTML = "";
  inputEl.value = "";
};

btnCreate.addEventListener("click", () => createBoxes(inputEl.value));
btnDestroy.addEventListener("click", destroyBoxes);
