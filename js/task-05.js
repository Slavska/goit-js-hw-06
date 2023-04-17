const outputEl = document.querySelector("#name-output");
const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value;
});
