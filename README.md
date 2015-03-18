# ZurBot


##A lil' bot for Plug.dj [WIP]


okay this bot is in an early development stage you can not use it at the moment. 
BUT you can participate to the development:
 - you can translate the bot from English to any other language 
 - you can correct my English (cause obviously it's not my mother tongue)
 - you can also help me to write functions for the bot BUT please contact me before, I'll answer if I need help
 
for any of this work you need to fork this project and when you've done you're changes just make a pull request 


###if you want to help to traduce the bot


the langs objects are in the "lang" directory you can create a new JSON object in this directory or you can modify an existing one

here is a detailed description for all variables:	
- **endInit:**
 - "$var0" = the bot version

- **ban:**
 - "$var0" = the user who used the command
 - "$var1" = the banned user
 - "$var2" = the ban time 

- **kick:**
 - "$var0" = the user who used the command 
 - "$var1" = the kicked user
 - "$var2" = the kick time

- **eta:**
 - "$var0" = the user who used the command
 - "$var1" = the time

- **link:**
 - "$var0" = the user who used the command
 - "$var1" = the link

- **move:**
 - "$var0" = the user who used the command
	
you can also correct any string which is not traduced in the .js file or this readme file if you find something wrong 


###if you want to help me to write some functions


read the source code if you find a comment which say:

```javascript
//junk line
```

it mean that I don't know how to write this line properly (so you can send a pull request with your alternatives)