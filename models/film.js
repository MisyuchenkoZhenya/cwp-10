

class Film {
    constructor(film){
        this.film = {
            "id": film.id,
            "title": film.title,
            "rating": film.rating,
            "year": film.year,
            "budget": film.budget,
            "gross": film.gross,
            "poster": film.poster,
            "position": film.position,
        }
    }

    getFilm(){
        return this.film;
    }
}

module.exports = Film;