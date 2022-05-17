let express = require('express');
let app = express();

//console.log
console.log('Hello World')

//absolute path
absolutePath = __dirname + '/views/index.html'

//apply middleware before index
app.use('/public', express.static(__dirname + '/public'));

//endpoint root
app.get('/',function(req, res){
	res.sendFile(absolutePath);
	})

//endpoint json
app.get('/json', (req, res)=>{
	res.json({
		message:"Hello json"	
	});
})





























 module.exports = app;
