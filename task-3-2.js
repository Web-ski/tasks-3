const collection = (str) => {

	if(typeof str === 'string') {

		let arr = str.split('');
		let collection = '';	
		arr.forEach(function (item, index) {
			index % 2 == 0 && (collection = collection + item);
		});
	
		console.log(collection);
	} else {
		console.log('koparka');
	}
}

collection('superbohater');
collection();