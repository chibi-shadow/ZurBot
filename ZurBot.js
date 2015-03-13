function init() {
	document.getElementById("playback").removeChild(document.getElementById("playback-container"));
	if (document.querySelector("#chat-emoji-button .icon-emoji-on")){
		$("#chat-emoji-button").click();
	}
	if (document.querySelector("#chat-sound-button .icon-chat-sound-on")) {
		$("#chat-sound-button").click();
	}
	API.sendChat("/cap 1")
	// affichage fin init
}

var nomEvenement = new CustomEvent( 
	"Bot.chatCommand",
	{
		detail: {
			

init()