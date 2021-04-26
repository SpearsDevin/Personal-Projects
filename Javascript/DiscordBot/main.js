const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

var fs = require('fs');

client.once('ready', () => {
    console.log('Riddle Bot is Online!');
});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();
    
    if(command === 'riddle'){
        message.channel.send("@everyone");
        var files = fs.readdirSync('C:/Users/devin/Downloads/Coding/Projects/Javascript/DiscordBot/random/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());
        const myConsole = new console.Console(fs.createWriteStream('C:/Users/devin/Downloads/Coding/Projects/Javascript/DiscordBot/logs/outputriddle.txt'));
        myConsole.log(chosen.toString());

    } else if (command == 'theoffice'){
        message.channel.send("@everyone");
        var files = fs.readdirSync('C:/Users/devin/Downloads/Coding/Projects/Javascript/DiscordBot/TheOffice/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());
        const myConsole = new console.Console(fs.createWriteStream('C:/Users/devin/Downloads/Coding/Projects/Javascript/DiscordBot/logs/outputTheOffice.txt'));
        myConsole.log(chosen.toString());

    } else if (command == 'parksnrec'){
        message.channel.send("@everyone");
        var files = fs.readdirSync('C:/Users/devin/Downloads/Coding/Projects/Javascript/DiscordBot/ParksnRec/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());
        const myConsole = new console.Console(fs.createWriteStream('C:/Users/devin/Downloads/Coding/Projects/Javascript/DiscordBot/logs/outputParksnRec.txt'));
        myConsole.log(chosen.toString());

    }
});

client.login('');


/* 
cd Javascript
cd Discordbot
node .
*/
