let express = require('express');
let app = express();

console.log('Hello World')

app.use('/public', express.static(__dirname + '/public'));

absolutePath = __dirname + '/views/index.html'
app.get('/',function(req, res){
	res.sendFile(absolutePath);
	})































 module.exports = app;
