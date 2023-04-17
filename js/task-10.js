function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const idList = document.querySelector("#controls");
const inputEl = idList.firstElementChild;
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const idBoxesList = document.querySelector("#boxes");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const itemEl = document.createElement("div");
    itemEl.classList.add("box-div");
    let size = 30 + i * 10;

    itemEl.style.width = `${size}px`;
    itemEl.style.height = `${size}px`;
    itemEl.style.backgroundColor = getRandomHexColor();
    idBoxesList.append(itemEl);
  }

  return idBoxesList;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", () => createBoxes(inputEl.value));
btnDestroy.addEventListener("click", destroyBoxes);
