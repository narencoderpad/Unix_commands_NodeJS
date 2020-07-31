let fs = require('fs');
let path = require('path');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var copyFile = ()=>{
    rl.question("What is your file name ?", function(name) {
        rl.question("Enter your directory name? ", function(direc) {
            var currentDir = ("./files/new/"+name);
            var f = path.basename("./files/new/"+name);
            var source = fs.createReadStream(currentDir);
            var dest = fs.createWriteStream(path.resolve("./"+direc+"/", f));
          
            source.pipe(dest);  
            source.on('end', function() { console.log('Succesfully copied'); });
            source.on('error', function(err) { console.log("please enter valid path"); });
    
        });
    });
    
  };
  
  module.exports = copyFile;