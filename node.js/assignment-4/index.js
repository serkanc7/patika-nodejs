const fs = require('fs');

const writeFile = (file, data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, data, 'utf8', (err) => {
		    if (err) reject(err)
		   	resolve('File created!')
		})
	})
}

const appendFile = (file, data) => {
	return new Promise((resolve, reject) => {
		fs.appendFile(file, data, 'utf8', (err) => {
		    if (err) reject(err)
		   	resolve('File appended!')
		})
	})
}

const readFile = (file) => {
	return new Promise((resolve, reject) => {
		fs.readFile(file, 'utf8', (err, data) => {
			if (err) reject(err)
			resolve(data)
		})
	})
}

const deleteFile = (file) => {
	return new Promise((resolve, reject) => {
		fs.unlink(file, function (err) {
  			if (err) reject(err);
		  	resolve('File deleted!')
		});
	})
}

async function init() {

	try {
		const file = 'employees.json'
		const data = '{"name": "Employee 1 Name", "salary": 2000}'

		await writeFile(file, data);
		await readFile(file).
            then((result) => {console.log(result)}).
            catch((err) => {console.log(err)});
		const newData = '{"name": "Employee 2 Name", "salary": 3000}'
		await appendFile(file, '\n' + newData);          								
		//await deleteFile(file);
					

	} catch {
		console.log('Error');
	}
	

}

init();


