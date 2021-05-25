// Завдання 1
// В HTML є список категорій ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Тварини</h2>

//     <ul>
//       <li>Кіт</li>
//       <li>Хом'як</li>
//       <li>Кінь</li>
//       <li>Папуга</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Продукти</h2>

//     <ul>
//       <li>Хліб</li>
//       <li>Петрушка</li>
//       <li>Сир</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Технології</h2>

//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node</li>
//     </ul>
//   </li>
// </ul>
// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе
// в консоль текст заголовка елемента(тега h2)
// і кількість елементів в категорії(всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4

// Answer

const itemsRef = document.querySelectorAll(".item");

function calcItemsInCategories() {
  let calcItemsInCategories = null;
  itemsRef.forEach((item) => (calcItemsInCategories += 1));

  console.log(`У списку ${calcItemsInCategories} категорії.`);
}

calcItemsInCategories(); //У списку 3 категорії.

function calcNumberOfItemsInCategory() {
  itemsRef.forEach((item) =>
    console.log(`Категорія: ${item.firstElementChild.textContent}
    Кількість елементів: ${item.lastElementChild.children.length}`)
  );
}

calcNumberOfItemsInCategory();
// Категорія: Тварини
// Кількість елементів: 4

// Категорія: Продукти
// Кількість елементів: 3

// Категорія: Технології
// Кількість елементів: 5
