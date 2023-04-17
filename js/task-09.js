function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const btnChangeColor = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

const changeColor = () => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
};

btnChangeColor.addEventListener("click", changeColor);
