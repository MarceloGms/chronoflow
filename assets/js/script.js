function scrollToAbout() {
	document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

function scrollToFAQ() {
	document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
}

function scrollToOurTeam() {
	document.getElementById("team").scrollIntoView({ behavior: "smooth" });
}

function scrollToContactUs() {
	document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function toggleAnswer(element) {
	var faqItems = document.querySelectorAll(".faq-item");

	faqItems.forEach(function (item) {
		if (item !== element) {
			item.querySelector(".answer").classList.remove("show");
		}
	});

	element.querySelector(".answer").classList.toggle("show");
}
