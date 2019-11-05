var productLink = document.querySelector(".buy-btn");

var productPopup = document.querySelector(".modal-product");
var productClose = productPopup.querySelector(".modal-close");
var productContinue = productPopup.querySelector(".continue");

productLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	productPopup.classList.add("modal-show");
});

productClose.addEventListener("click", function (evt) {
	evt.preventDefault ();
	productPopup.classList.remove("modal-show");
});

productContinue.addEventListener("click", function (evt) {
	evt.preventDefault ();
	productPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (productPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			productPopup.classList.remove("modal-show");
		}
	}
});

var link = document.querySelector(".feedback-btn");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".feedback-form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]")
var lettertext = popup.querySelector("[name=textarea]")

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("username");
}	catch (err) {
isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");

if (storage) {
	username.value = storage;
	email.focus();
}	else {
	username.focus();
}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
		if (!username.value || !email.value || !textarea.value) {
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		}	else {
			if (isStorageSupport) {
				localStorage.setItem("username", username.value);
			}
		}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
  			popup.classList.remove("modal-show");
  			popup.classList.remove("modal-error");
			}
	}
});

var mapLink = document.querySelector(".map-btn");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault ();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
		}
	}
});