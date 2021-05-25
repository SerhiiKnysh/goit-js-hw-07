// В HTML є пустий список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS є масив рядків.

// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().

// Answer
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const linkByUlRef = document.querySelector("#ingredients"); // отримуємо доступ до ul
//console.log(linkForUlRef) // <ul id="ingredients"></ul>

function createLi(arr) {
  // cтворюємо функцію
  const liArray = []; // cтворюємо пустий масив
  arr.forEach((el) => {
    // перебираємо наш масив
    let LiRef = document.createElement("li"); // на кожній ітерації робимо li
    LiRef.textContent = `${el}`; // записуємо у li значення el
    liArray.push(LiRef); // пушимо в масив
  });
  return linkByUlRef.prepend(...liArray); // прив'язуємо на початок ul
}

createLi(ingredients); // Викликаємо функцію передаючи масив
// console.log(linkByUlRef);
