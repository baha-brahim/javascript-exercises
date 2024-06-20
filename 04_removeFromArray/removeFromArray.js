const removeFromArray = function(array , ...removes) {
	for (let i = 0 ; i<removes.length ;i++) {
		let index = array.indexOf(removes[i]);
		while (index !== -1) {
			array.splice(index , 1);
			index = array.indexOf(removes[i]);
		}
	}
	return array;
}

// Do not edit below this line
module.exports = removeFromArray;
