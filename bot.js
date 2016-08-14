var Discord = require("discord.js");

var bot = new Discord.Client();
var random = [
	"Hi",
	"I am a bot, hello",
	"Why would I talk with you?",
];


/*bot.on("ready", function() {
	if(userProfile.status === "online") {
		
	}
});*/

bot.on("ready", function() {
	console.log("Bot online and Ready to use! c:");
});

bot.on("message", function(message) {
    var input = message.content.toUpperCase();
	if(input === "HI") {
        bot.reply(message, "Hey there! :wave: :3")
    }
	if(input === "!PING") {
		bot.sendMessage(message, "Pong! :ping_pong:")
	}
	
	if(input === "!DANK") {
		bot.sendFile(message, "http://i2.kym-cdn.com/photos/images/original/001/102/474/a6c.jpeg");
		bot.reply(message, "DAMN SON!");
	}
	if(input == "!" + "random") {
		bot.reply(message, "" + random1[Math.floor(Math.random() * random1.length)]);
	}
});

bot.loginWithToken("MjExODc4ODU0MTgzMDkyMjI0.Co_24g.baExr85HC_RkuWI_robu2ePrFWk");