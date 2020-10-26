const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    console.log(message);
    if (message.body.indexOf('Hi') != -1 || message.body.indexOf('Hello') != -1) {
        message.reply('Hello there!\nRegards from ww-bot');
    }
});

client.initialize();
