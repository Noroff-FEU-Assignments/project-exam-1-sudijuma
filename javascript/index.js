
const API_URL = `https://mwakie.flywheelsites.com/wp-json/wc/posts`;
const productDisplay = document.querySelector(".featured-post");

async function displayPosts() {
  try {
    const productCall = await fetch(API_URL);
    const productResponse = await productCall.json();
    for (let i = 0; i < productResponse.length; i++) {
      console.log(productResponse[i])
      productDisplay.innerHTML += ``;
    }
  } catch (e) {
    console.log(e);
  }
}
displayPosts();
