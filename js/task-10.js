function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const divEl = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.classList.add('galery-item');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = width + 'px';
    width += 10;
    div.style.height = height + 'px';
    height += 10;
    divEl.push(div);
  }
const ulEl = document.querySelector('#boxes');
ulEl.append(...divEl);
}

function destroyBoxes(amount) { 
  const divEl = document.querySelectorAll('.galery-item');
  for (let i = 0; i < amount; i++){
   divEl[i].remove();
  }
 }

const number = document.querySelector('input');
number.addEventListener('input', (e) => {});

const btnCreate = document.querySelector('button[data-create]');
btnCreate.addEventListener('click', () => {
  createBoxes(Number(number.value))});
 
const btnDestroy = document.querySelector('button[data-destroy]'); 
btnDestroy.addEventListener ('click', () => {
  destroyBoxes(Number(number.value));
}) 


