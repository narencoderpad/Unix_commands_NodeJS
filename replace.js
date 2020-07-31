var fs = require('fs')
const replaceFun=()=>{
	fs.readFile('documents.txt', 'utf8', function (err,data) {
	  if (err) {
		console.log("Please enter valid command");
	  }
	  var result = data.replace(/Hi/g, 'hello');

	  fs.writeFile('documents.txt', result, 'utf8', function (err) {
		 if (err) {console.log("please enter valid command");}
	  });
	});
	return true;
}
module.exports = replaceFun;