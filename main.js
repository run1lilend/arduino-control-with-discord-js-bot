const { Client, GatewayIntentBits } = require('discord.js');
const { SerialPort } = require('serialport')
require('dotenv').config()

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const readyl = false

const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
  })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
    if (msg.content=="Blue LED Light ON"){// blue led on
        msg.reply("BLUE LED is On!")
        port.write('blueledon')
    }
    if (msg.content=="Blue LED Light OFF"){// blue led off  
      msg.reply("BLUE LED is Off!")
      port.write('blueledoff')
    }

    if (msg.content=="Red LED Light ON"){// blue led on
      msg.reply("RED LED is On!")
      port.write('redledon')
    }
    if (msg.content=="Red LED Light OFF"){// blue led off  
    msg.reply("RED LED is Off!")
    port.write('redledoff')
    }

    if (msg.content=="Green LED Light ON"){// green led on
      msg.reply("GREEN LED is On!")
      port.write('greenledon')
    }
    if (msg.content=="Green LED Light OFF"){// green led off  
    msg.reply("GREEN LED is Off!")
    port.write('greenledoff')
    }

    if (msg.content=="Yellow LED Light ON"){// yellow led on
      msg.reply("YELLOW LED is On!")
      port.write('yellowledon')
    }
    if (msg.content=="Yellow LED Light OFF"){// yellow led off  
    msg.reply("YELLOW LED is Off!")
    port.write('yellowledoff')
    }
})

client.login(process.env.TOKEN) //by lilend