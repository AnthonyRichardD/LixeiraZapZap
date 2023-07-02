import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

const BOT_TOKEN = "6157416506:AAEt-iZQDQA4EYYmGwBrJifjDdSkQGpyITc"; // vai no telegram, pesquisa por BotFather e cria um bot
const bot = new Telegraf(BOT_TOKEN);


export const sendMessage = (message) => {
    bot.telegram.sendMessage("@zapzapcompanyalert", message);
}
// Link do canal: t.me/zapzapcompanyalert

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));


//Fonte: https://github.com/telegraf/telegraf | https://telegraf.js.org/
