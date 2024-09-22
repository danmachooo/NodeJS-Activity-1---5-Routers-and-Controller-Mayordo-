const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router/routes');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Connected Successfully! Server is running on http://localhost:${PORT}`)
})


