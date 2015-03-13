function init() {
	document.getElementById("playback").removeChild(document.getElementById("playback-container"));
	if (document.querySelector("#chat-emoji-button .icon-emoji-on")) {
		$("#chat-emoji-button").click();
	}
	if (document.querySelector("#chat-sound-button .icon-chat-sound-on")) {
		$("#chat-sound-button").click();
	}
	API.sendChat("/cap 1");
	// affichage fin init
}

function printChat(txt) { // a corriger 
	for (var i = 0; i < arguments.lenght; i++) {
		txt = txt.split("@" + (i));
		txt[2] = txt[1];
		txt[1] = arguments[i + 1];
		txt = txt.join('');
	}
	API.sendChat(txt);
}

/*var BOTAPI.CHATCOMMAND = new CustomEvent(
		"Bot.chatCommand", {
		detail : {

			init()*/
