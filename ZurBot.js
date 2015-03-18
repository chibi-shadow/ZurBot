function init() {
	document.getElementById("playback").removeChild(document.getElementById("playback-container"));
	if (document.querySelector("#chat-emoji-button .icon-emoji-on")) {
		$("#chat-emoji-button").click();
	}
	if (document.querySelector("#chat-sound-button .icon-chat-sound-on")) {
		$("#chat-sound-button").click();
	}
	API.sendChat("/cap 1");
	$.getJSON('https://github-raw-cors-proxy.herokuapp.com/zurbo/ZurBot/master/defaultSettings/settings.json', function (data) { //cochonerie a corriger
		settings = data;
	});
	$.getJSON('https://github-raw-cors-proxy.herokuapp.com/zurbo/ZurBot/master/defaultSettings/permissions.json', function (data) { //cochonerie a corriger
		permissions = data;
	});
	$.getJSON('https://github-raw-cors-proxy.herokuapp.com/zurbo/ZurBot/master/lang/' + settings.language + '.json', function (data) { //cochonerie a corriger
		lang = data;
	});
	printChat(lang.endInit, settings.version);
}

function printChat(txt) {
	for (var i = arguments.length - 2; i >= 0; i--) {
		txt = txt.split("$var" + i);
		txt[0] = txt[0] + arguments[i + 1];
		txt = txt.join('');
	}
	if (txt.length > 246) {
		var x = txt.length - 246;
		throw "string is too long, please remove " + x + " letters";
	}
	if (settings.me === false) {
		API.sendChat(txt);
	} else {
		API.sendChat("/em" + txt);
	}
}

/*var BOTAPI.CHATCOMMAND = new CustomEvent(
"Bot.chatCommand", {
detail : {
init()*/
