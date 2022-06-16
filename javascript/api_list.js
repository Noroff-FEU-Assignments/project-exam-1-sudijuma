function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}
const displayApiImage = document.querySelector(".api-image-container");
const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=bQda8zxBMGQUcbPIvQRKVczRhCkq1bJJDy5Jiq6V';
async function displayApi() {
    try {
        const apiCall = await fetch(nasaApi);
        const apiResponse = await apiCall.json();
        console.log(apiResponse);
        displayApiImage.innerHTML = `<div class="api-image-container"><img src="${apiResponse.url}" alt="" class="img-responsive"></div>
        <div class="api-explanation-container"><p class="api-explanation">${apiResponse.explanation}</p></div></div>`
    } catch (err) {
        console.log(err);
    }
}
displayApi();