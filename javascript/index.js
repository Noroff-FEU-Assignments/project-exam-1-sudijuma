const API_URL = `https://mwakie.flywheelsites.com/wp-json/wp/v2/posts/?_embed`;
const productDisplay = document.querySelector(".blog-post-container");

fetch(API_URL)
  .then((response) => {
    return response.json();
  })
  .then((jasonData) => {
    const apiResult = jasonData;
    console.log(apiResult);
    for (let i = 0; i < apiResult.length; i++) {
      if (i === 3) {
        return;
      }
      const postTitle = apiResult[i].title.rendered;
      const postID = apiResult[i].id;
      const postImg = apiResult[i]._embedded["wp:featuredmedia"][0].source_url;
      productDisplay.innerHTML += `
      <div class="blog-posts">
        <div class="blog-post-image-container"><img src="${postImg}" alt="" srcset="" class="blog-post-image-container"></div>
        <div class="blog-info-container"><h2 class="blog-post-headline">${postTitle}</h2></div>
        <div class="read-more-container"><a href="/specific.html?id=${postID}" class="read-more-link">Read more...</a></div>
      </div>`;
    }
  })
  .catch((error) => console.log(error));

function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
