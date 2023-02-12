const printName = document.querySelector('#name-output');
const getName = document.querySelector('#name-input');


// getName.addEventListener('input', (event) => {   
//     if (event.currentTarget.value === "") {
//         printName.textContent = "Anonymous";    
//     } else printName.textContent = event.currentTarget.value;    
// });



getName.addEventListener('input', (event) => printName.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value);

// console.log(getName.placeholder);