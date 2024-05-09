const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;


search.addEventListener(
    "keyup", function (e) {

        if (e.key == "Enter") {
            getMovies(e.target.value);
        }
    }
)


var content=document.getElementById("contentbox");

function getMovies(movie) {
    fetch(API_URL)
        .then(
            (response) => {

                return response.json();
            }
        )
        .then(
            (data) => {
                console.log(API_URL);
                console.log(data);
                for(var i=0;i<data.results.length;i++)
                {
                    content.innerHTML+=` <div class="card" style="background-image:url(${ BASE_URL + '/discover/movie?' + data.results[i].poster_path})">
                    <div class="nr">
                    <div class="name">
                    ${data.results[i].title}
                    </div>
                    <div class="rating">
                    ${data.results[i].vote_average}

                    </div> 
  
                  </div>
                    <div class="overview">
                        <h3>Overview</h3>
                        <div class="info">
                            <!-- info about the movie -->
                            ${data.results[i].overview}
                        </div>
                    </div>
                </div>`
                }
            }
        )
}