
// Lobby events
var eventsJSON = [
	"{\"titleText\":\"Custom Party Lobby\",\"type\":0,\"theme\":\"undefined\",\"date\":\"2018-08-02T18:00:00.000Z\",\"duration\":120,\"timeZone\":\"GMT\",\"hosts\":[{\"name\":\"Rashiko\",\"tag\":\"CC\",\"code\":\"6822-5055-2423\",\"tier\":2}]}",
	"{\"titleText\":\"STANDARD PARTY LOBBY\",\"type\":0,\"theme\":\"undefined\",\"date\":\"2018-08-11T18:00:00.000Z\",\"duration\":120,\"timeZone\":\"EDT\",\"hosts\":[{\"name\":\"LITERARY\",\"tag\":\"\",\"code\":\"4704-7597-7783\",\"tier\":1},{\"name\":\"SADALY\",\"tag\":\"\",\"code\":\"2615-5389-4887\",\"tier\":2},{\"name\":\"MARIE\",\"tag\":\"CC\",\"code\":\"5693-4645-2698\",\"tier\":3}]}",
	"{\"titleText\":\"Fights Only Lobby\",\"type\":4,\"theme\":\"cote\",\"date\":\"2018-08-12T20:45:00.000Z\",\"duration\":60,\"timeZone\":\"EDT\",\"hosts\":[{\"name\":\"Literary\",\"tag\":\"\",\"code\":\"4704-7597-7783\",\"tier\":0},{\"name\":\"Program\",\"tag\":\"\",\"code\":\"4898-5196-4000\",\"tier\":0}]}",
	"{\"titleText\":\"Fights Only Lobby\",\"type\":3,\"theme\":\"mlm\",\"date\":\"2018-08-06T20:45:00.000Z\",\"duration\":60,\"timeZone\":\"EDT\",\"hosts\":[{\"name\":\"Fang\",\"tag\":\"CC\",\"code\":\"8434-0819-1597\",\"tier\":1},{\"name\":\"Program\",\"tag\":\"\",\"code\":\"4898-5196-4000\",\"tier\":2}]}",
	"{\"titleText\":\"Standard Party Lobby\",\"type\":0,\"theme\":\"everything\",\"date\":\"2018-08-15T01:00:00.000Z\",\"duration\":120,\"timeZone\":\"PDT\",\"hosts\":[{\"name\":\"LITERARY\",\"tag\":\"\",\"code\":\"4704-7597-7783\",\"tier\":2},{\"name\":\"SORA\",\"tag\":\"\",\"code\":\"0499-4528-8293\",\"tier\":3}]}",
	"{\"titleText\":\"Wildcard Wednesday\",\"type\":0,\"theme\":\"teambuilding-near-far\",\"date\":\"2018-08-08T22:00:00.000Z\",\"duration\":120,\"timeZone\":\"EDT\",\"hosts\":[{\"name\":\"Program\",\"tag\":\"\",\"code\":\"4898-5196-4000\",\"tier\":1},{\"name\":\"Marie\",\"tag\":\"CC\",\"code\":\"5693-4645-2698\",\"tier\":3}]}",
	"{\"titleText\":\"Thumpin' Thursday\",\"type\":0,\"theme\":\"undefined\",\"date\":\"2018-08-09T18:00:00.000Z\",\"duration\":120,\"timeZone\":\"GMT\",\"hosts\":[{\"name\":\"Program\",\"tag\":\"\",\"code\":\"4898-5196-4000\",\"tier\":1},{\"name\":\"Rashiko\",\"tag\":\"CC\",\"code\":\"6822-5055-2423\",\"tier\":3}]}",
	"{\"titleText\":\"Fights Only Lobby\",\"type\":3,\"theme\":\"mlm\",\"date\":\"2018-08-13T20:45:00.000Z\",\"duration\":60,\"timeZone\":\"EDT\",\"hosts\":[{\"name\":\"Program\",\"tag\":\"\",\"code\":\"4898-5196-4000\",\"tier\":1},{\"name\":\"Mileve\",\"tag\":\"\",\"code\":\"2795-2096-7893\",\"tier\":2}]}",
	"{\"titleText\":\"Wildcard Wednesday!\",\"type\":0,\"theme\":\"undefined\",\"date\":\"2018-08-15T22:00:00.000Z\",\"duration\":120,\"timeZone\":\"EDT\",\"hosts\":[{\"name\":\"Taste\",\"tag\":\"\",\"code\":\"4535-5139-5505\",\"tier\":1},{\"name\":\"Rashiko\",\"tag\":\"CC\",\"code\":\"6822-5055-2423\",\"tier\":3}]}",
	"{\"titleText\":\"Thumpin' Thursday\",\"type\":0,\"theme\":\"undefined\",\"date\":\"2018-08-16T18:00:00.000Z\",\"duration\":120,\"timeZone\":\"GMT\",\"hosts\":[{\"name\":\"Program\",\"tag\":\"\",\"code\":\"4898-5196-4000\",\"tier\":1},{\"name\":\"Rashiko\",\"tag\":\"CC\",\"code\":\"6822-5055-2423\",\"tier\":3}]}",
	"{\"titleText\":\"Fights Only Lobby\",\"type\":4,\"theme\":\"cote\",\"date\":\"2018-08-19T20:45:00.000Z\",\"duration\":60,\"timeZone\":\"EDT\",\"hosts\":[{\"name\":\"Program\",\"tag\":\"\",\"code\":\"4898-5196-4000\",\"tier\":0}]}",
	
];

var leaderboardTiers = [
	{"start" :     1, "name" : "Intern",     "color" : "#bfffff"},
	{"start" :   100, "name" : "Technician", "color" : "#00ffff"},
	{"start" :   250, "name" : "Analyst",    "color" : "#00ff00"},
	{"start" :   500, "name" : "Coder",      "color" : "#aaff00"},
	{"start" :  1000, "name" : "Researcher", "color" : "#ffae00"},
	{"start" :  2000, "name" : "Scientist",  "color" : "#ff6000"},
	{"start" :  3000, "name" : "Manager",    "color" : "#ff0004"},
	{"start" :  5000, "name" : "VP",         "color" : "#ff006f"},
	{"start" :  7000, "name" : "EVP",        "color" : "#ff00e6"},
];

var eventStages = {
	 0 : "Spring Stadium",
	 1 : "Ribbon Ring",
	 2 : "Ninja College",
	 3 : "Mausoleum",
	 4 : "Ramen Bowl",
	 5 : "Scrapyard",
	 6 : "Cinema Deux",
	 7 : "Buster Beach",
	 8 : "Snake Park",
	 9 : "DNA Lab",
	10 : "Sky Arena",
	11 : "Via Dolce",
	12 : "Temple Grounds",
	13 : "Sparring Ring",
	14 : "[NAME REDACTED]"
};

var eventThemes = [
	{
		"key"             : "everything",
		"name"            : "Anything Goes",
		"description"     : "",
		"solo-fight"      : [2, 3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [2],
		"skillshot"       : [2, 4],
		"v-ball"          : [2, 4],
		"items"           : true,
		"streak-bonouses" : true,
		"stages"          : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
	},
	{
		"key"             : "breakable-bits",
		"name"            : "Breakable Bits",
		"description"     : "",
		"solo-fight"      : [2],
		"team-fight"      : [4],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [],
		"skillshot"       : [2, 4],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [1, 3, 5, 9, 11, 12, 14],
	},
	{
		"key"             : "teambuilding",
		"name"            : "Teambuilding",
		"description"     : "",
		"solo-fight"      : [],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [4],
		"v-ball"          : [4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 3, 4, 8, 9, 10, 12],
	},
	{
		"key"             : "bane-of-ranked",
		"name"            : "Bane of Ranked",
		"description"     : "",
		"solo-fight"      : [3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [3, 4],
		"hoops"           : [2],
		"skillshot"       : [2, 4],
		"v-ball"          : [2, 4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [2, 4, 6, 8, 14],
	},
	{
		"key"             : "teambuilding-near-far",
		"name"            : "Teambuilding: Near & Far",
		"description"     : "",
		"solo-fight"      : [],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [4],
		"v-ball"          : [4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 2, 4, 8, 11, 13],
	},
	{
		"key"             : "barrier-bonanza",
		"name"            : "Barrier Bonanza",
		"description"     : "",
		"solo-fight"      : [2, 3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [2, 4],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [1, 5, 6, 7, 8, 9, 12, 14],
	},
	{
		"key"             : "corner-chaos",
		"name"            : "Corner Chaos",
		"description"     : "",
		"solo-fight"      : [2],
		"team-fight"      : [4],
		"vs-hedlok"       : [3],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 7, 10, 11, 13, 14],
	},
	{
		"key"             : "mlm",
		"name"            : "Restricted Competitive (MLM style)",
		"description"     : "This theme is used for the Mega League Mondays warmup lobbies.",
		"solo-fight"      : [2],
		"team-fight"      : [],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [3, 7, 9, 12, 13],
	},
	{
		"key"             : "cote",
		"name"            : "Extended Competitive (Era style)",
		"description"     : "This theme is used for the Champions of the Era warmup lobbies.",
		"solo-fight"      : [2],
		"team-fight"      : [],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 3, 5, 7, 9, 11, 12, 13],
	},
];
