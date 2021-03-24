let toggleNavStatus = false;

let toggleNav = function () {
	let getToogleMenu = document.querySelector("#Toggle-menu");
	let getMenuIcon = document.querySelector("#Logo-title-container");

	if (toggleNavStatus === false) {
		getToogleMenu.style.marginRight = "0";
		getMenuIcon.style.border = "";
		getMenuIcon.classList.add("ClassWithX");
		getMenuIcon.classList.remove("ClassWithMenu");

		toggleNavStatus = true;
	} else if (toggleNavStatus === true) {
		getToogleMenu.style.marginRight = "-100%";
		getMenuIcon.style.border = "";
		getMenuIcon.classList.add("ClassWithMenu");
		getMenuIcon.classList.remove("ClassWithX");

		toggleNavStatus = false;
	}
};

// Carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("Picture-container");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

// add Functionality to read-more paragraphs

const getElementsLinks = document.getElementsByClassName("Read-more-link");
const getDescriptionServices = document.getElementsByClassName(
	"description-service"
);
let btn1 = false;
let btn2 = false;
let btn3 = false;
let btn4 = false;
let btn5 = false;
let btn6 = false;

// btn1
getElementsLinks[0].addEventListener("click", () => {
	btn1 = !btn1;
	if (btn1) {
		getDescriptionServices[0].classList.add("normal-size");
		getElementsLinks[0].innerHTML = "read less";
	} else {
		getDescriptionServices[0].classList.remove("normal-size");
		getElementsLinks[0].innerHTML = "read more...";
	}
});
// btn2
getElementsLinks[1].addEventListener("click", () => {
	btn2 = !btn2;
	if (btn2) {
		getDescriptionServices[1].classList.add("normal-size");
		getElementsLinks[1].innerHTML = "read less";
	} else {
		getDescriptionServices[1].classList.remove("normal-size");
		getElementsLinks[1].innerHTML = "read more...";
	}
});
// btn3
getElementsLinks[2].addEventListener("click", () => {
	btn3 = !btn3;
	if (btn3) {
		getDescriptionServices[2].classList.add("normal-size");
		getElementsLinks[2].innerHTML = "read less";
	} else {
		getDescriptionServices[2].classList.remove("normal-size");
		getElementsLinks[2].innerHTML = "read more...";
	}
});
// btn4
getElementsLinks[3].addEventListener("click", () => {
	btn4 = !btn4;
	if (btn4) {
		getDescriptionServices[3].classList.add("normal-size");
		getElementsLinks[3].innerHTML = "read less";
	} else {
		getDescriptionServices[3].classList.remove("normal-size");
		getElementsLinks[3].innerHTML = "read more...";
	}
});
// btn5
getElementsLinks[4].addEventListener("click", () => {
	btn5 = !btn5;
	if (btn5) {
		getDescriptionServices[4].classList.add("normal-size");
		getElementsLinks[4].innerHTML = "read less";
	} else {
		getDescriptionServices[4].classList.remove("normal-size");
		getElementsLinks[4].innerHTML = "read more...";
	}
});
// btn6
getElementsLinks[5].addEventListener("click", () => {
	btn6 = !btn6;
	if (btn5) {
		getDescriptionServices[5].classList.add("normal-size");
		getElementsLinks[5].innerHTML = "read less";
	} else {
		getDescriptionServices[5].classList.remove("normal-size");
		getElementsLinks[5].innerHTML = "read more...";
	}
});
