var modalClose = document.getElementById("modal-close");
var modalWrap = document.getElementById("modal-wrap");
var modalLogin = document.getElementById("modal-login");
var login = document.getElementById("log-in");
var loginForm = document.getElementById("login-form");

function modalHidden() {
	modalLogin.classList.add("hidden");
	modalWrap.classList.add("hidden");
}

function modalShow() {
	modalLogin.classList.remove("hidden");
	modalWrap.classList.remove("hidden");
}

modalWrap.onclick = () => {
	modalHidden();
	return false;
}	

modalClose.onclick = () => {
	modalHidden();
	return false;
}

login.onclick = () => {
	modalShow();
	return false;
}

loginForm.onsubmit = () => {
	let email = loginForm.loginEmail.value;
	let password = loginForm.loginPass.value;

	let userId = users.findIndex((item) =>{
		if (item.email == loginForm.loginEmail.value) return true;
	});
	console.log(userId);
	if (userId == -1) {
		loginForm.innerHTML += "login not found";	 
	} else if (password == users[userId].password){
		loginForm.innerHTML += "log true";	 
	} else { loginForm.innerHTML += "password false";}
	return false;
}

