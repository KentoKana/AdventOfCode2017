const fs = require('fs');
const text = fs.readFileSync("./D2_input.txt").toString('utf-8');
let stringArray = text.split(/[\n]/);

// stringArray[i] = first row no

toInt=()=>{
	var array = []
	for(i=0;i<stringArray.length;i++){
		array[i] = stringArray[i].split(/[\r\t]+/);
		array[i] = array[i].filter(Boolean) //filters out empty string (which has a value of false)
		for(j=0;j<stringArray.length;j++){
			array[i][j] = parseInt(array[i][j]);
		}
	} 
	return array;
}

var intArray = toInt();

// console.log(intArray);

checkSum =(someArray) =>{
	let maxValue;
	let minValue;
	let array = [];
	var counter = 0;
	for(i=0;i<someArray.length;i++){
			maxValue = Math.max(...someArray[i]);
			minValue = Math.min(...someArray[i]);
			counter += maxValue - minValue;
		}
	return counter;
}

console.log(checkSum(intArray));



////----------------------------forEach method-------------------------//
// let counter = 0;
// intArray.forEach(
// 	row=>{
// 		const maxVal = Math.max(...row);
// 		const minVal = Math.min(...row);
// 		counter += maxVal - minVal;
// });


// console.log(counter);
