var express = require('express'),
    app     = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

// html stuf
app.use('/images', express.static(__dirname + '/client/views/images'));

app.listen(3000, function() {
    console.log('Listening on 3000');
})