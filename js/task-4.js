// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
// {/* <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div> */}

const refs = {
  // Отримуємо посилання
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = null; // Присвоюємо значення змінній

refs.decrementBtn.addEventListener("click", onDecremetnBtnClick); // ставимо addEventListener на кнопки і колбеки
refs.incrementBtn.addEventListener("click", onIncremetnBtnClick);

function onDecremetnBtnClick() {
  //console.log('-')
  refs.value.textContent -= 1; // Віднімаємо і записуємо значення в змінну
  counterValue = refs.value.textContent;
  // console.log(counterValue) // Перевірочка)) Все працює!
}

function onIncremetnBtnClick() {
  //console.log('+')
  refs.value.textContent = Number(refs.value.textContent) + 1; // Додаємо і записуємо значення у змінну
  counterValue = refs.value.textContent;
  // console.log(counterValue)
}
