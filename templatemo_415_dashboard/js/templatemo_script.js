/* Credit: http://www.templatemo.com */

$(document).ready( function() {

	// sidebar menu click
	$(' li.sub a').click(function(){
		if($(this).parent().hasClass('open')) {
			$(this).parent().removeClass('open');
		} else {
			$(this).parent().addClass('open');
		}
	});
	$(' li.subb a').click(function(){
		if($(this).parent().hasClass('openSubMenuList')) {
			$(this).parent().removeClass('openSubMenuList');
		} else {
			$(this).parent().addClass('openSubMenuList');
		}
	});// sidebar menu click

}); // document.ready
