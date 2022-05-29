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
    postContainer.innerHTML = `
        <h1>${postsResult.title.rendered}</h1>
        ${postsResult.content.rendered}
        <span class="post-date">Posted: ${postsResult.date}</span>
        <button id="btn-prev">Previous</button>
        <button id="btn-next">Next</button>`;
  } catch (err) {
    console.log(err)
  }
}
displayPosts();

const otherApiCall = `https://mwakie.flywheelsites.com/wp-json/wp/v2/posts/?_embed`;
const postDisplay = document.querySelector(".recomended-posts-container");
async function displayOtherPosts() {
  try {
    const productCall = await fetch(otherApiCall);
    const productResponse = await productCall.json();
    for (let i = 0; i < productResponse.length; i++) {
      if (i > 3) {
        return;
      }
      postDisplay.innerHTML += `
      <div class="recomended-post-container">
      <div class="recomended-posts">
      <div class="recomended-post-image-container"><img src="${productResponse[i]._embedded['wp:featuredmedia'][0].source_url}" alt="" srcset="" class="recomended-image" />
      <a href="/specific.html?id=${productResponse[i].id}" class="link-container">${productResponse[i].title.rendered}</a>
      </div>
      </div>`;
    }
  } catch (e) {
    console.log(e);
  }
}
displayOtherPosts()