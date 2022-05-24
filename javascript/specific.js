const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const postID = params.get('id');
const API_URL = `https://mwakie.flywheelsites.com/wp-json/wp/v2/posts/${postID}`;
console.log(postID);

const postContainer = document.querySelector(".specific-post");

async function displayPosts() {
    try {
        const postsCall = await fetch(API_URL);
        const postsResult = await postsCall.json();
        postContainer.innerHTML = `${postsResult.content.rendered}`
    } catch (err) {
        console.log(err)
    }
}
displayPosts();

const otherApiCall = `https://mwakie.flywheelsites.com/wp-json/wp/v2/posts/`;
const postDisplay = document.querySelector(".recomended-posts-container");
async function displayOtherPosts() {
  try {
    const productCall = await fetch(otherApiCall);
    const productResponse = await productCall.json();
    for (let i = 0; i < productResponse.length; i++) {
        if(i > 3){
            return;
        }
      postDisplay.innerHTML += `
      <h3 class="recomended">Other blog posts to read</h3>
      <a href="/specific.html?id=${productResponse[i].id}">${productResponse[i].title.rendered}</a>
      </div>
      `;
    }
  } catch (e) {
    console.log(e);
  }
}
displayOtherPosts()