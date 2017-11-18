const JH = require('../helpers/json_helper');

class Films {
    constructor(path) {
        this.films = loadData(path);
    }

    loadData(path) {
        JH.loadJson(path)
            .then(result => {
                return result;
            })
            .catch(error => {
                console.log(error.message);
            });
    }
 
    add(){

    }

    get(){
        return this.film;
    }
}

module.exports = Films;

// this.film = {
//     "id": film.id,
//     "title": film.title,
//     "rating": film.rating,
//     "year": film.year,
//     "budget": film.budget,
//     "gross": film.gross,
//     "poster": film.poster,
//     "position": film.position,
// }