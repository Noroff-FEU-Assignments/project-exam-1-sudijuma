/* const blog_api = "http://mwakies-space-blog.local/wp-json/wp/v2/posts/";
console.log(blog_api);

const postContainer = document.querySelector(".featured-post");

async function postDisplay(){
    try {
        const postCall = await fetch(blog_api);
        const postData = await postCall.json();
        console.log(postData);
        for (let i = 0; i < postData.length; i++) {
        }
    } catch (err) {
        console.log(err)
    }
}

postDisplay();

const API_URL = `https://mwakie.flywheelsites.com/wp-json/wc/store/products/`;
const productDisplay = document.querySelector(".featured-post");

async function displayJackets() {
  try {
    const productCall = await fetch(API_URL);
    const productResponse = await productCall.json();
    for (let i = 0; i < productResponse.length; i++) {
      productDisplay.innerHTML += `<div class="featured-products-item">
            <div class="featured-products-item-image"><img src="${productResponse[i].images[0].src}"></div>
            <p class="title"></p>
            <p class="short-description"></p>
            <p class="price">${productResponse[i].prices.price}kr</p>
            <a href="/specific.html?id=${productResponse[i].id}">View details</a>
          </div>`;
    }
  } catch (e) {
    console.log(e);
  }
}
displayJackets();
 */