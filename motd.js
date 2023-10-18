const motds = [
    "Ugh, I've gotta come with with 31 of these things.",
    "Oh, crikey...!",
    "Babies eat plastic all the time! It's probably fine.",
    "No mercy >:3",
    "This text doesn't add much value, but it looks cool.",
    "can you tell im a minimalist",
    "I can't wait to watch my grades tank when Hades 2 comes out.",
    "Bias is inevitable in the production of knowledge.",
    "100% free of contradictions!",
    "Hexagons are the Bestagons! :)",
    "I once walked 16k just to get away from my homework.",
    "Every night before I go to bed I dab on them haters.",
    "I love talking to people; shoot me an email!",
    "jan pi toki pona o epiku a",
    "Everything in this website is aligned on a terminal-like grid.",
    "Dozenal is superior, but not if we have to switch.",
    "Man, IB is HARD.",
    "mwahahahahaHAHAHAHAHA!",
    "\"You\" needs to stop eating pronouns, dammit!",
    "Spaaaaaaaaaaaaaaaaaaaaaaaaaaaaace!",
    "It is pitch dark. You're likely to be eaten by a grue.",
    "If everyone is you, being mean makes no sense.",
    "I'm in a choir but I'll never say which one.",
    "Mostly Harmless.",
    "There aren't any secrets in this website. Yet.",
    "Whatevs, man. :/",
    "Hello from 2023!",
    "No hablo español muy bien, pero lo estoy aprendiendo... :)",
    "Don't confuse confidence and being an asshole.",
    "All likelyhood states that nobody ever sees this but me.",
];

var today = new Date();
var message;

switch (today.getMonth()+1+"/"+today.getDate()) {
    case "1/1"  : message = "Welcome to " + today.getFullYear() + "!"; break;
    case "2/29" : message = "There's about a 1 in 1461 chance you see this on a random day."; break;
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