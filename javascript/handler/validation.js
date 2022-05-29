function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const x = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;
const form = document.getElementById("form");
const error = document.getElementById("error");

/* function validateMe(e) { } */

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
/* button.onclick = function () {
    const valid = input.value;
    const validation
} */
messageContainer.onkeyup = function (event) {
  const messageLength = event.target.value.length;
  wordCount.innerHTML = messageLength;
  if ((formSubmitBTN.Disabled = messageLength <= 9)) {
  } else {
    alert("message must be at least 10 characters");
  }
};

function messageValidation() {
  const x = document.forms["form"]["message"].value;
  if (x <= 25) {
    alert("At least 25 characters please");
    return false;
  } else {
    return true;
  }
}
function subjectValidation() {
  const x = document.forms["form"]["subject"].value;
  if (subject <= 15) {
    alert("Input must be at least 15 characters long");
    return false;
  } else {
    return true;
  }
}
function nameValidation() {
  const x = document.forms["form"]["name"].value;
  if (x === "" || x === null) {
    alert("Name required");
    return false;
  } else {
    return true;
  }
}
function emailValidation(email) {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailFormat)) {
    alert("valid email adress!");
    return true;
  } else {
    alert("invalid email");
    return false;
  }
}

/* form.addEventListener("submit", (e) => {
    let message = []
    if (x === '' || x === null) {
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
}) */
