const selectElement = s => document.querySelector(s);

// open the menu on click
selectElement(".open").addEventListener("click", () => {
	selectElement(".nav-list").classList.add("active");
});

// close the menu on click
selectElement(".close").addEventListener("click", () => {
	selectElement(".nav-list").classList.remove("active");
});

////////////////////////////////////
// determine what is overflowing
////////////////////////////////////
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function(el) {
	if (el.offsetWidth > docWidth) {
		console.log(el);
	}
});
