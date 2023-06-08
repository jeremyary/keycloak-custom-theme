/* global chrometwo_require */
/* jshint browser: true */

(function($) {

	"use strict";

	var header_nav     = $('#header-nav'),
		mobile_nav_btn = $('#mobile-nav-btn'),
		footer_top     = $('.footer-top'),
		to_top_link    = $('#to-top a');

	mobile_nav_btn.collapse();

	// Bind handleResize, throttled so it only executes once every ___
	// milliseconds, since resize events fire like miniguns.
	//$(window).resize( _.throttle(handleResize, 320) );


	$(document).ready(function() {
		// Utility Tray
	    var tray,
	        ANIM_DUR = 200; // ms

	    var top_level_clickables = $('.utility-nav li a, .btn-utility'),
	        utility_link = $('.utility-link'),
	        tray = $('.utility-tray');

	    top_level_clickables.on('click', function(e) {

	        e.preventDefault();
	        var $this = $(this);
	        top_level_clickables.not(this).removeClass('clicked');

	        if (!$this.hasClass('clicked')) {
	            var data = $this.attr('data-target'),
	                not_this = $(utility_link).not(data);

	            // Hide the undesired content
	            //===========================
	            not_this.stop().hide().animate({ opacity : 0}, ANIM_DUR);

	            // show() the element *before* setting its height because
	            // hidden elements don't have height (a browser
	            // optimization)
	            $(data).stop().show().animate({ opacity : 1 }, ANIM_DUR);
	            // element is visible, so we can now set the height


	            $this.addClass('clicked');

	            tray.slideDown().addClass('open');

	            // Focus on search input
	            //==================================================================
	            if ( $this.hasClass('btn-search') ) {
	                $('#site-search').find('input[type="text"]').focus();
	            }
	        } else {
	            $this.removeClass('clicked');
	            tray.slideUp().removeClass('open');
	        }

	    });

	    // Get click event on page to slide tray up
	    //==================================================================
	    $('body').on('click.hideTray', function(e) {
	        var clicked_or_tray;
	        if ( tray.hasClass('open') ) {
	            // Get all possible icons and clicks inside the tray, so it doesn't slide up
	            clicked_or_tray = !$(e.target).hasClass('clicked') &&
	                !$(e.target).parent().hasClass('clicked') &&
	                !$(e.target).parent().parent().hasClass('clicked') &&
	                !$(e.target).parent().parent().hasClass('other-active') &&
	                !$(e.target).parentsUntil('.utility-tray').parent().hasClass('utility-tray') &&
	                !$(e.target).parent().hasClass('utility-tray');

	            if (clicked_or_tray) {
	                e.preventDefault();
	                top_level_clickables.removeClass('clicked');
	                tray.slideUp().removeClass('open').find(utility_link).stop().animate({ opacity: 0 }, ANIM_DUR);
	            }
	        }
	    });
	});


})(jQuery);
