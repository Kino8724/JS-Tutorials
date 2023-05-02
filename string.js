// This is going to just be a place to practice and look at String methods in JS

let msg = "Hello World";
msg.toUpperCase(); // HELLO WORLD
msg.toLowerCase(); // hello world

let color = "    red      ";
color.trim() // Removes leading and trailing whitespaces

let animals = "catdog";
animals.indexOf("cat") // Returns 0
animals.indexOf("dog") // Returns 3
animals.indexOf("z") // Returns -1 (not found)

let baseball = "baseball";
baseball.slice(0,4) // "base" (start, up to [not including])
baseball.slice(4) // "ball" (start [goes to end if one arg])

let sport = "football is the best";
sport.replace("football", "Jiu Jitsu"); // "Jiu Jitsu is the best"

// String escape characters use a backslash (\) before the character
    // New line (\n)
    // Tab (\t)
    // Backslash (\\)

// Use backticks for Template Literals
let templateLiteral = `${msg}` // This will take the msg variable into the string
