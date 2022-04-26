# Practising npm, hbs, node js

This is a site used for storing practising concepts of random pieces of a website (signup, handlebars, deploying on a heroku site etc.)

Requires:</br>
∙[NPM](https://www.npmjs.com/)</br>
∙[Node.js](http://nodejs.org/)</br>
∙[HerokuCLI](https://cli.heroku.com/)</br>

## Hosting

In the terminal to begin hosting locally:
```
$node index.js
```
Then in a browser we access
```
https://localhost:5000
```

To begin deploying to heroku
```
$ heroku create
$ git push heroku HEAD:master
$ heroku open
```

## Problems I ran into that you might be searching for
∙ Heroku seems to not be super great with bcrypt. You can find a ton of examples of solution [here](https://github.com/kelektiv/node.bcrypt.js/issues/755).</br>
∙ If you are receiving "error: src refspec master does not match any" change "git push heroku master" to "git push heroku HEAD:master"

## Other documentation
∙[Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)</br>
∙[Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)</br>
∙[Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)</br>
∙[Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)</br>
∙[Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)</br>
