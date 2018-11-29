var modalClose = document.getElementById("modal-close");
var modalWrap = document.getElementById("modal-wrap");
var modalLogin = document.getElementById("modal-login");
var login = document.getElementById("login");

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