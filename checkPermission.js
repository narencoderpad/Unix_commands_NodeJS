let fs = require('fs');
let path = require('path');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var FilePermission = ()=>{
    rl.question("What is your file name ? ", function(name) {
            var currentDir = ("./files/"+name);
            try {
                const fd = fs.openSync(currentDir, "r");
                fs.fchownSync(fd, 1000, 1000);
                console.log("File permission change succcessful");
            } catch (error) {
                console.log("please enter valid command");
            }
    });
    
  };
module.exports = FilePermission;

