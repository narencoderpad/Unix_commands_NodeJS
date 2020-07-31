var fs = require('fs');
const readFun=()=>{
	fs.readFile('documents.txt', function(err, data) {
		if(err){console.log("Please enter valid command")}
		console.log(data.toString());
	});
	
		return true;
}
module.exports = readFun;
