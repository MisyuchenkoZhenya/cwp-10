const JH = require('../helpers/json_helper');
const jsonPath = `./top250.json`;

let films = JH.loadJson(jsonPath);

module.exports = (app) => {
    app.get('/api/films/readall', (req, res) => {
        res.send(films);
    });
    app.get('/api/films/read', (req, res) => {
        try{
            let id = Number(req.query.id);
            if(!id) throw new Error;
            res.send(films[id - 1]);
        }
        catch(Error){
            res.send("Wrong parameters");
        }
    });
}
