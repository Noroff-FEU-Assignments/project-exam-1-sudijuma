const yourName = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;
const form = document.getElementById("form");
const error = document.getElementById("error");


form.addEventListener("submit", (e) => {
    let message = []
    if (yourName === '' || yourName === null) {
        message.push('Name is required')
    }

    if (subject.length < 15) {
        message.push('Subject must be at least 15 characters long')
    }
    if (message.length < 25) {
        message.push('Message must be at least 25characters long')
        e.preventDefault()
        error.innerText = message.join(', ')
    }
    return true;
})

/* function validateMe(e) { } */

function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}