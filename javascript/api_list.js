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
const marsAPI = document.querySelector('.mars-weather')
const marsWeatherAPI = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=bQda8zxBMGQUcbPIvQRKVczRhCkq1bJJDy5Jiq6V';
async function displayMarsWeatherAPI() {
    try {
        const apiCall = await fetch(marsWeatherAPI);
        const apiMarsResponse = await apiCall.json();
        console.log(apiMarsResponse);
        marsAPI.innerHTML = `<img src="${apiMarsResponse.photos[0].img_src}" alt="" srcset=""><p>${apiMarsResponse.photos[0].camera.full_name}</p>
        <img src="${apiMarsResponse.photos[1].img_src}" alt="" srcset="">`
    } catch (err) {
        console.log(err);
    }
}
displayMarsWeatherAPI();