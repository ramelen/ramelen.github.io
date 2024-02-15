const motds = [
    "ugh I've gotta come with with 31 of these things",
    "crikey",
    "babies eat plastic all the time it's probably fine",
    "no mercy",
    "this text doesn't add much value but it looks cool",
    "can you tell im a minimalist",
    "what do you get if you multiply six by nine?",
    "death to chronos",
    "completely free of contradictions!",
    "hexagons are the bestagons",
    "I once walked 16k just to get away from my homework.",
    "yeah just lemme do this one thing real quick",
    "glory to the watcher",
    "jan pi toki pona o epiku a",
    "what the heck are clouds",
    "suprisingly binary is actually the best base",
    "why are there so many things that i want to do",
    "mwahahahahaHAHAHAHAHA!",
    "some people say one contains zero if you look close enough",
    "shave and a haircut: one crumb",
    "it is pitch black. you are likely to be eaten by a grue.",
    "its ineffable!",
    "here we are in the future and its bright",
    "mostly harmless.",
    "There aren't any secrets in this website. Yet.",
    "whatevs, man",
    "hello from 2023!",
    "no hablo español muy bien, pero estoy aprendiendo...",
    "don't confuse confidence and being an asshole.",
    "all likelyhood states that nobody ever sees this but me.",
    "you are always exactly where you need to be."
];

var today = new Date();
var message;

switch (today.getMonth()+1+"/"+today.getDate()) {
    case "1/1"  : message = "Welcome to " + today.getFullYear() + "!"; break;
    case "2/29" : message = "There's a 1 in 1461 chance you see this on a random day."; break;
    case "3/14" : message = "Its pi day! But days aren't decimal so not really..."; break;
    case "4/1"  : message = "My pronouns are she/her."; break;
    case "4/16" : message = "Today is the anniversary of the day I came up with PFIM."; break;
    case "6/28" : message = "Happy Tau Day! (The Superior Day)"; break;
    case "7/1"  : message = "Wooo Patriotism!"; break;
    case "10/31": message = "oooOooOoooOOOooOoOoo"; break;
    case "11/10": message = "The Real Pi Day?"; break;
    case "12/25": message = "Have a Merry Nondenominational Winter Celebration?"; break;
    default: message = motds[today.getDate()-1];
}

document.getElementById("motd").innerHTML = message;