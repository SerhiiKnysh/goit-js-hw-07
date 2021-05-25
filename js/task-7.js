// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн - стиль span#text оновлюючи властивість font - size.В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function fontSizeChange() {
    textRef.setAttribute('style', `font-size: ${inputRef.value*5}px`);
}

inputRef.addEventListener('input', fontSizeChange);