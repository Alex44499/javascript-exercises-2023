const removeFromArray = function(array, ...remove_arguments) {
	let newArr = [];

	array.forEach((item) => {
		 if (!remove_arguments.includes(item)){
			  newArr.push(item);
		 }
	});

	return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
