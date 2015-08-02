$(function() {
	$('.project').click(function(e){
		e.preventDefault();

		$this = $(this);
		$icon = $this.find('i');

		$this.next().slideToggle();

		if($icon.hasClass('fa-plus')) {
			$icon.removeClass('fa-plus').addClass('fa-minus');
		} else {
			$icon.removeClass('fa-minus').addClass('fa-plus');
		}
	});
	$('.hero h1').addClass('animated bounceInDown');

	$('.hero h2').addClass('animated bounceInRight');
	$('.hero .github').addClass('animated bounceInUp');
	$('.hero .linkedin').addClass('animated bounceInLeft');
	$('.hero .twitter').addClass('animated bounceInRight');

	//Ajax contact form request
	$('#contactForm').submit(function(e) {
		var form = $(this);
		var messageBox = $('.messageBox');

		e.preventDefault();

		$.ajax({
			url: form.attr("action"),
			data: form.serialize(),
			success: function(data) {
				var message = data.split(':');

				if (message[0] === "ok") {
					messageBox.addClass('alert-success').removeClass('alert-danger').text(message[1]).fadeIn('slow',
						function() {
							messageBox.delay(5000).fadeOut();
						});
				} else {
					messageBox.addClass('alert-danger').removeClass('alert-success').text(message[1]).fadeIn('slow',
						function() {
							messageBox.delay(5000).fadeOut();
						});
				}
			}
		});
	});
});