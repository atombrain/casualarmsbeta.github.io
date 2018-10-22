
var leaderboardTiers = [
	{"start" :     0, "name" : "Test Subject", "color" : "white"},
	{"start" :     1, "name" : "Intern",       "color" : "#bfffff"},
	{"start" :   100, "name" : "Technician",   "color" : "#00ffff"},
	{"start" :   250, "name" : "Analyst",      "color" : "#00ff00"},
	{"start" :   500, "name" : "Coder",        "color" : "#aaff00"},
	{"start" :  1000, "name" : "Researcher",   "color" : "#ffae00"},
	{"start" :  2000, "name" : "Scientist",    "color" : "#ff6000"},
	{"start" :  3000, "name" : "Manager",      "color" : "#ff0004"},
	{"start" :  5000, "name" : "VP",           "color" : "#ff006f"},
	{"start" :  7000, "name" : "EVP",          "color" : "#ff00e6"},
	{"start" : 10000, "name" : "Codirector",   "color" : "#b700ff"},
	{"start" : 10000000, "name" : "[Dummy]",   "color" : "white"},
];

var leaderboardTiersMarioKart = [
	{"start" :     0, "name" : "Racing Mascot", "color" : "white"},
	{"start" :     1, "name" : "Shell",       "color" : "#bfffff"},
	{"start" :   100, "name" : "Mushroom",   "color" : "#00ffff"},
	{"start" :   250, "name" : "Banana",      "color" : "#00ff00"},
	{"start" :   500, "name" : "Flower",        "color" : "#aaff00"},
	{"start" :  1000, "name" : "Leaf",   "color" : "#ffae00"},
	{"start" :  2000, "name" : "Star",    "color" : "#ff6000"},
	{"start" :  3000, "name" : "Egg",      "color" : "#ff0004"},
	{"start" :  5000, "name" : "Bell",           "color" : "#ff006f"},
	{"start" :  7000, "name" : "Lightning",          "color" : "#ff00e6"},
	{"start" : 10000, "name" : "Special",   "color" : "#b700ff"},
	{"start" : 10000000, "name" : "[Dummy]",   "color" : "white"},
];

var patreonTiers = [
	{"start" :  1, "name" : "Casual Contributor", "color" : "#2E666B"},
	{"start" :  5, "name" : "Committed Casual",   "color" : "#0A680D"},
	{"start" : 25, "name" : "True Casual",        "color" : "#8c230B"},
];

var badgeList = {
	"ldb0" : { "caption" : "ARMS Labs Intern",     "style" : "light", "criterion": "Earn at least 1 coin in ARMS lobbies"},
	"ldb1" : { "caption" : "ARMS Labs Technician", "style" : "light", "criterion": "Earn at least 100 coins in ARMS lobbies" },
	"ldb2" : { "caption" : "ARMS Labs Analyst",    "style" : "light", "criterion": "Earn at least 250 coins in ARMS lobbies" },
	"ldb3" : { "caption" : "ARMS Labs Coder",      "style" : "light", "criterion": "Earn at least 500 coins in ARMS lobbies" },
	"ldb4" : { "caption" : "ARMS Labs Researcher", "style" : "light", "criterion": "Earn at least 1000 coins in ARMS lobbies" },
	"ldb5" : { "caption" : "ARMS Labs Scientist",  "style" : "light", "criterion": "Earn at least 2000 coins in ARMS lobbies" },
	"ldb6" : { "caption" : "ARMS Labs Manager",    "style" : "light", "criterion": "Earn at least 3000 coins in ARMS lobbies" },
	"ldb7" : { "caption" : "ARMS Labs VP",         "style" : "light", "criterion": "Earn at least 5000 coins in ARMS lobbies" },
	"ldb8" : { "caption" : "ARMS Labs EVP",        "style" : "light", "criterion": "Earn at least 7000 coins in ARMS lobbies" },
	"ldb9" : { "caption" : "ARMS Labs Codirector", "style" : "light", "criterion": "Earn at least 10000 coins in ARMS lobbies" },
	
	"mk-ldb0" : { "caption" : "Shell Cup Racer",     "style" : "light", "criterion": "Earn at least 1 point in Mario Kart events"},
	"mk-ldb1" : { "caption" : "Mushroom Cup Racer",  "style" : "light", "criterion": "Earn at least 100 points in Mario Kart events" },
	"mk-ldb2" : { "caption" : "Banana Cup Racer",    "style" : "light", "criterion": "Earn at least 250 points in Mario Kart events" },
	"mk-ldb3" : { "caption" : "Flower Cup Racer",    "style" : "light", "criterion": "Earn at least 500 points in Mario Kart events" },
	"mk-ldb4" : { "caption" : "Leaf Cup Racer",      "style" : "light", "criterion": "Earn at least 1000 points in Mario Kart events" },
	"mk-ldb5" : { "caption" : "Star Cup Racer",      "style" : "light", "criterion": "Earn at least 2000 points in Mario Kart events" },
	"mk-ldb6" : { "caption" : "Egg Cup Racer",       "style" : "light", "criterion": "Earn at least 3000 points in Mario Kart events" },
	"mk-ldb7" : { "caption" : "Bell Cup Racer",      "style" : "light", "criterion": "Earn at least 5000 points in Mario Kart events" },
	"mk-ldb8" : { "caption" : "Lightning Cup Racer", "style" : "light", "criterion": "Earn at least 7000 points in Mario Kart events" },
	"mk-ldb9" : { "caption" : "Special Cup Racer",   "style" : "light", "criterion": "Earn at least 10000 points in Mario Kart events" },
	
	"p0" : { "caption" : "Patreon: Casual Contributor", "style" : "light", "criterion": "Contribute more than $1 on the Patreon for at least one month" },
	"p1" : { "caption" : "Patreon: Committed Casual",   "style" : "light", "criterion": "Contribute more than $5 on the Patreon for at least one month" },
	"p2" : { "caption" : "Patreon: True Casual",        "style" : "dark",  "criterion": "Contribute more than $25 on the Patreon for at least one month" },
	
	"casualcouple" : { "caption" : "Casual ARMS Founder", "style" : "light", "criterion": "This is a special badge for the two founders of Casual ARMS" },
	"casualcrew" : { "caption" : "Casual Crew Member", "style" : "dark", "criterion": "Be a current or former member of the Casual Crew" },
	"host" : { "caption" : "Official Lobby Host", "style" : "dark", "criterion": "Volunteer as a host of Casual ARMS lobby events" },
	"cgc" : { "caption" : "Cobra Gloves Club", "style" : "light", "criterion": "Join the CGC and the Cobra hive mind by playing gloves-only Kid Cobra with a CGC member" },
	
	"season" : { "caption" : "Monthly Leaderboards", "style" : "light", "criterion": "Finish top 10 in the monthly leaderboards" },
	"season-win" : { "caption" : "Monthly Leaderboards Win", "style" : "hololight", "criterion": "Finish as the winner in the monthly leaderboards" },
	
	"clash" : { "caption" : "Casual Clash Participant", "style" : "light", "criterion": "Play in a Casual Clash" },
	"scramble" : { "caption" : "Casual Scramble Participant", "style" : "dark", "criterion": "Play in a Casual Scramble" },
	
	"clash-win" : { "caption" : "Casual Clash Champion", "style" : "hololight", "criterion": "Achieve victory in a Casual Clash" },
	"scramble-win" : { "caption" : "Casual Scramble Sovereign", "style" : "holodark", "criterion": "Achieve victory in a Casual Scramble" },
};

var hostDatabase = [
	{"tag" : "",   "name" : "Program",   "code" : "4898-5196-4000", "tier" : 3},
	{"tag" : "",   "name" : "Mileve",    "code" : "2795-2096-7893", "tier" : 3},
	{"tag" : "",   "name" : "Sora",      "code" : "0499-4528-8293", "tier" : 3},
	{"tag" : "",   "name" : "Reis",      "code" : "1753-6049-3315", "tier" : 3},
	{"tag" : "CC", "name" : "Marie",     "code" : "5693-4645-2698", "tier" : 3},
	
	{"tag" : "CC", "name" : "Rashiko",   "code" : "6822-5055-2423", "tier" : 2},
	{"tag" : "",   "name" : "Literary",  "code" : "4704-7597-7783", "tier" : 2},
	{"tag" : "",   "name" : "Spenjo",    "code" : "0725-4824-1895", "tier" : 2},
	
	{"tag" : "",   "name" : "Levi",      "code" : "3256-0282-5625", "tier" : 1},
	{"tag" : "",   "name" : "Taste",     "code" : "4535-5139-5505", "tier" : 1},
]

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
		"streak-bonouses" : false,
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
		"key"             : "hedlok-havok",
		"name"            : "Hedlok Havok",
		"description"     : "",
		"solo-fight"      : [],
		"team-fight"      : [],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
	},
	{
		"key"             : "fights-only",
		"name"            : "Fights Only",
		"description"     : "All standard fight modes and no minigames, on all stages! Hedlok is welcome, though.",
		"solo-fight"      : [2, 3, 4],
		"team-fight"      : [4],
		"vs-hedlok"       : [2, 3],
		"hedlok-scramble" : [2, 3, 4],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
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
	{
		"key"             : "clash",
		"name"            : "Casual Clash",
		"description"     : "Used in the Casual Clash tournament and warmup lobby.",
		"solo-fight"      : [2],
		"team-fight"      : [],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
	},
	{
		"key"             : "scramble",
		"name"            : "Casual Scramble",
		"description"     : "Used in the Casual Scramble tournament and warmup lobby.",
		"solo-fight"      : [],
		"team-fight"      : [],
		"vs-hedlok"       : [],
		"hedlok-scramble" : [2],
		"hoops"           : [],
		"skillshot"       : [],
		"v-ball"          : [],
		"items"           : true,
		"streak-bonouses" : false,
		"stages"          : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
	},
];
