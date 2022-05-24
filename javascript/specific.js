const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const postID = params.get('id');
const API_URL = `https://mwakie.flywheelsites.com/wp-json/wp/v2/posts/${postID}`;
console.log(postID);

const postContainer = document.querySelector(".main-content");

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