// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

{
  /* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">
    Создать
  </button>
  <button type="button" data-action="destroy">
    Очистить
  </button>
</div>; */
}

const refs = {
  input: document.querySelector(".input"),
  render: document.querySelector(".render"),
  destroy: document.querySelector(".destroy"),
  boxes: document.querySelector("#boxes"),
};

refs.render.addEventListener("click", () => createBoxes(+refs.input.value));
refs.destroy.addEventListener("click", clearBoxes);

function createBoxes(amount) {
  const divsArray = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = div.style.height = size + "px";
    div.style.backgroundColor = getRandomColor();
    size += 10;
    divsArray.push(div);
  }
  refs.boxes.append(...divsArray);
}

function clearBoxes(e) {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, 
  ${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)})`;
}
