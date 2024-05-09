const APIURL =
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=`;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// ye page ko next krne ki functionality h abhi k lie

// var count=1;
// var specific_count=1;


var content = document.getElementById("contentbox");

const getMovies = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    showMovies(data.results);
}

function showMovies(data)
{    content.innerHTML="";
    for(var i=0;i<data.length;i++)
                {
                    content.innerHTML+=` <div class="card" >
                    <img src="${IMGPATH+data[i].poster_path}" >
                    <div class="nr">
                    <div class="name">
                    ${data[i].title}
                    </div>
                    <div class="rating">
                    ${data[i].vote_average}

                    </div> 
  
                  </div>
                    <div class="overview">
                        <h3>Overview</h3>
                        <div class="info">
                            <!-- info about the movie -->
                            ${data[i].overview}
                        </div>
                    </div>
                </div>`
                }
}
getMovies(APIURL);

var input =document.getElementById("search");
input.addEventListener(
    "keyup",
    function (e){
        if(e.target.value!="")
        {
            getMovies(SEARCHAPI+e.target.value)

        }
        else
        {
            getMovies(APIURL);
        }
    }
)
// page ko next krne ki functuionality h
// var next=document.getElementById("btn");

// btn.addEventListener(
//     "click",
//     function (){
//         btn.style.boxShadow ="3px 3px 5px grey";
//         btn.style.backgroundColor ="#333333";
    
      
//        if(input.value!="")
//        {   specific_count++;
//         secapi=APIURL+`${specific_count}`;
//            getMovies(SEARCHAPI+input.value+`&page=${specific_count}`);

//        }
//        else
//        {
//             count++;
//             secapi=APIURL+`${count}`;
//            getMovies(secapi);
//        }

//     }
// )