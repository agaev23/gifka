var contactsLink = document.getElementById("contacts-link");
var contactsWrap = document.getElementById("contacts");
contactsLink.onclick = () => {
	contactsWrap.style.display = 'block';
  slider.style.display = "none";
  gifPageWrap.style.display = "none";
  mainContentGif.style.display = "none";  
  var map = document.getElementById("map");

	if (!navigator.onLine) {
		map.style.display = "none";
	}
	return false;
}