init()

function init() {
	API.setVolume(0);
	if (document.querySelector('class.icon.icon-emoji-on')!==null){
		$("#chat-emoji-button").click();
	}
	if (document.querySelector('class.icon.icon-chat-sound-on')!==null){
		$("#chat-sound-button").click();
	}
	document.querySelector('div.item.s-av.selected').click();
	if (document.querySelector('div.item.s-vo.selected')!==null){
		document.querySelector('div.item.s-vo').click();
	}
	API.sendChat(endInit);
	API.sendChat(endInitPriv);
}

