require("dotenv").config();
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);
function readyDiscord() {
    console.log('THE BOT IS ALIVEEEEE!!!!!');
}

client.on('message', gotMessage);
function gotMessage(msg) {
    if(msg.channel.id === '798063184446750725' && msg.content === 'u gay') {
        msg.channel.send('no u 🐧');
    }
}


const insult = [
    'I would say your aim is cancer, but cancer actully kills.',
    'Storm Troopers have better aim than you.',
    'All you do is instalock and die.',
    'I would ask you to leave the game, but I doubt you can click the X with that aim',
    'you have nothing else than these 3 lines in your memory card',
    'I envy people who have never met you.',
    'Maybe if you eat all that makeup you will be beautiful on the inside.',
    'You are kinda like Rapunzel except instead of letting down your hair, you let down everyone in your life.',
    'You are impossible to underestimate.',
    'You are not the dumbest person on the planet, but you sure better hope he doesn’t die.',
    'Fuck you'
];
client.on('message', insults);
function insults(msg) {
    if(msg.channel.id === '798075685658689556' && msg.content === '!insultme') {
        const index = Math.floor(Math.random() * insult.length);
        msg.reply(insult[index]);
    }
}

client.on('message', giiff);
async function giiff(msg) {
    if(msg.content === '!gif') {
        msg.channel.send('GIFFF');
        let url = `https://api.tenor.com/v1/search?q=valorant&key=${process.env.TENORKEY}&limit=8`
        let response = await fetch(url);
        let json = await response.json();
        let index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
    }
}