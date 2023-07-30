const sumAll = function(arg1, arg2) {	
	let sum = 0
	let num_min 
	let num_max 


	if((arg1 < 0) || (arg2 < 0))  return "ERROR"
	if (!Number.isInteger(arg1) || !Number.isInteger(arg2)) return "ERROR";

	if (arg1 > arg2){
		num_min =arg2
		num_max= arg1
} else{
		num_min =arg1
		num_max = arg2
}


	for (i= num_min; i<=num_max; i++){
		sum += i

	
	}

	return sum
};

// Do not edit below this line
module.exports = sumAll;


