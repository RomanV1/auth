const unique_login = async () => {
	try {
		const login = document.getElementById("login").value;
		let result = await fetch(`http://localhost:8000/api/users/login/${login || null}`);
		result = await result.json();

		document.getElementById('incorrect').setAttribute('style', 'display: block;');
	} catch (err) {
		document.getElementById('incorrect').setAttribute('style', 'display: none;');
	}
}

// const unique_email = async () => {
// 	try {
// 		const login = document.getElementById("email").value;
// 		let result = await fetch(`http://localhost:8000/api/users/${login}`);
// 		result = await result.json();

// 		document.getElementById('incorrect').setAttribute('style', 'display: none;')
// 	} catch (err) {
// 		document.getElementById('incorrect').setAttribute('style', 'display: block;');
// 	}
// }