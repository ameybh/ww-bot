const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const puppeteerOptions = {
    headless: true,
    args: ["--no-sandbox"]
};
const client = new Client({puppeteer: puppeteerOptions});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
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
