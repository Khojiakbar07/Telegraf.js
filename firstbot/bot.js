const Telegraf = require('telegraf');
// const { Telegraf, Markup } = require("telegraf");
const axios = require('axios');

const bot = new Telegraf('6166401028:AAGBREk2CJ-5XtSFOf2jaT9wRQT9eATTIJ4');

bot.command('start', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id,"Welcome "  + ctx.from.first_name +  " this bot gives you  about our Vender project.",
    {
        reply_markup:{
          inline_keyboard: [
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

bot.action('start', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, 'Main Menu',{
        reply_markup:{
            inline_keyboard: [
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
            ]
        }
    })
})

bot.action('orders', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, '😔 Sorry, you have not orders',
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '⬅️ Back to menu', callback_data: 'start'}
                ]
            ]
        }
    })
})

bot.action('Settings', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Settings',{
        reply_markup:{
            inline_keyboard: [
                [
                    { text: 'Languages', callback_data: 'languages'} 
                ],
                [
                    { text: '⬅️ Back to menu', callback_data: 'start'} 
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.action('languages', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Please choose one language',{
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '🇺🇿Uzbek', callback_data: 'uzbek'} 
                ],
                [
                    { text: '🇷🇺Russian', callback_data: 'russian'} 
                ],
                [
                    { text: '🇬🇧English', callback_data: 'english'} 
                ],
                [
                    { text: '⬅️ Back to menu', callback_data: 'start'} 
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
            inline_keyboard: [
                [
                    { text: '⬅️ Back to menu', callback_data: 'start'}
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.action('about', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, '💻 Connect to Vender group\n📲Hojiakbar: +998909452540 \n 🌐 e-mail: @UzSoftic',
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '⬅️ Back to menu', callback_data: 'start'}
                ]
            ]
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
//})


bot.on("sticker", (ctx)=> {
    ctx.reply("Please Don't send me a stiker")
})




bot.launch();