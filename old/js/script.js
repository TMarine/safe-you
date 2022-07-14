/************************
 ****** Show Menu  ******
 ***********************/
$(document).ready(function () {

    $(".showMenuBtn").click(function () {
        $(".main-menu").toggleClass("menu-show");

    });
    $(document).mouseup(function (e) {
        var container = $(".main-menu");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".main-menu").removeClass("menu-show");
        }
    });

});
/************************
 ******Counter ******
 ***********************/

$(document).ready(function() {
		$('.minus').click(function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.plus').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
	});
/************************
 ******Datepicker ******
 ***********************/
       
jQuery(document).ready(function () {
    'use strict';
        
    jQuery('#filter-date, #search-from-date, #search-to-date').datetimepicker();
});
      