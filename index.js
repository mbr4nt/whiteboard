const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const api = require("./api.js"); 



app.use(express.static('www'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.post('/api/:action', function (req, res) {
    res.send(api[req.params.action](req.body));
});

app.get('/api/:action', function (req, res) {
    api[req.params.action](function(err, data) {
        res.send(data);
    });
});


app.listen(3000, () => console.log('Server ready'));