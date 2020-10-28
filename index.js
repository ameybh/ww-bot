const fs = require('fs');
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');

// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

const puppeteerOptions = {
    headless: true,
    args: ["--no-sandbox"]
};
const client = new Client(
    {
        puppeteer: puppeteerOptions,
        session: sessionData
    }
);

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('authenticated', (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.log(err);
        }
    });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    console.log(message);
    const check = message.body.toLowerCase();
    if (check.indexOf('!hi') != -1 || check.indexOf('!hello') != -1) {
        message.reply('Hello there!\nI am ww-bot. This is an automated message.\nRead more at https://github.com/ameybhavsar24/ww-bot');
    }
});

client.initialize();
