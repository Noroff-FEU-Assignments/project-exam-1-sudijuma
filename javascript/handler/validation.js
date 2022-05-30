function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

const form = document.querySelector('form');
const thanks = document.querySelector('.takk');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

let isFormValid = false;
let isValidOn = false;

const isEmailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const resetInput = (element) => {
    element.classList.remove("invalid");
    element.nextElementSibling.classList.add('hidden')
}

const invalidateElement = (element) => {
    element.classList.add("invalid");
    element.nextElementSibling.classList.remove('hidden');
}

const inputs = [
    nameInput,
    emailInput,
    subjectInput,
    messageInput
];

const validateInputs = () => {
    if (!isValidOn) return;
    let isFormValid = true;
    inputs.forEach(resetInput)
    if (nameInput.value < 5) {
        invalidateElement(nameInput);
        isFormValid = false;
    }
    if (!isEmailValid(emailInput.value)) {
        invalidateElement(emailInput);
        isFormValid = false;
    }
    if (subjectInput.value < 15) {
        invalidateElement(subjectInput);
        isFormValid = false;
    }
    if (messageInput.value < 25) {
        invalidateElement(messageInput);
        isFormValid = false;
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        thanks.classList.remove('hidden');
    }
});


inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInputs();
    });
});
