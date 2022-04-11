const express = require('express');
const path = require('path')
const hbs = require('hbs')
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require('body-parser');
const dbFile = "private/data/sqlite.db";

const port = 5000;

// loads our libraries

const app = express();

const bcrypt = require('bcryptjs')
const saltRounds = 10

const publicDirectoryPath = (path.join(__dirname, 'public'))
const viewsPath = path.join(__dirname, 'public/templates/views')
const partialsPath = path.join(__dirname, 'public/templates/partials')
const utilitiesPath = path.join(__dirname, 'public/utilities')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))
    // Tells 'express' that you're utilising HBS and the folder structure for which you've set up your HBS paths


// creates a table of users/passcodes unless one already exists
const db = new sqlite3.Database(dbFile, err => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successful connection to the database");
        // const sql_create = `DROP TABLE IF EXISTS Users`
        const sql_create = `CREATE TABLE IF NOT EXISTS Users (User_ID INTEGER PRIMARY KEY AUTOINCREMENT,Username VARCHAR(100) NOT NULL,Password VARCHAR(100) NOT NULL);`;
        db.run(sql_create, err => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Successful creation of the 'users' table");
            }
        });
    }
});

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/*
requests the username and password from the html file
then hashes them
*/
app.post("/signup", (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;
    bcrypt.hash(pass, saltRounds, function(err, hash) {
        // console.log(hash)
        const sql = "INSERT INTO Users (Username, Password) VALUES (?, ?)";
        const newuser = [req.body.username, req.body.password];
        db.run(sql, [user, hash], err => {
            if (err) {
                return console.error(err.message);
            } else { window.location.href = '/public/templates/views/thanks.hbs' }

        });
    });
})

/* gets the whole users database and formats it as a json file */
app.get("/getusers", (req, res) => {
    const sql = "SELECT * FROM Users"
    db.all(sql, (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.json(rows);
    })
})

// load webpages
app.get('' || '/' || '/home', (req, res) => {
    res.render('index')
});

app.get('/news', (req, res) => {
        res.render('news')
    })
    // loads and renders webpage under the page "page/weather" where page is our default website link (https://HBS.isabellewestco1.repl.co in this case)
    // This works by getting the link of /news when it is sent in line 8 of index and attaching it to the news.hbs

app.get('/menu', (req, res) => {
    res.render('menu')
})

app.get('/leave', (req, res) => {
    res.render('leave')
})

app.get('/test', (req, res) => {
    res.render('menuTest')
})

app.get('/login', (req, res) => {
    res.render('signIn')
})

app.get('/newAccount', (req, res) => {
    res.render('signUp')
})

app.get('/thanks', (req, res) => {
    res.render('thanks')
})

app.get('/andy', (req, res) => {
    res.render('andy')
})

app.get(('/redacted'), (req, res) => {
    res.render('redacted')
})

app.get('/autumn', (req, res) => {
    res.status(200).send('For now this is just in my API as a request but later I\'m gonna build an entire webpage dedicated to my love for you. Because it is so large I can not type it but maybe I can show it')
})

app.listen(process.env.PORT || port, function() {
    console.log("SERVER STARTED PORT: $(port)");
});