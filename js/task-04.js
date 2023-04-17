const valueEl = document.querySelector("#value");
let counterValue = 0;

const counterValueDecrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const counterValueIncrement = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const btnDecrement = document.querySelector(`[data-action ="decrement"]`);
btnDecrement.addEventListener("click", counterValueDecrement);

const btnIncrement = document.querySelector(`[data-action ="increment"]`);
btnIncrement.addEventListener("click", counterValueIncrement);
