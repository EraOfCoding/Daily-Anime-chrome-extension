let randAnime

let title = "Naruto"
let synopsis = "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'..."
let image_url = "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6"


function update() {
    fetch('https://api.jikan.moe/v3/top/anime')
        .then(response => response.json())
        .then(anime => {
            randAnime = anime.top[Math.floor(Math.random() * 40)]
            fetch(`https://api.jikan.moe/v3/search/anime?q=${randAnime.title}`)
                .then(response => response.json())
                .then(res => {
                    synopsis = res.results[0].synopsis
                    document.getElementById("animeDescription").innerHTML = synopsis
                })

            title = randAnime.title
            image_url = randAnime.image_url
            document.getElementById("animeName").innerHTML = title
            document.getElementById("animeImage").src = image_url
        })
}

fetch('https://api.jikan.moe/v3/top/anime')
    .then(response => response.json())
    .then(anime => {
        document.getElementById("animeName").innerHTML = title
        document.getElementById("animeDescription").innerHTML = synopsis
        document.getElementById("animeImage").src = image_url
    })

let now = +new Date();

var date = new Date();

let createdAt = 1624026684844

const oneDay = 60 * 60 * 24 * 1000;
//miliseconds in one day: 60 * 60 * 24 * 1000

var compareDatesBoolean = (now - createdAt) > oneDay;

if (compareDatesBoolean) {
    update();
}