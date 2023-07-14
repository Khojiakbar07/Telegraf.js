const Telegraf = require('telegraf');
// const { Telegraf, Markup } = require("telegraf");
const axios = require('axios');

const bot = new Telegraf('6166401028:AAGBREk2CJ-5XtSFOf2jaT9wRQT9eATTIJ4');
/* English */
bot.command('start', ctx =>{
    // ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, ctx.from.first_name +  
    " Please choose one language",
    {
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
//////////////////
bot.command('contract', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, 'Если вы хотите сотрудничать с нами!\n📲 Kamoliddin: +998(95) 000-04-09 \n 🌐 Telegram: @Uzsoftic',
    {
        // reply_markup:{
        //     inline_keyboard: [
        //         [
        //             { text: '⬅️ Вернуться в меню', callback_data: 'russian'}
        //         ]
        //     ]
        // }
    })
})

bot.command('site', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id," Вы можете узнать о нас с помощью этого бота",{
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '🛍 Войти на сайт', url: 'https://vender.gougo.uz/'}
                ],
            ]
        }
    })
})

bot.command('settings', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "Настройки",
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: 'Изменить язык', callback_data: 'язык'} 
                ],
                [
                    { text: '⬅️ Вернуться в меню', callback_data: 'russian'} 
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.command('help', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, 'Если у вас есть какие-либо проблемы, пожалуйста, свяжитесь с нами.\n💻 Вступайте в группу поставщиков\n📲 Hojiakbar: +998909452540 \n 🌐 Telegram: @hojiakbar_zokirovv',
    {
        // reply_markup:{
        //     inline_keyboard: [
        //         [
        //             { text: '⬅️ Вернуться в меню', callback_data: 'russian'}
        //         ]
        //     ]
        // }
    })
})

bot.command('orders', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "😔 Извините, у вас нет заказов",
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '⬅️ Вернуться в меню', callback_data: 'russian'}
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.command('contact', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, 'Если у вас есть какие-либо проблемы, пожалуйста, свяжитесь с нами.\n💻 Вступайте в группу поставщиков\n📲 Hojiakbar: +998909452540 \n 🌐 Telegram: @hojiakbar_zokirovv',
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '⬅️ Вернуться в меню', callback_data: 'russian'}
                ]
            ]
        }
    })
})

//////////////////////////////////////////

// Main Menu

bot.action('start', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id,"Welcome "  + ctx.from.first_name +  
    " this bot gives you  about our Vender project.",{
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

bot.action('english', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id,"Welcome "  + ctx.from.first_name +  
    " this bot gives you  about our Vender project.",{
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
    // ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, '💻 Connect to Vender group\n📲Hojiakbar: +998909452540 \n 🌐 Telegram: @hojiakbar_zokirovv',
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
/* English */

/*uzbek*/ 
bot.action('uzbek', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id,"Xush kelibsiz "  + ctx.from.first_name +  " bu bot bilan biz haqimizda bilib olishingiz mumkin",{
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '🛍 Saytga kirish', url: 'https://vender.gougo.uz/'}
                ],
                [
                  { text: '📋 Buyurtmalar', callback_data: 'buyurtma'},
                  { text: '⚙️ Sozlamalar', callback_data: 'Sozlamalar'}
                ],
                [
                  { text: '✍️ Fikr qoldiring', callback_data: 'fikr'},
                  { text: 'ℹ️ Biz haqimizda', callback_data: 'haqimizda'}
                ],
            ]
        }
    })
})

bot.action('buyurtma', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "😔 Kechirasiz, sizda buyurtma yo'q",
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '⬅️ Menuga qaytish', callback_data: 'uzbek'}
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.action('Sozlamalar', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "Sozlamalar",
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: 'Tilni o`zgartirish', callback_data: 'til'} 
                ],
                [
                    { text: '⬅️ Menuga qaytish', callback_data: 'uzbek'} 
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.action('til', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "Iltimos, bitta tilni tanlang",
    {
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
                    { text: '⬅️ Menuga qaytish', callback_data: 'uzbek'} 
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.action('fikr', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "Fikringizni qoldirin.Bu biz uchun muhim.",
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '⬅️ Menuga qaytish', callback_data: 'uzbek'}
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.action('haqimizda', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, '💻 Vender guruhiga ulaning\n📲Hojiakbar: +998909452540 \n 🌐 Telegram: @hojiakbar_zokirovv',
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '⬅️ Menuga qaytish', callback_data: 'uzbek'}
                ]
            ]
        }
    })
})

/*Uzbek*/ 

/*Russian */

bot.action('russian', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id,"Добро пожаловать " + ctx.from.first_name + " вы можете узнать о нас с помощью этого бота",{
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '🛍 Войти на сайт', url: 'https://vender.gougo.uz/'}
                ],
                [
                  { text: '📋 Заказы', callback_data: 'Заказы'},
                  { text: '⚙️ Настройки', callback_data: 'Настройки'}
                ],
                [
                  { text: '✍️ Оставить отзыв', callback_data: 'отзыв'},
                  { text: 'ℹ️ О нас', callback_data: 'нас'}
                ],
            ]
        }
    })
})

bot.action('Заказы', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "😔 Извините, у вас нет заказов",
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '⬅️ Вернуться в меню', callback_data: 'russian'}
                ]
            ],
            resize_keyboard:true
        }
    })
})
// Пожалуйста, выберите один язык
bot.action('Настройки', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "Настройки",
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: 'Изменить язык', callback_data: 'язык'} 
                ],
                [
                    { text: '⬅️ Вернуться в меню', callback_data: 'russian'} 
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.action('язык', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "Пожалуйста, выберите один язык",
    {
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
                    { text: '⬅️ Вернуться в меню', callback_data: 'russian'} 
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.action('отзыв', ctx =>{
    ctx.deleteMessage();
    bot.telegram.sendMessage
    (ctx.chat.id, "Оставьте свой отзыв, это важно для нас.",
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '⬅️ Вернуться в меню', callback_data: 'russian'}
                ]
            ],
            resize_keyboard:true
        }
    })
})

bot.action('нас', ctx =>{
    // ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, '💻 Вступайте в группу поставщиков\n📲 Hojiakbar: +998909452540 \n 🌐 Telegram: @hojiakbar_zokirovv',
    {
        reply_markup:{
            inline_keyboard: [
                [
                    { text: '⬅️ Вернуться в меню', callback_data: 'russian'}
                ]
            ]
        }
    })
})

/*Russian */




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