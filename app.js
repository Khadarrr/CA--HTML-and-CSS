const blogContainer = document.querySelector("#blog-post");
const url = "https://rainydayscmsca.flywheelsites.com/wp-json/wp/v2/posts/"

async function fetchBloggPost() {
    try {
        const response = await fetch(url);
        const json = await response.json();
       

        let html = "";
        json.forEach(item => {
            html += `
            <div class="post">
            
            <div class="content">
              ${item.title.rendered}
              <p class="date">${new Date(item.date).toLocaleDateString()}</p>
              <p class="excerpt">${item.excerpt.rendered}</p>
              <a href="${item.link}" class="read-more">Read More</a>
            </div>
          </div>
          `;
        });

        blogContainer.innerHTML = html;
    } catch (error) {
        console.log(error);
    }

}

fetchBloggPost()

