const body = document.querySelector('body');
const form = document.querySelector('#sign-up-form');
const input = document.querySelectorAll('input');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('button');
const error = document.querySelectorAll('.error');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


form.addEventListener('submit', e => {
    e.preventDefault();

    const passwordValue = password.value.trim();
    checkPassword(passwordValue, 3);
})

input[0].addEventListener('focus', () => {
    resetInput(0);
})
input[0].addEventListener('blur', () => {
    const firstNameValue = firstName.value.trim();
    checkFirstName(firstNameValue, 0);
})

input[1].addEventListener('focus', () => {
    resetInput(1);
})
input[1].addEventListener('blur', () => {
    const lastNameValue = lastName.value.trim();
    checkLastName(lastNameValue, 1);
})

input[2].addEventListener('focus', () => {
    resetInput(2);
})
input[2].addEventListener('blur', () => {
    const emailValue = email.value.trim();
    checkEmail(emailValue, 2);
})

function checkFirstName(firstNameValue, i) {
    if (firstNameValue === '') {
        error[i].innerText = 'First Name cannot be empty';
        input[i].style.border = '1px solid hsl(0, 100%, 74%)';
        input[i].style.color = 'hsl(0, 100%, 74%)';
        input[i].classList.add('error-img');
    } else {
        success(i);
    }
}

function checkLastName(lastNameValue, i) {
    if (lastNameValue === '') {
        error[i].innerText = 'Last Name cannot be empty';
        input[i].style.border = '1px solid hsl(0, 100%, 74%)';
        input[i].style.color = 'hsl(0, 100%, 74%)';
        input[i].classList.add('error-img');
    } else {
        success(i);
    }
}

function checkEmail(emailValue, i) {
    if (emailValue === '') {
        error[i].innerText = 'Email cannot be empty';
        input[i].style.border = '1px solid hsl(0, 100%, 74%)';
        input[i].style.color = 'hsl(0, 100%, 74%)';
        input[i].classList.add('error-img');
    } else if (!emailValue.match(emailRegex)) {
        error[i].innerText = 'Looks like this is not an email';
        input[i].style.border = '1px solid hsl(0, 100%, 74%)';
        input[i].style.color = 'hsl(0, 100%, 74%)';
        input[i].classList.add('error-img');
    } else {
        success(i);
    }
}

function checkPassword(passwordValue, i) {
    if (passwordValue === '') {
        error[i].innerText = 'Password cannot be empty';
        input[i].style.border = '1px solid hsl(0, 100%, 74%)';
        input[i].style.color = 'hsl(0, 100%, 74%)';
        input[i].classList.add('error-img');
    } else {
        success(i);
    }
}

function success(index) {
    input[index].style.border = '1px solid hsl(154, 59%, 51%)';
}

function resetInput(index) {
    input[index].classList.remove('error-img');
    error[index].innerText = '';
    input[index].style.color = 'hsl(249, 10%, 26%)';
    input[index].style.border = '1px solid hsl(248, 32%, 49%)';
}
