const fs = require('fs');
const text = fs.readFileSync("./D1_input.txt").toString('utf-8');
let stringArray = text.split('');

toInt = someArray=>{
	let arr = [];
	for(let i=0;i<someArray.length;i++){
		arr[i] = parseInt(someArray[i]);
	}
	return arr;
}
var intArray = toInt(stringArray);

checkSum=(someArr)=>{
	var counter = 0;
	for(i=0;i<someArr.length;i++){
		if(someArr[i]===someArr[i+someArr.length/2]){
			counter += someArr[i]*2;
		}
	}
	return counter;
}

var sum = checkSum(intArray);

console.log(sum);
