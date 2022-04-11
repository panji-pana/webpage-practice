# Practicing npm, hbs, node js

This is a site used for storing practicing concepts of random pieces of a website (signup, handlebars, deploying on a heroku site etc.)

Requires:
∙[NPM](https://www.npmjs.com/)
∙[Node.js](http://nodejs.org/)
∙[HerokuCLI](https://cli.heroku.com/)

## Hosting

In the terminal to begin hosting locally:
```
node index.js
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
∙ Heroku seems to not be super great with bcrypt. You can find a ton of examples of solution [here](https://github.com/kelektiv/node.bcrypt.js/issues/755).
∙ If you are receiving "error: src refspec master does not match any" change "git push heroku master" to "git push heroku HEAD:master"

## Other documentation
∙[Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
∙[Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
∙[Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
∙[Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
∙[Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
