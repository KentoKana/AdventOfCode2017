const fs = require('fs');
const text = fs.readFileSync("./D2_input.txt").toString('utf-8');
let stringArray = text.split(/[\n]/);

//converts data into array of integers
toInt=()=>{
	let array = [];
	for(i=0;i<stringArray.length;i++){
		array[i] = stringArray[i].split(/[\r\t]/);
		array[i] = array[i].filter(Boolean);
		for(j=0;j<stringArray.length;j++){
			array[i][j] = parseInt(array[i][j]);
		}
	}
	return array;
}
var numArray = toInt();
//---------------------------------------------------------------------------------------//

checkSum =someArray=>{
	var counter = 0;
	for(let i=0;i<someArray.length;i++){
		for(let j=0;j<someArray[i].length;j++){
			for(let k=0;k<someArray[i].length;k++){

				//avoids comparison between the same array item.
				//assumption is that no two numbers are the same in a single list.
				if(someArray[i][j] === someArray[i][k]){
					continue;

				//Checks if any combination of the items would return a whole number
				} else if(someArray[i][j]%someArray[i][k] === 0){

					//checks whether the quotient between two items is a float.
					if((someArray[i][j]/someArray[i][k])%1 === 0){
						counter += someArray[i][j]/someArray[i][k];
					}
				}
			}
		}
	}
	return counter;
}

console.log(checkSum(numArray));
