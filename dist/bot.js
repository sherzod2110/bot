"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TelegramBot = require("node-telegram-bot-api");
const typeorm_1 = require("./config/typeorm");
const startSave_1 = require("./utils/startSave");
const videoDownload_1 = require("./utils/videoDownload");
typeorm_1.myDataSource
    .initialize()
    .then(() => console.log('Baza Connect!!!'))
    .catch((err) => console.error(err));
const BOT_TOKEN = '6205739815:AAE8vpZ7IXtYV4dq-J4JydIKPFMLry0GO2A';
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text == '/start') {
        const resp = `Hello, welcome, ${msg.from.first_name}

You can download Instagram video through this bot, Send a link to download the video. 🚀
    
• Instagram - Post link 👇
    `;
        (0, startSave_1.startSave)(msg);
        return bot.sendMessage(chatId, resp);
    }
    if (msg.text.split('m/')[0] == 'https://www.instagram.co') {
        bot.sendMessage(chatId, '⏳');
        (0, videoDownload_1.videoDownload)(msg, bot);
        return;
    }
    bot.sendMessage(chatId, 'Sorry link mistake');
});
//# sourceMappingURL=bot.js.map