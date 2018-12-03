"use strict";

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

modalWrap.onclick = function () {
	modalHidden();
	return false;
};

modalClose.onclick = function () {
	modalHidden();
	return false;
};

login.onclick = function () {
	modalShow();
	return false;
};

loginForm.onsubmit = function () {
	var email = loginForm.loginEmail.value;
	var password = loginForm.loginPass.value;

	var userId = users.findIndex(function (item) {
		if (item.email == loginForm.loginEmail.value) return true;
	});
	console.log(userId);
	if (userId == -1) {
		loginForm.innerHTML += "login not found";
	} else if (password == users[userId].password) {
		loginForm.innerHTML += "log true";
	} else {
		loginForm.innerHTML += "password false";
	}
	return false;
};