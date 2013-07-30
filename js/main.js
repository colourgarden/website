
$(function(){

	// Check for feature areas
	if($('.feature-area').length){
		$('.masthead').waypoint(function() {
		  $('.feature-area').addClass('go');
		});
	}

});
