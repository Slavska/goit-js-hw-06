const inputEl = document.querySelector("#validation-input");

const addEventClass = (event) => {
  if (event.target.value.length == inputEl.getAttribute("data-length")) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    return;
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
    return;
  }
};

inputEl.addEventListener("blur", addEventClass);
