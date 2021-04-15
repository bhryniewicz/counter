//components

const number = document.querySelector(".counter__number");

//buttons

const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");

let count = 0;

number.textContent = count;

decrease.addEventListener("click", () => {
  count--;
  number.textContent = count;
});

increase.addEventListener("click", () => {
    count++;
    number.textContent = count;
});

reset.addEventListener('click', () => {
    count = 0;
    number.textContent = count;
})