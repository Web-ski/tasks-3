const collection2 = (str) => {

	if(typeof str === 'string') {

		let arr = str.split('');
		let collection2 = '';	
		arr.forEach(function (item, index) {
			index % 2 == 0 && (collection2 = collection2 + item);
		});
	
		console.log(collection2);
	} else {
		console.log('koparka');
	}
}

collection2('superbohater');
collection2();