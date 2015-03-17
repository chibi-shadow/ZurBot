function init() {
	document.getElementById("playback").removeChild(document.getElementById("playback-container"));
	if (document.querySelector("#chat-emoji-button .icon-emoji-on")) {
		$("#chat-emoji-button").click();
	}
	if (document.querySelector("#chat-sound-button .icon-chat-sound-on")) {
		$("#chat-sound-button").click();
	}
	API.sendChat("/cap 1");
	$.getJSON('https://github-raw-cors-proxy.herokuapp.com/zurbo/ZurBot/master/defaultSettings/settings.json', function(data){v=data.version;});
	$.getJSON('https://github-raw-cors-proxy.herokuapp.com/zurbo/ZurBot/master/lang/en.json', function(data){printChat(data.endInit,v);});
}

function printChat(txt) {
	for (var i = arguments.length - 2; i >= 0; i--) {
		txt = txt.split("%" + i);
		txt[0] = txt[0] + arguments[i + 1];
		txt = txt.join('');
	}
	API.sendChat(txt);
}

/*var BOTAPI.CHATCOMMAND = new CustomEvent(
"Bot.chatCommand", {
detail : {
init()*/
