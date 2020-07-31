let fs = require('fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var readDirect = ()=>{
    rl.question("What is your Directory name ? ", function(name) {
            var path = (name);
            fs.readdir(path, function(err, items) {
                for (var i=0; i<items.length; i++) {
                    var file = path + '/' + items[i];
                    console.log("Start: " + file);
             
                    /* fs.stat(file, function(err, stats) {
                        console.log(file);
                        console.log(stats["size"]);
                    }); */
                }
            });
    });
    
  };
  module.exports = readDirect;
 