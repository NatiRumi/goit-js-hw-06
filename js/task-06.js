const getText = document.querySelector('#validation-input');

getText.addEventListener('blur', (event) =>{
    function setClass (a, b) {
        if(getText.classList.contains(a)) {
        } else if(getText.classList.contains(b)) {
            getText.classList.replace(b, a);
            } else {
                getText.classList.add(a) 
            };
    }
    event.currentTarget.value.length == Number(getText.dataset.length)? setClass ('valid', 'invalid') : setClass ('invalid', 'valid');    
});



// const getText = document.querySelector("#validation-input");
// getText.addEventListener("blur", (event) => {
//   if (event.currentTarget.value.length === Number(getText.dataset.length)) {
//     getText.classList.remove("invalid");
//     getText.classList.add("valid");
//   } else {
//     getText.classList.remove("valid");
//     getText.classList.add("invalid");
//   }
// });

// function setClass (a, b) {
//     if(getText.classList.contains(a)) {
//     } else if(getText.classList.contains(b)) {
//         getText.classList.replace(b, a);
//         } else {
//             getText.classList.add(a) 
//         };
// }



// getText.setAttribute('id','validation-input.valid') : 
// getText.setAttribute('id','validation-input.invalid');

// console.log(event.currentTarget.value.length);
// console.log(getText.dataset.length);
// console.log(Number(getText.dataset.length));

// elem.classList.replace(oldClass, newClass)

// event.currentTarget.value.length == Number(getText.dataset.length) 
// getText.classList.replace('.invalid', '.valid') 
// getText.classList.add('.');




// getText.addEventListener('blur', (event) =>{

//     if(event.currentTarget.value.length == Number(getText.dataset.length)) {
//         if(getText.classList.contains('.valid')) {
//             console.log('уже есть валид');
//         } else if(getText.classList.contains('.invalid')) {
//             getText.classList.replace('.invalid', '.valid');
//             } else {
//                 getText.classList.add('.valid') 
//             };
//             getText.style.borderColor = "#4caf50";
//             console.log(getText);
//     } else {
//         if(getText.classList.contains('.invalid')) {
//             console.log('уже есть инвалид');
//         } else if(getText.classList.contains('.valid')) {
//             getText.classList.replace('.valid', '.invalid');
//             } else {
//                 getText.classList.add('.invalid') 
//             };
//             getText.style.borderColor = "#f44336";
//             console.log(getText);
//     }
    
// });