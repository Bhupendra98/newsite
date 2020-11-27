console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'f82df962fa9e4e3f96befa5da1c48df7'
let getNews = document.getElementById('getnews');


var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=in&' +
    'apiKey=f82df962fa9e4e3f96befa5da1c48df7';
var req = new Request(url);
let newsAccordion = document.getElementById('newsAccordion')
getNews.addEventListener('click',fetchCall);
function fetchCall(){
fetch(req)
    .then(function (response) {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        if (data.status == "ok") {
            let articles = data.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function (element, index) {
                // console.log(element, index)
                let news = `<div class="card my-3">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1} : </b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;
        }
    });
}
