var chosenLangs;

var main = function() {
	printLang();
};

var nextButton = function(className) {
		var currentSlide = $('.active-slide') ;
		var nextSlide = currentSlide.next();
	switch(className) {
		case "next":
			chosenLangs = sendQueryLang(document.getElementsByTagName('input'));
			if (chosenLangs.length < 1) {
				document.getElementById("warning").innerHTML = "Hey! You haven't chosen a language yet!";
				break;
			} else if (chosenLangs.length == 1) {
				window.location.href = "list_classes.html?language=" + chosenLangs[0][1];
				break;
			} else {
				currentSlide.fadeOut(600).removeClass('active-slide');
				nextSlide.addClass('active-slide').fadeIn(600);
				printButtons(chosenLangs);
				$(':input').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
			}
			break;
	}
}

$(document).ready(main);
