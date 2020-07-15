### Twitch Twilio SMS

- Sends message to Twilio developer phone number vi Twitch chat bot

Add .env file to root for API secrets

```
BOT_USERNAME= (The account (username) that the chatbot uses to send chat messages. This can be your Twitch account. Alternately, many developers choose to create a second Twitch account for their bot, so it's clear from whom the messages originate.)

OAUTH_TOKEN= (The token to authenticate your chatbot with Twitch's servers. Generate this with https://twitchapps.com/tmi/ (a Twitch community-driven wrapper around the Twitch API), while logged in to your chatbot account. The token will be an alphanumeric string.)

CHANNEL_NAME= (The Twitch channel name where you want to run the bot. Usually this is your main Twitch account.)

TWILIO_TOKEN= (Token is from Twilio console after account creation and phone number selection.)

TWILIO_ID= (Account ID from Twilio console)

TO= (Assigned or selected Twilio phone number)

FROM= (Registered and validated phone number with Twilio. Typically your mobile number.)
```
