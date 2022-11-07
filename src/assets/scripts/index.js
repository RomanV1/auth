const unique_login = async () => {
	const login = document.getElementById("login").value;
	let res = await fetch(`http://localhost:8000/api/users/login/${login || null}`);
	res = await res.json();

	if (res.hasOwnProperty('error')) {
		document.getElementById('incorrect').setAttribute('style', 'display: none;');
	} else {
		document.getElementById('incorrect').setAttribute('style', 'display: block;');
	}
}