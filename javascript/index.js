const API_URL = `https://mwakie.flywheelsites.com/wp-json/wp/v2/posts/?_embed`;
const productDisplay = document.querySelector(".featured-post");
async function displayPosts() {
  try {
    const productCall = await fetch(API_URL);
    const productResponse = await productCall.json();
    console.log(productResponse);
    for (let i = 0; i < productResponse.length; i++) {
      productDisplay.innerHTML += `      <div class="featured-post-container">
      <div class="featured-post-image-container"><img src="${productResponse[i].id.featured_image}" alt="" srcset="" class="featured-image"></div>
      <h3 class="featured-post-headline">${productResponse[i].title.rendered}</h3>
      <a href="/specific.html?id=${productResponse[i].id}">View details</a>
    </div>`;
    }
  } catch (e) {
    console.log(e);
  }
}
displayPosts();

/* 
//1. select the input with id firstName

const firstName = document.querySelector("#firstName");
const errorContainer = document.querySelector(".error__message");
const errorContainerSvg = document.getElementById("error-icon");
//2. add an event to the input >>>> keyup onkeyup
firstName.addEventListener("keyup", logLengthMsg);

//3. Get the length of the input 
function logLengthMsg(event){
    const inputValue = event.target.value.trim();
    const valueLength = inputValue.length;
    if(valueLength > 0){
        errorContainer.innerHTML = "the input has a value";
        errorContainerSvg.style.display ="block";
    }
    else {
        errorContainer.innerHTML = "The input dosent have a value";
        errorContainerSvg.style.display ="block";
    }
}

//4. make a condition 
    //If the lentgh is > 0 
        //Show message "the input has a value"
    //else
        //Show a message " the input dosent have a value" */