const express = require('express');
const path = require('path')
const hbs = require('hbs')
// loads our libraries

const app = express();

const publicDirectoryPath = (path.join(__dirname,'public'))
const viewsPath = path.join(__dirname,'/templates/views')
const partialsPath = path.join(__dirname,'/templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))
// Tells 'express' that you're utilising HBS and the folder structure for which you've set up your HBS paths

// app.get('',(req,res)=> {
// 	res.status(200).send('default-IsabelleWestcott')
// })

app.get('',(req,res)=> {
	res.render('index',{
	})
})

app.get('/home',(req,res)=> {
	res.render('index',{
	})
})

app.get('/news',(req,res)=> {
	res.render('news')
}) 
// loads and renders webpage under the page "page/weather" where page is our default website link (https://HBS.isabellewestco1.repl.co in this case)
// This works by getting the link of /news when it is sent in line 8 of index and attaching it to the news.hbs

app.get('/menu',(req,res)=> {
	res.render('menu')
})

app.get('/leave',(req,res)=>{
	res.render('leave')
})


app.listen(3000,()=> {
	console.log('server is up')
});