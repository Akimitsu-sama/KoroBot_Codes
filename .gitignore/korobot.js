const Discord = require('discord.js')
const bot = new Discord.Client()
var randum = 0
var mention = "@<414373849014992898>";
var prefix = "k!"
const library = 'discord.js'
anciennum = 1
function golog() {
    bot.login('I donot give you my token :D')
}
nombre = 1
bannedkorocomm = "370239167365513217"

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('korocomm.json')
const db = low(adapter);

db.defaults({ messages: []})
	.write()

function consolelog() {
    bot.on('ready', () => {
        console.log('Korobot : Version finale\nStatut : en developpement\nInformations complémentaires : Aucune.')
        bot.user.setGame(prefix + 'help => Korobot, développement étape 1')
    })
}
consolelog()
bot.on('ready', () => {
    console.log('Korobot : Version finale\nStatut : en dev\nInformation complépentaires : aucune.')
    bot.user.setGame(prefix + "help => Korobot est encore en dev !")
    bot.user.setGame("k!help || "+bot.guilds.size+" guilds, "+bot.users.size+" users")
    bot.user.setStatus('online')
})

bot.on('message', message => {
    if (message.content.startsWith("k!srvlist")) {
        var srvlist_embed = new Discord.RichEmbed()
            .addField("Serveurs", bot.guilds.size)
            .addField("Utilisateurs", bot.users.size)
            .addField("Channels", bot.channels.size)
            .addField("Ping", bot.ping+"ms")
        message.channel.sendEmbed(srvlist_embed)
    }
    if (message.content.startsWith("k!actusers")) {
        bot.user.setGame("k!help || "+bot.guilds.size+" guilds, "+bot.users.size+" users")
        message.reply("Utilisateurs actualisés ! Merci !")
    }
    if (message.content.startsWith("k!ban")) {
        if (message.guild) {
        if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
            if (message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
                var utoban = message.mentions.users.first()
                if (!utoban) {
                    var h_embed = new Discord.RichEmbed()
                        .setTitle("Aide : k!ban")
                        .setDescription("_ _")
                        .setThumbnail("https://i.imgur.com/O3DHIA5.gif")
                        .addField("Aide : k!ban", "Bannir un utilisateur du serveur.\nExemple : k!ban @Draco1544#8582\n\nRequiert la permission **BAN_MEMBERS**")
                    message.channel.sendEmbed(h_embed)
                } else {
                        if (message.guild.member(utoban).bannable) {
                            message.guild.member(utoban).ban()
                            message.reply("Cet utilisateur ("+utoban.tag+") a été banni avec succès.")
                        } else {
                            message.reply("Je ne peux pas bannir cet utilisateur.")
                    }
                }
            } else {
                message.reply("Il me faut la permission __**BAN_MEMBERS**__ pour faire cela.")
            }
        } else {
            message.reply("Il te faut la permission __**BAN_MEMBERS**__ pour faire cela.")
        }
    }
}
})

bot.on('message', msg => {

    var command = msg.content
    if(command.startsWith("k!serverinfo")) {
        var sowner = msg.guild.owner.user.username
        var otag = msg.guild.owner.user.discriminator
        var server_embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag)
        .setImage(msg.guild.iconURL)
        .setTitle(msg.guild.name)
        .setDescription("Informations du serveur " + msg.guild.name)
        .addField("nombre de membres", msg.guild.memberCount)
        .addField("nombre de channels", msg.guild.channels.size)
        .addField("nombre de rôles", msg.guild.roles.size)
        .addField("Fondateur", sowner + '#' + otag)
        .addField("Region", msg.guild.region)
        .addField("Nombre de roles", msg.guild.roles.size)
        .addField("_ _", "Icone du serveur")
        .setFooter("KoroBot", msg.author.avatarURL)
        msg.channel.send(server_embed)
      }

})

bot.on('message', message => {
    if (message.content.startsWith("k!getavatar")) {
        if(!message.mentions.users.first()) {
            message.channel.send("Voici votre avatar : " + message.author.avatarURL)
        }
        if (message.mentions.users.first()) {
            var member = message.mentions.users.first();
            message.channel.send("Voici l'avatar de " + member.tag + " : " + member.avatarURL)
        }
    }
})

bot.on('message', message => {
    if(message.content.startsWith("k!userinfo")) {
      var memberavatar = message.author.avatarURL
      var membername = message.author.username
         var mentionned = message.mentions.users.first();
        var getvalueof;
        if(mentionned){
            var getvalueof = mentionned;
        } else {
            var getvalueof = message.author;
        }
    
        if(getvalueof.bot == true){
            checkbot = "L'utilisateur est un bot :robot:";
        } else {
            checkbot = "N'est pas un bot :no_entry: :robot:";
        }
        if(getvalueof.presence.status == 'online'){
          status = "En ligne"; 
        } else if (getvalueof.presence.status = 'dnd') {
          status = "Ne pas déranger"
          } else if (getvalueof.presence.status = 'idle') {
            status = "Inactif"
          } else if (getvalueof.presence.status = 'invisible') {
            status = "Offline"
          }
    
      message.channel.sendMessage({
          embed: {
            type: 'rich',
            description: '',
            fields: [{
              name: 'Pseudo',
              value: getvalueof.username,
              inline: false
            }, {
              name: 'User id',
              value: getvalueof.id,
              inline: false
            },{
              name: '#',
              value: getvalueof.discriminator,
              inline: false
    },{
              name: 'Status',
              value: status,
              inline: false
    },{
              name: 'Bot',
              value: checkbot,
              inline: false
    }],
          image: {
        url: getvalueof.avatarURL
          },
            color: 0xE46525,
            footer: {
              text: 'KoroBot',
              proxy_icon_url: ' '
            },
    
            author: {
              name: membername,
              icon_url: memberavatar,
              proxy_icon_url: ' '
            }
          }
    })
    }	
    })

bot.on('message', message => {
    if (message.content.startsWith('k!typing')) {
        if (!message.mentions.users.first()) {
            istyping = message.author
        } else {
            istyping = message.mentions.users.first()
        }
        message.channel.send("<a:typing:393848431413559296> "+istyping.username+" is typing...")
    }
})

bot.on('message', msg => {
    if (msg.content.includes("@everyone")) {
        msg.react("420936290322743296")
    }
})

bot.on('message', message => {
    if (message.content.startsWith('k!cchar')) {
        let contenttoconvert = message.content.substr(7)
        if (contenttoconvert){
        var ctclenght = contenttoconvert.length
        message.channel.send('Votre message fait'+ctclenght+' caracteres.')
        }
    }
})

bot.on('message', message => {
  if (message.content === prefix+ 'ping') {
    console.log("PING")
    message.channel.send('Ping du bot : **'+bot.ping+"ms**")
  }
})
 // J'aimerai que ca marche

bot.on('message', message => {
   if (message.content === prefix + 'ocestand') {
   message.channel.send("1 AN D'AMOUR ENTRE EUX :heart:")
   }
}) 

bot.on('message', message => {
  if (message.content.startsWith(prefix + '8ball')) {

	random()

	if (randum == 0){
                  message.channel.send(":8ball: **Désolé. Je te quitte.**")

 	}

	if (randum == 1){
		message.channel.send(":8ball: **La réponse est claire : Non.**");

	}

	if (randum == 2){
		message.channel.send(":8ball: **Absolument.**");

	}

	if (randum == 3){
		message.channel.send(":8ball: **Je ne suis pas sur.**");

	}

	if (randum == 4){
		message.channel.send(":8ball: **T'es con ! On se connait a peine !**");

	}

	if (randum == 5){
		message.channel.send(":8ball: **Boarf.**");

    }
    
    if (randum == 6){
        var lama_embed = new Discord.RichEmbed()
            .setImage("https://img.20mn.fr/PI3Ol7lgRlGAs1BMQCgmEw/310x190_lama-rentre-game")
        message.channel.sendEmbed(lama_embed)
    }

    if (randum == 7){
        var jamy_embed = new Discord.RichEmbed()
            .setImage("http://www.programme.tv/media/cache/relative_max_355x272/upload/epgs/2015/05/c-est-pas-sorcier_12644491_1.jpg")
        message.channel.sendEmbed(jamy_embed)
    }

    if (randum == 8){
        var ah_embed = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/440582778770423818/440817628668231681/com.png")
        message.channel.sendEmbed(ah_embed)
    }

   }
   

   if (message.content.startsWith("korocomm!normal")) {
    if (message.author.id == "304541381798658048" || message.author.id == "312861112909561856") {
        if (message.content.includes("@everyone") || message.content.includes("@here")) return;
        if (!message.content.substr("korocomm!normal ".length)) return;
        var value = message.content.substr("korocomm!normal ".length)
        var number = db.get('messages').map('id').value();
     
     db.get('messages')
	.push({ id: nombre + 1, message : value, envoyepar : message.author.tag})
	.write();

        message.delete()
        bot.channels.findAll('name', 'korommunication').map(channel => channel.send("Message par "+message.author.tag+" : "+message.content.substr("korocomm!normal ".length)))
    }
   }
    if (message.channel.name == "korommunication") {
        if (message.content.startsWith("korocomm!normal")) return;
        if (message.author.id == bannedkorocomm) return;
        let aenvoyer = message.content
        if (message.author.bot) return;
        if (message.content.startsWith("korom!normal")) return;
        var value = message.content
        var number = db.get('messages').map('id').value();
     
     db.get('messages')
	.push({ id: nombre + 1, message : value, envoyepar : message.author.tag})
	.write();

        if (message.author.id == "370593040706043905" || message.author.id == "304000871077773312" || message.author.id == "269916752564060170") {
            if (!aenvoyer) return;
            message.delete()
            var chatm_embed = new Discord.RichEmbed()
                .setColor("#000BE1")
                .addField("Par", message.author.tag+" (Staff Korommunication)")
                .addField("Message", aenvoyer)
                .setFooter(message.guild.name, message.guild.iconURL)
            bot.channels.findAll('name', 'korommunication').map(channel => channel.sendEmbed(chatm_embed))
        } else if (message.author.id == "304541381798658048" || message.author.id == "312861112909561856") {
            if (!aenvoyer) return;
            message.delete()
            var chatf_embed = new Discord.RichEmbed()
                .setColor("#FE0101")
                .addField("Par", message.author.tag+" (Fonda Korommunication)")
                .addField("Message", aenvoyer)
                .setFooter(message.guild.name, message.guild.iconURL)
            bot.channels.findAll('name', 'korommunication').map(channel => channel.sendEmbed(chatf_embed))
        } else {
        if (!aenvoyer) return;
        message.delete()
        var chat_embed = new Discord.RichEmbed()
            .addField("Par", message.author.tag)
            .addField("Message", aenvoyer)
            .setFooter(message.guild.name, message.guild.iconURL)
        bot.channels.findAll('name', 'korommunication').map(channel => channel.sendEmbed(chat_embed))
        }
    }
})

bot.on('message', message => {

    if (message.content.startsWith("k!suggest")) {
        let suggestion = message.content.substr(10)
        if (!suggestion) {
            message.react("❌")
            message.reply("merci de mettre une suggestion.")
        } else {
            message.react("✅")
            var sugg_embed = new Discord.RichEmbed()
                .setTitle("Nouvelle suggestion")
                .setDescription("Par "+message.author.tag)
                .setThumbnail(message.author.avatarURL)
                .addField("Suggestion : ", suggestion)
                .setFooter("Serveur : "+message.guild.name, message.guild.iconURL)
            bot.channels.find('id', '433911399425638400').sendEmbed(sugg_embed)
            .then(function (message) {
                message.react("❌")
                message.react("✅")
            })
        }
    }
})

bot.on('message', message => {
	if (message.content.startsWith(prefix + "invite")){
message.channel.send("", {    
            embed: {
                color: 0xff6a6a, 
                author:  message.author.name,
                title: '', 
                description: '', 
                fields: [
                    {
                        name: '**Lien pour ajouter KoroBot**',
                        value: '__[KoroBot](https://discordapp.com/api/oauth2/authorize?client_id=414373849014992898&permissions=8&scope=bot)__',
                        inline: true
                   },{
                        name: '**Lien pour Rejoindre le serv de support**',
                        value: '__[Support](https://discord.gg/b7GaS2m)__',
                        inline: true
                   }],                     
                                   footer: {
            text: 'Embed par NewGlace',
          },
            }
        });
    };

})

bot.on('message', message => {
  if (message.content === prefix + 'dev') {
     var dev_embed = new Discord.RichEmbed()
             .setColor('#2DDCC5')
             .addField("Des soutiens ?", "Mon développeur est Mister_KoRo#0912, allez lui dire bonjour en MP ca lui fera plaisir !")
             .setFooter("KoroBot, Mister_KoRo#0912")
     message.channel.sendEmbed(dev_embed)
   // message.reply("Mon developpeur est Mister_KoRo#0912, allez lui dire bonjour en MP ca lui fera plaisir ! Twitter : http://twitter.com/mister_koro  (un petit follow ferait plaisir :D) YouTube : http://bit.ly/KoroSurYouTube (on te remerciras si tu t'abonnes.)")
  }
})

bot.on('message', message => {
	if (message.content === prefix + 'help') {
		var help_embed = new Discord.RichEmbed()
		.setColor('#2DDCC5')
		.addField(":pushpin: Utilitaires", "_ _")
		.addField("k!pub", "Affiche la liste des publicités")
		.addField("k!invite", "Envoie le lien d'invitation du bot et au support")
		.addField("k!dev", "Qui est mon développeur ?")
        .addField("k!help", "Vous envoie ce menu")
        .addField("k!userinfo @user", "envoie les informations sur l'utilisateur mentionné")
        .addField("k!suggest [suggestion]", "envoyer une suggestion au créateur du bot")
        .addField("Korommunication", "Intercommunication entre différents serveurs. Créez le channel Korommunication avant.")
        .addField("k!cchar [message]", "calculer le nombre de caractères dans votre message.")
        .addField("k!serverinfo", "envoie des informations sur le serveur")
        .addField("k!typing @user", "faire comme si un utilisateur était en train d'écrire")
        .addField("k!actusers", "actualiser les utilisateurs du bot")
		.addField("_ _", "_ _")
		.addField(":game_die: Fun", "_ _")
		.addField("k!8ball", "Faites k!8ball <question> et le bot vous répond !")
		.addField("_ _", "_ _")
		.addField(":gear: Modération", "_ _")
		.addField("k!ban @utilisateur", "bannir une personne du serveur")
		.setFooter("KoroBot, 2018")
	message.channel.sendEmbed(help_embed)
	}
})

bot.on('message', message => {
       if (message.content === prefix + "chanson") {
	       message.channel.send(":notes: Sur notre bonne vieille planette terre")
	       message.channel.send(":notes: Posez une fleur géante a tokyo")
	       message.channel.send(":notes: Posez en une autre dans la région du Sishuan")
	       message.channel.send(":notes: De Dubai à Hawai volez au dessus des nuages en laissant une trainée derrière vous")
	       message.channel.send(":notes: De Hawai à Dubai faites les chemin inverse en survolant les Philipines (C'est pas fini !)")
	       message.channel.send(":notes: De Dubai a Hawai faites un axe nord sud tous les 25 ° de longitude")
	       message.channel.send(":notes: Et sous vos yeux hébaïs")
	       message.channel.send(":notes: Le visage jovial")
	       message.channel.send("Du professeur")
	       message.channel.send("KOROOOO !")
	       message.channel.send("Bien ! Maintenant, faites le pour de vrai.")
       }
})

bot.on('message', message => {
  if (message.content === prefix+ 'ping') {
    console.log("PING")
    message.channel.send(':alarm_clock: ping effectué avec succes :tada:')
  }
})


bot.on('message', message => {
   if (message.content === prefix + 'ocestand') {
   message.channel.send("1 AN D'AMOUR ENTRE EUX :heart:")
   }
}) 

bot.on('message', message => {
  if (message.content.startsWith(mention + '8ball')) {

	random()

	if (randum == 0){
                  message.channel.send(":8ball: **Désolé. Je te quitte.**")

 	}

	if (randum == 1){
		message.channel.send(":8ball: **La réponse est claire : Non.**");

	}

	if (randum == 2){
		message.channel.send(":8ball: **Absolument.**");

	}

	if (randum == 3){
		message.channel.send(":8ball: **Je ne suis pas sur.**");

	}

	if (randum == 4){
		message.channel.send(":8ball: **T'es con ! On se connait a peine !**");

	}

	if (randum == 5){
		message.channel.send(":8ball: **Boarf.**");

	}

   }

})

bot.on('message', message => {
        if (message.content.startsWith("k!clear")) {
            let ctouse = message.content.substr(8)
                let numbere = message.content.substr(8)
                if (numbere < 100) {
                    message.channel.bulkDelete(numbere)
                } else {
                    message.reply("le nombre se doit d'être plus petit que 100.")
                }

    }
})

bot.on('message', message => {
	if (message.content.startsWith(mention + "invite")){
message.channel.send("", {    
            embed: {
                color: 0xff6a6a, 
                author:  message.author.name,
                title: '', 
                description: '', 
                fields: [
                    {
                        name: '**Lien pour ajouter KoroBot**',
                        value: '__[KoroBot](https://discordapp.com/api/oauth2/authorize?client_id=414373849014992898&permissions=8&scope=bot)__',
                        inline: false
                   },{
                        name: '**Lien pour Rejoindre le serv de support**',
                        value: '__[Support](https://discord.gg/b7GaS2m)__',
                        inline: false
                   }],                     
                                   footer: {
            text: 'Embed par NewGlace',
          },
            }
        });
    };

})

bot.on('message', message => {
  if (message.content === mention + 'dev') {
     var dev_embed = new Discord.RichEmbed()
             .setColor('#2DDCC5')
             .addField("Des soutiens ?", "Mes developpeurs sont NewGlace#6717 et ๖̶̶̶ۣۣۜۜ͜ζ͜͡Koro fait des bots#0912, allez leur dire bonjour en MP ca lui fera plaisir !")
             .setFooter("KoroBot, ๖̶̶̶ۣۣۜۜ͜ζ͜͡Koro fait des bots#0912")
     message.channel.sendEmbed(dev_embed)
   // message.reply("Mon developpeur est Mister_KoRo#0912, allez lui dire bonjour en MP ca lui fera plaisir ! Twitter : http://twitter.com/mister_koro  (un petit follow ferait plaisir :D) YouTube : http://bit.ly/KoroSurYouTube (on te remerciras si tu t'abonnes.)")
  }
})

bot.on('message', message => {
	if (message.content === mention + 'pub') {
		var pub_embed = new Discord.RichEmbed()
		.setColor('#2DDCC5')
		.addField("Pub déposée par -Ganou18-", "https://discord.gg/dyAxygF")
		.addField("Pub déposée par [AzOxE-Team] ZroxYT", "https://discord.gg/2Ur5YET")
		.addField("Pub déposée par Ninoyoshi", "https://discord.gg/VXPKsXX")
		.addField("Pub déposée par Konoa-Chan", "https://discord.gg/vSAKjxX")
		.addField("Pub déposée par MouMou73", "https://discord.gg/JzngfYY")
		.addField("Pub déposée par Standardiste", "https://discord.gg/S6rK5K")
		.addField("Pub déposée par standu14", "Voilà un serveur ou le thème principal est la voiture ! https://discord.gg/ks4n546")
		.setFooter("Vous aussi vous voulez avoir votre pub dans le k!pub ? Fais k!dev et contacte mon développeur !")
	message.channel.sendEmbed(pub_embed)
	}
})

bot.on('message', message => {
	if (message.content === mention + 'help') {
		var help_embed = new Discord.RichEmbed()
		.setColor('#2DDCC5')
		.addField(":pushpin: Utilitaires", "_ _")
		.addField("k!pub", "Affiche la liste des publicités")
		.addField("k!invite", "Envoie le lien d'invitation du bot et au support")
		.addField("k!dev", "Qui est mon développeur ?")
		.addField("k!help", "Vous envoie ce menu")
		.addField("_ _", "_ _")
		.addField(":game_die: Fun", "_ _")
		.addField("k!8ball", "Faites k!8ball <question> et le bot vous répond !")
		.addField("_ _", "_ _")
		.addField(":gear: Modération", "_ _")
		.addField("Désolé...", "Toutes ces commandes sont en développement")
		.setFooter("KoroBot, 2018")
	message.channel.sendEmbed(help_embed)
	}
})

bot.on('message', message => {
       if (message.content === mention + "chanson") {
	       message.channel.send(":notes: Sur notre bonne vieille planette terre")
	       message.channel.send(":notes: Posez une fleur géante a tokyo")
	       message.channel.send(":notes: Posez en une autre dans la région du Sishuan")
	       message.channel.send(":notes: De Dubai à Hawai volez au dessus des nuages en laissant une trainée derrière vous")
	       message.channel.send(":notes: De Hawai à Dubai faites les chemin inverse en survolant les Philipines (C'est pas fini !)")
	       message.channel.send(":notes: De Dubai a Hawai faites un axe nord sud tous les 25 ° de longitude")
	       message.channel.send(":notes: Et sous vos yeux hébaïs")
	       message.channel.send(":notes: Le visage jovial")
	       message.channel.send("Du professeur")
	       message.channel.send("KOROOOO !")
	       message.channel.send("Bien ! Maintenant, faites le pour de vrai.")
       }
})

golog()

function random(min, max) {
   min = Math.ceil(0);
   max = Math.floor(8);
   randum = Math.floor(Math.random() * (max - min +1) + min);
   if (randum == anciennum) {
       console.log("random = ancinnum")
       random()
   }
   anciennum = randum
}

