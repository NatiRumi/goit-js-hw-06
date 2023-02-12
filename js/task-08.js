const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value; 

    if(email === "" || password === "") {
        alert('Всі поля форми обов’язково мають бути заповнені');
        return;
    }

    const formData = {
        email,
        password,
    }    

    console.log(formData);

    form.reset();
}





// console.dir(event);
// console.dir(event.currentTarget);
// console.dir(event.currentTarget.elements[1].value);


// const formData = new FormData(event.currentTarget);   