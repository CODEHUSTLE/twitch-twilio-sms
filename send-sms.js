require('dotenv').config();
const accountSid = process.env.TWILIO_ID;
const authToken = process.env.TWILIO_TOKEN;
const twilioClient = require('twilio')(accountSid, authToken);
const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: [process.env.CHANNEL_NAME],
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const chatMessage = msg.substr(4);
  const userName = context.username;
  const commandName = msg.substr(0, 4);
  console.log(chatMessage);
  // If the command is known, let's execute it
  if (commandName === '!sms') {
    const smsMsg = sendSMS(chatMessage, userName);
    client.say(target, `Your SMS "${chatMessage}" was sent to @CodeHustle!`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}
// Function called when the "dice" command is issued
function sendSMS(chatMessage, userName) {
  twilioClient.messages
    .create({
      body: `https://twitch.tv/${userName} sent: ${chatMessage}`,
      from: process.env.FROM,
      to: process.env.TO,
    })
    .then((message) => console.log(message.body));
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
