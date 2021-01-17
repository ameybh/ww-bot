# ww-bot

Boilerplate code for [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) library.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to setup ww-bot.

1. Clone the repository.
```bash
git clone https://github.com/ameybhavsar24/ww-bot.git
```

2. Install dependencies.
```bash
npm i
```
Currently, the project uses 2 direct dependencies which account for about 400 MB.
```
"dependencies": {
  "qrcode-terminal": "^0.12.0",
  "whatsapp-web.js": "^1.11.0"
}
```
## Usage
Start the project locally.
```bash
npm start
```
Open Whatsapp Web QR Scanner on your phone and scan the QR code shown in terminal.

Note: The bot will stop when the process is terminated. To deploy the bot, see [DEPLOY.md](https://github.com/ameybhavsar24/ww-bot/blob/master/DEPLOY.md)


You will need to authenticate everytime you start the bot unless you store a session file.
You can store the session locally by creating a `.env` file and setting a environment variable `WW_SESSION` to the session string printed in the terminal.

If you are deploying the bot to Heroku, you can store the session object as `WW_SESSION` to Heroku configs to skip authentication. Read more in [DEPLOY.md](https://github.com/ameybhavsar24/ww-bot/blob/master/DEPLOY.md)

## License
[ISC](https://choosealicense.com/licenses/isc/)
