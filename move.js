let fs = require('fs');
let path = require('path');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var moveFile = ()=>{
    rl.question("What is your file name ? ", function(name) {
        rl.question("Enter your directory name? ", function(direc) {
            var currentDir = ("./files/"+name);
            var f = path.basename("./files/"+name);
            var dest = path.resolve("./files/"+direc+"/", f);
                fs.rename(currentDir, dest, (err)=>{
                    if(err) {console.log("please enter valid path");}
                    else{ console.log('Successfully moved');}
                });
        });
    });
    
  };
  module.exports = moveFile;