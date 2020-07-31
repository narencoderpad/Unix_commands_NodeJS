const fs = require('fs'); 
const path = require('path'); 

const makDir = ()=>{  
	fs.mkdir(path.join(__dirname, 'test'), (err) => { 
		if (err) { 
			console.log("please enter valid command")
		} 
	}); 
	return true;
}
module.exports = makDir;