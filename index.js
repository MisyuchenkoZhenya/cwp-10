const express = require('express');
var bodyParser = require("body-parser");
const routes = require('./routes/index');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//TODO: writeFile for top250.json

routes(app);

app.listen(port, () => {
    console.log('Example app listening on port 3000!')
});
