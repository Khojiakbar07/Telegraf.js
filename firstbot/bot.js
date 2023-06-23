const Telegraf = require('telegraf');
// const { Telegraf, Markup } = require("telegraf");
const axios = require('axios');

const bot = new Telegraf('6043684472:AAFJISpYKpsBk67-4q9Gjm6GHxjTO50h7aw');

bot.command('start', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id,"Welcome "  + ctx.from.first_name +  " this bot gives you  about our Vender project.",
    {
        reply_markup:{
          keyboard: [
            [
                { text: '🛍 Click me', url: 'https://vender.gougo.uz/'}
            ],
            [
              { text: '📋 My orders', callback_data: 'orders'},
              { text: '⚙️ Settings', callback_data: 'Settings'}
            ],
            [
              { text: '✍️ Leave feedback', callback_data: 'feedback'},
              { text: 'ℹ️ About us', callback_data: 'about'}
            ],
        ],
        resize_keyboard:true
    }
  })
})
bot.action('Settings', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Main Menu',{
        reply_markup:{
            keyboard: [
                [
                    { text: 'Languages', callback_data: 'languages'},
                    { text: 'See Meats List', callback_data: 'meats'}
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.action('feedback', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "Leave your feedback. Your opinion is important for us",
    {
        reply_markup:{
            keyboard: [
                [
                    { text: 'Back to menu', callback_data: 'menu'}
                ]
            ],
            resize_keyboard:true
        }
    })
})
// //        /start
// bot.start((ctx) => {
//     ctx.reply(ctx.from.first_name + " you have entered start commandl " + 
//     ctx.updateSubTypes[0]);
//     // console.log(ctx);
//     // console.log(ctx.from);
//     // console.log(ctx.chat);
//     console.log(ctx.message);
//     console.log(ctx.updateSubTypes);
// })


bot.on("sticker", (ctx)=> {
    ctx.reply("Please Don't send me a stiker")
})

// bot.command('test', ctx =>{
//     bot.telegram.sendMessage(ctx.chat.id, 'Main Menu',{
//         reply_markup:{
//             inline_keyboard: [
//                 [
//                     { text: 'See Fruits List', callback_data: 'fruits'}
//                 ],
//                 [
//                     { text: 'See Meats List', callback_data: 'meats'}
//                 ]
//             ]
//         }
//     })
// })



// bot.action('menu', ctx =>{
//     ctx.deleteMessage();
//     bot.telegram.sendMessage(ctx.chat.id, 'Main Menu',{
//         reply_markup:{
//             inline_keyboard: [
//                 [
//                     { text: 'See Fruits List', callback_data: 'fruits'}
//                 ],
//                 [
//                     { text: 'See Meats List', callback_data: 'meats'}
//                 ]
//             ]
//         }
//     })
// })

bot.launch();