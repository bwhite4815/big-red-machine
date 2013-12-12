// Gumby is ready to go
Gumby.ready(function() {
	console.log('Gumby is ready to go...', Gumby.debug());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
});

// Oldie document loaded
Gumby.oldie(function() {
	console.log("This is an oldie browser...");
});

// Touch devices loaded
Gumby.touch(function() {
	console.log("This is a touch enabled device...");
});

// Document ready
$(function() {

	$('#mobile-menu-toggle').click(function(){
		$('body').toggleClass('offcanvas');
		return false;
	});

	$('#content-region').click(function(){
		$('body').removeClass('offcanvas');
		return false;
	});
	
	$('#about-menu-link').click(function() {
		console.log('about');
		ajaxRequest('about.html');
		return false;
	});
	
	$('#blog-menu-link').click(function() {
		console.log('blog');
		ajaxRequest('blog.html');
		return false;
	});
	$('#projects-menu-link').click(function() {
		console.log('projects');
		ajaxRequest('projects.html');
		return false;
	});

	function ajaxRequest(str) {
		$.ajax({
		  url: "partials/"+str,
		  context: document.body
		}).done(function(html) {
			// console.log('recieved'+str);
			// console.log('recieved'+html);
			$('#content-region').hide();
			$('#content-region .centered').html(html);
			$('#content-region').fadeIn('fast');
		  // $( this ).addClass( "done" );
		});
	}
});

