const express = require('express');
const app = express();
const routes = require('./routes/index');

const port = 3000;

routes(app);

app.listen(port, () => {
    console.log('Example app listening on port 3000!')
});
