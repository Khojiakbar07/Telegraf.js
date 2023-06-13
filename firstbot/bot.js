const Telegraf = require('telegraf');

const bot = new Telegraf('6043684472:AAFJISpYKpsBk67-4q9Gjm6GHxjTO50h7aw');

//        /start
bot.start((ctx) => {
    // ctx.reply("you have entered start command");
    console.log(ctx);
})



bot.settings((ctx) =>{
    ctx.reply("you have entered settings command");
})

bot.launch();