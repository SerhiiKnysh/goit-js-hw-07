// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input),
// підставляє його поточне значення в span#name - output.якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

// <input type="text" placeholder="Ваше ім'я?" id="name-input" />
// <h1>Привіт, <span id="name-output">незнайомець</span>!</h1>

// Answer

const refs = {
  // Отримуємо посилання
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

const changeNameGuest = () => {
  // Через те, що стрілка, то пишемо її перед слухачем події (не може бути виклик перед ініціалізацією)

  if (refs.nameInput.value === "") {
    refs.nameOutput.textContent = "Незнайомець";
  } else {
    refs.nameOutput.textContent = refs.nameInput.value; // Порівнюємо із пестою строкою
  }
};
refs.nameInput.addEventListener("input", changeNameGuest); // реєструємо слухача події, викликаємо callback

// console.log(refs.nameInput.value === '')  Тест
