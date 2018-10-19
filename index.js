const express = require('express');
const app = express();
const api = require("./api.js");
app.use(express.static('www'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.get('/api/:action', function (req, res) {
    res.send(api[req.params.action]());
});

app.listen(3000, () => console.log('Server ready'));