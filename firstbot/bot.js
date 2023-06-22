const Telegraf = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('6043684472:AAFJISpYKpsBk67-4q9Gjm6GHxjTO50h7aw');







// //        /start
// bot.start((ctx) => {
//     ctx.reply(ctx.from.first_name + " you have entered start commandl " + 
//     ctx.updateSubTypes[0]);
//     // console.log(ctx);
//     console.log(ctx.from);
//     console.log(ctx.chat);
//     console.log(ctx.message);
//     console.log(ctx.updateSubTypes);
// })

// bot.settings((ctx) =>{
//     ctx.reply("you have entered settings command");
// })

// bot.on("sticker", (ctx)=> {
//     ctx.reply("Please Don't send me a stiker")
// })

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
// bot.action('fruits', ctx =>{
//     ctx.deleteMessage();
//     bot.telegram.sendMessage
//     (ctx.chat.id, 'List of fruits:\n-Apples\n-Oranges\n-Pears',
//     {
//         reply_markup:{
//             inline_keyboard: [
//                 [
//                     { text: 'Back to menu', callback_data: 'menu'}
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