global.DEBUG = true;

const fs = require("fs");

const myArgs = process.argv.slice(2);

if (DEBUG && myArgs.length >= 1) console.log("My Args: " + myArgs);

switch (myArgs[0]) {
  case "init":
  case "i":
    if (DEBUG) console.log(myArgs[0] + " - init the app.");
    break;
  case "config":
  case "c":
    if (DEBUG)
      console.log(myArgs[0] + " - create the config folder and files.");
    break;
  case "token":
  case "t":
    if (DEBUG) console.log(myArgs[0] + " - manage the tokens.");
    break;
  case "--help":
  case "--h":
  default:
    // Read the help file
    if (DEBUG) console.log(myArgs[0] + " - display help");
    break;
}
