const inputEl = document.querySelector("#validation-input");

const addEventClass = (event) => {
  if (event.target.value.length == inputEl.getAttribute("data-length")) {
    inputEl.classList.remove("invalid");
    return inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    return inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", addEventClass);
