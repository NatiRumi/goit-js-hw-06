
let getInput = document.querySelector('#font-size-control');
let getSpan = document.querySelector('#text');
getInput.addEventListener('input', (event) => getSpan.style.fontSize = Number(getInput.value) + 'px')


 




// function changeFontSize () {
//     let getInput = document.getElementByid('font-size-control');
//     let getSpan = document.getElementByid('text');
//     getSpan.innerHTML = getInput.value;
//    //  getSpan.style.fontSize = "getInput.value";
//    }