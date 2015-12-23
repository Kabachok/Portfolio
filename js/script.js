$(document).ready(function() {
	// toggle the bav bar
	$(".navbar-toggle").click(function(){
		$(".collapse").toggle();
	});
	// click on the menu item
	$(".nav-button").click(function(){
		$(".nav-button").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
		$(".collapse").toggle();
	});
	// hover the thumbnail
	if ($(window).width()>750){
		$(".js-hvr").mouseover(function(){
			$(this).css("border", "transparent");
			var elemId = $(this).attr("id");
			var id = counter = parseInt(elemId.slice(-1));
			$("#pan"+id).show();
		});
		$(".js-hvr").mouseout(function(){
			$(this).css("border", "1px dotted #F4E8FF");
			var elemId = $(this).attr("id");
			var id = counter = parseInt(elemId.slice(-1));
			$("#pan"+id).hide();
		});
	}
	
	// activate menu buttons while scrolling
	var homePosition = $('#home-screen').offset().top,
		aboutPosition = $('#about-screen').offset().top,
		projectsPosition = $('#projects-screen').offset().top,
		contactsPosition = $('#contacts-screen').offset().top;

	$(document).on('scroll', function(){
		if($(document).scrollTop() <= (homePosition + 500)) {
			$(".nav-button").each(function(){
				$(this).removeClass("active");
			});
			$("#nav-home").addClass("active");
		}
		else if ($(document).scrollTop() <= (aboutPosition + 500)) {
			$(".nav-button").each(function(){
				$(this).removeClass("active");
			});
			$("#nav-about").addClass("active");
		}
		else if ($(document).scrollTop() <= (projectsPosition + 500)) {
			$(".nav-button").each(function(){
				$(this).removeClass("active");
			});
			$("#nav-projects").addClass("active");
		}
		else {
			$(".nav-button").each(function(){
				$(this).removeClass("active");
			});
			$("#nav-contscts").addClass("active");
		}
	});
});