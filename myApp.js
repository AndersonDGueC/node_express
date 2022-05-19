let express = require('express');
let app = express();
require('dotenv').config();
var bodyParser = require('body-parser');
//console.log
console.log('Hello World')

//absolute path
absolutePath = __dirname + '/views/index.html'

//apply middleware before index
app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next)=>{
	console.log(req.method+" "+req.path+" - "+req.ip);
	next();
})

//parser application/x-www-form-urlencode
app.use(bodyParser.urlencoded({extended:false}))

//parser application json
app.use(bodyParser.json())


//endpoint root
app.get('/',function(req, res){
	res.sendFile(absolutePath);
	})

//endpoint json
app.get('/json', (req, res)=>{
	if(!process.env.MESSAGE_STYLE === 'uppercase'){
	res.json({
		message:"Hello json"	
	});
	}
	else{
	res.json({
		message:"HELLO JSON"
		});
	}
  })

//endpoind now
const getDateString=()=>{
	return new Date().toString();
}
app.get("/now", (req, res, next)=>{
	req.time= getDateString();
	next();
},(req, res)=>{
	res.json(
	{
	time: req.time
	})
})

//require parameters

app.get("/:word/echo",(req,res)=>{
	
	const {word}=req.params;
	res.json({
	echo:word
	})
	
	})

//response require query

app.get("/name",(req,res)=>{
		const {first:firstname, last:lastname} = req.query;
		res.json(
		{
		name: `${firstname} ${lastname}`
		}
		)
		
		})

//application POST
app.post("/name", (req, res)=>{
	console.log(req.body.first);
	res.json({name:req.body.first+" "+req.body.last})
	
	})





 




	

	

 




 module.exports = app;
