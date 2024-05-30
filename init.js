const fs = require("fs");

const myArgs = process.argv.slice(2);

function initializeApplication() {
  if (DEBUG) console.log("initilizeApplication()");

  switch (myArgs[1]) {
    case "--all":
      if (DEBUG) console.log(" --all createFolder() and createFiles()");
      break;
    case "--mk":
      if (DEBUG) console.log(" --mk createFolder()");
      break;
    case "--cat":
      if (DEBUG) console.log(" --cat createFiles()");
      break;
    case "--help":
    case "--h":
    default:
      fs.readFile(__dirname + "/usage.txt", (error, data) => {
        if (error) throw error;
        console.log(data.toString());
      });
  }
}

module.exports = {
  initializeApplication,
};
