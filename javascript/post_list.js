function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

const API_URL = `https://mwakie.flywheelsites.com/wp-json/wp/v2/posts/?_embed`;
const blogDisplay = document.querySelector(".content-container");

fetch(API_URL)
    .then((response) => {
        return response.json();
    })
    .then((jasonData) => {
        const apiResult = jasonData;
        console.log(apiResult);
        for (let i = 0; i < apiResult.length; i++) {
            const postTitle = apiResult[i].title.rendered;
            const postID = apiResult[i].id;
            const postDate = apiResult[i].date;
            const postImg = apiResult[i]._embedded["wp:featuredmedia"][0].source_url;
            blogDisplay.innerHTML += `
            <div class="post-box">
            <div class="post-image-box"><img src="${postImg}" alt="" srcset="" class="post-image"></div>
            <div class="tagline-box">
              <p class="post-tagline">${postTitle}</p>
            </div>
            <div class="post-link-box">
              <a href="/specific.html?id=${postID}" class="post-link">Read more</a>
            </div>
          </div>
            `;
        }
    })
    .catch((error) => console.log(error));