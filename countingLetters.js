function countLetters(strings) {
	var formattedArr = strings.replace(/\s/ig,'').toLowerCase().split('');
	// console.log(formattedArr);
	var results = {};
	for (var index in formattedArr) {
		//console.log(letter);
		if (results.hasOwnProperty(formattedArr[index])) {
			results[formattedArr[index]] += 1;
		}
		else
			results[formattedArr[index]] = 1;
	}
	return results;
}

console.log(countLetters('Lighthouse in the house'));