
const API_URL = `https://mwakie.flywheelsites.com/wp-json/wp/v2/posts/`;
const productDisplay = document.querySelector(".featured-post");
async function displayPosts() {
  try {
    const productCall = await fetch(API_URL);
    const productResponse = await productCall.json();
    for (let i = 0; i < productResponse.length; i++) {
      productDisplay.innerHTML += `      <div class="featured-post-container">
      <div class="featured-post-image-container"><img src="${productResponse[i].guid.rendered}" alt="" class="featured-image"></div>
      <h3 class="featured-post-headline">${productResponse[i].title.rendered}</h3>
      <p class="featured-post-short-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Quas,
        dolorum?
      </p>
    </div>`;
    }
  } catch (e) {
    console.log(e);
  }
}
displayPosts();