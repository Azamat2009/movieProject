import {movies} from "./db.js";

let promo__bg = document.querySelector(".promo__bg")
let genre = document.querySelector('.promo__genre')
let title = document.querySelector('.promo__title') 
let descr = document.querySelector('.promo__descr')
let rating = document.querySelector('.promo__ratings')
let imdb = document.querySelector('.imdb')
let kinopoisk = document.querySelector('.kinopoisk')

function reload(arr) {
    for(let item of arr) {
        let ul = document.querySelector('.promo__interactive-list')

        let del = document.createElement('div')
        del.classList.add('delete')
        let li = document.createElement('li')
        li.classList.add('promo__interactive-item')
        li.innerHTML = item.Title
        ul.append(li)
        li.append(del)
        
        del.onclick = () => {
            li.style.display = 'none'
            li.remove()
        }

        li.onclick = () => {
            showMoviePromo(item)
            let mv_title = item.Title
            let mv_genre = item.Genre
            let mv_descrip = item.Plot
            let imdbRating = item.imdbRating
            genre.innerHTML = mv_genre
            title.innerHTML = mv_title
            descr.innerHTML = mv_descrip
            imdb.innerHTML = ' IMDb: ' + imdbRating
            kinopoisk.innerHTML = ' Кинопоиск: ' + imdbRating
        }
    }
}

function showMoviePromo(movie) {
    promo__bg.style.background = url`(${movie.Poster})`

}

reload(movies)