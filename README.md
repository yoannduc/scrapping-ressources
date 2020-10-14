# Ressources cours D13 web scrapping

[https://pusher.com/tutorials/web-scraper-node](https://pusher.com/tutorials/web-scraper-node)

[https://www.scrapingbee.com/blog/web-scraping-javascript/](https://www.scrapingbee.com/blog/web-scraping-javascript/)

[https://www.twilio.com/blog/how-to-build-a-cli-with-node-js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)

[https://www.npmjs.com/package/inquirer#question](https://www.npmjs.com/package/inquirer#question)

[https://www.npmjs.com/package/yargs](https://www.npmjs.com/package/yargs)

[https://github.com/sindresorhus/open](https://github.com/sindresorhus/open)

[https://nodemailer.com/about/](https://nodemailer.com/about/)

## TP

Faire une cli qui va scrapper le site [old.reddit.com](old.reddit.com) et qui retourne un input inquirer au user des titres. Au choix d'un article, la cli doit lancer le navigateur de l'utilisateur avec le lien du post choisi par le user. Si la cli est appellée avec un paramètre (ex: `<cli> programming`), le subreddit à scrapper est le subreddit inputed (page d'accueil par défaut).

Vous pouvez également ajouter des flag-params à votre cli. Par exemple, elle peut attendre un flag -l qui, si il est set, ne propose pas le prompt, mais liste simplement au user, un -d qui le télécharge dans un fichier timestampé dans les téléchargements (ou au choix avec un autre flag par exemple !) et un -m suivi d'un mail qui enverrait un mail ([https://nodemailer.com/about/](https://nodemailer.com/about/) utilisez un faux mailer comme dans la doc d'example) mais sans "perturber" l'input du subreddit à scrapperAfin d'interpréter les flags, vous pouvez utiliser le paquet yargs.

[https://yargs.js.org/docs/](https://yargs.js.org/docs/)

[https://github.com/yargs/yargs/blob/master/docs/examples.md](https://github.com/yargs/yargs/blob/master/docs/examples.md)
