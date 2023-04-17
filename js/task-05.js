const outputEl = document.querySelector("#name-output");
const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", (event) => {
  event.target.value === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = event.target.value);
});
