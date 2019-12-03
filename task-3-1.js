const collection = () => {
	let sum = 0;

	for (let min = 10, max = 20; min <= max; min += 1) {
		min % 2 == 0 && console.log('parzysta ->' + min);
		sum += min;
	}
	console.log(sum);
}

collection();