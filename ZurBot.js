init()

function init() {
	API.setVolume(0);
	$("#chat-emoji-button").click();
	$("#chat-sound-button").click();
	$().click();
	$().click();
	API.sendChat(endInit);
}

var bot = {
	Settings:{
		version: "b0.1.0"
		language: "en"
		voteskip: true
		voteskipOnMeh: true
		voteSkipType: "%"
		nbVoteSkip: 25
		DJBot: true
		autoSkip: false
		lockWaitList: false
		timeGuard: true
		maxLenght: 7
		MOTD: false
		MOTDStr: "Hello World"
		welcomeMsg: true
		frstWelcomeMsgStr: "Welcome in the room @"
		welcomeMsgStr: "hello @"
		quitMsg: false
		quitMsgStr: "goodbye @"
		extGroup: false
		dc: true
		wDb: false
		rDb: false
	}
	Permissions:{
		ban: {
			hour: "bouncer"
			day: "bouncer"
			perma: "manager"
		}
		kick: "bouncer"
		rules: "user"
		lang: "dj"
		roulette: {
			join: "user"
			create: "manager"
			close: "bouncer"
		}
		perm: "host"
		cyril: "disable"
		citation: {
			w: "bouncer"
			r: "user"
		}
		op: "bouncer"
		link: "dj"
		deop: "manager"
		cookie: "user"
		emoji: "user"
		commands: "user"
		toggle: {
			voteskip: "bouncer"
			voteskipOnMeh: "bouncer"
			DJBot: "bouncer"
			autoSkip: "bouncer"
			lockWaitList: "bouncer"
			timeGuard: "bouncer"
			MOTD: "bouncer"
			welcomeMsg: "bouncer"
			quitMsg: "bouncer"
			extGroup: "manager"
			dc: "bouncer"
			wDb: "host"
			rDb: "host"
		}
		active: {
			voteskip: "bouncer"
			voteskipOnMeh: "bouncer"
			DJBot: "bouncer"
			autoSkip: "bouncer"
			lockWaitList: "bouncer"
			timeGuard: "bouncer"
			MOTD: "bouncer"
			welcomeMsg: "bouncer"
			quitMsg: "bouncer"
			dc: "bouncer"
			extGroup: "manager"
			wDb: "host"
			rDb: "host"
		}
		disable: {
			voteskip: "bouncer"
			voteskipOnMeh: "bouncer"
			DJBot: "bouncer"
			autoSkip: "bouncer"
			lockWaitList: "bouncer"
			timeGuard: "bouncer"
			MOTD: "bouncer"
			welcomeMsg: "bouncer"
			quitMsg: "bouncer"
			dc: "bouncer"
			extGroup: "manager"
			wDb: "host"
			rDb: "host"
		}
		voteskipWeight: "manager"
		status: "bouncer"
		description: "host"
		delay: "manager"
		title: "host"
		clearChat: {
			user: "bouncer"
			all: "manager"
		}
		welcome: "host"
		gCreate: "manager"
		gAdd: "manager"
		coolDown: "bouncer"
		mute: "bouncer"
		unmute: "bouncer"
		maxLenght: "bouncer"
		move: "manager"
		motd: "manager"
		chatLvl: "manager"
		kill: {
			user: "dj"
			bot: "host"
		}
		skip: "bouncer"
		unban: "manager"
		voteratio: {
			me: "users"
			user: "bouncer"
			group: "bouncer"
			all: "bouncer"
		}
		help: "users"
		dispCmd: "host"
		dc: "user"
		switchpos: {
			user: "user"
			accept: "user"
		}
		eta: {
			user: "bouncer"
			me: "user"
		}
		language: "manager"
		ping: "user"
		cookie: "user"
		afk: "dj"
	}
}