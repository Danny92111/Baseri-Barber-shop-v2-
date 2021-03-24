$(document).ready(function () {
	var userFeed = new Instafeed({
		get: "user",
		userId: "11661320215",
		limit: 12,
		resolution: "standard_resolution",
		accessToken: "8683707547.1677ed0.1296bd01d5ee4813a9c5b336af2f4cf6",
		sortBy: "most-recent",
	});
	userFeed.run();
});

// make booksy buttons functional

const getElements = document.getElementsByClassName("booksy-widget-button");
getElements[0].id = "target-id";
const main = document.getElementById("target-id");

[...getElements].slice(1).forEach((el) => {
	el.addEventListener("click", () => {
		main.click();
	});
});
