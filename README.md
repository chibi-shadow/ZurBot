# ZurBot


##A lil' bot for Plug.dj [WIP]


Okay, so this bot is in an early development stage, you can not use it at the moment. 
But YOU can participate to the development:
 - you can translate the bot from English to any other language 
 - you can correct my English (cause obviously it's not my main language)
 - you can also help me to write functions for the bot BUT please contact me if you want to, I'll tell you if I need help
 
To work on this project with me you need to fork it and when you're done with your work just make a pull request.


###If you want to help to traduce the bot


The langs objects (languages files) are in the "lang" directory, you can create a new JSON object in this directory or you can modify an existing one.

Here is a detailed description for all the variables:	
- **endInit:**
 - "$var0" = bot version

- **ban:**
 - "$var0" = user who used the command
 - "$var1" = banned user
 - "$var2" = ban time

- **kick:**
 - "$var0" = user who used the command 
 - "$var1" = kicked user
 - "$var2" = kick time

- **eta:**
 - "$var0" = user who used the command
 - "$var1" = time remaining before becomming DJ

- **link:**
 - "$var0" = user who used the command
 - "$var1" = link of the current song

- **move:**
 - "$var0" = user who used the command
	
You can also correct anything which is not correctly translated in the .js file or this readme. 


###If you want to help me write some functions, read the source code, and if you find a comment which say:

```javascript
//junk line
```

it means that I don't know how to write this line properly (so you can send a pull request with your alternatives).
