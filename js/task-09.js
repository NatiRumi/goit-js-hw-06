function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('span');
const bodyColor = document.querySelector('body');

btnChangeColor.addEventListener('click', (event) => {
  const a = getRandomHexColor(); 
  textColor.innerHTML = a;
  bodyColor.style.backgroundColor = a;
})

