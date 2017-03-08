function countLetters(strings) {
	var formattedArr = strings.replace(/\s/ig,'').toLowerCase().split('');
	var results = {};
	for (var index in formattedArr) {
		// Checks if there is already a count being counted to increment it
		if (results.hasOwnProperty(formattedArr[index])) {
			results[formattedArr[index]].count += 1;
		}
		// Otherwise initializes the object and searches for ocurrences
		else {
			results[formattedArr[index]] = {};
			results[formattedArr[index]].count = 1;
			results[formattedArr[index]].ocurrences = [];
			if (!results[formattedArr[index]].ocurrences.length) {
				var regex = new RegExp(formattedArr[index],"gi");
				results[formattedArr[index]].ocurrences = searchInString(regex,strings);
			}
		}			
	}
	// Prints the results
	for (var key in results) {
		console.log('Number of ocurrences of "' + key + '": ', results[key].count,' \tIndexes: ',results[key].ocurrences);
	}
}

function searchInString(regex,string) {
	var indexes = [];
	while (match = regex.exec(string)) {
 		indexes.push(match.index);
 	}
 	return indexes;
}

countLetters('Lighthouse in the house');