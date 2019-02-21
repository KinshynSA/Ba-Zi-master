// match-height

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
	byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
	r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
	"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
	display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
	this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
	}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});


//russ datepick



	// custom

;$(document).ready(function() {

   //  8 dvorcov
     $('.but_right').click(function(){
													 $('.block_pop').show('slow'); 
													 $(this).hide('slow');
                        });
                            $('.closeB').click(function(){
													$('.but_right').show('slow');
													 $('.block_pop').hide('slow'); 
                        });
    
    //  end 8 dvorcov


    // hexagrams
    $('.table_hexagrams_redact_butt').click(function(){
    	$('.table_hexagrams').hide();
    	$('.block_pop').show(); 
    });
    $('.table_hexagrams_close').click(function(){
		$('.table_hexagrams').show();
		$('.block_pop').hide(); 
    });

    // stratagema
    $('.table_stratagema_redact_butt').click(function(){
    	$('.table_stratagema').hide();
    	$('.block_pop').show(); 
    });
    $('.table_hexagrams_close').click(function(){
		$('.table_stratagema').show();
		$('.block_pop').hide(); 
    });
    

    // phenomenon
    $('.table_phenomenon_redact_butt').click(function(){
    	$('.table_phenomenon, .phenomenon_under-title').hide();
    	$('.right_block-phenomenon').show(); 
    });
    $('.table_phenomenon_close').click(function(){
		$('.table_phenomenon, .phenomenon_under-title').show();
		$('.right_block-phenomenon').hide(); 
    });



	//  PageScroll  start
  $('a.order').mPageScroll2id();
	//  PageScroll end  

  // Header menu
	$('.nav_mob').on('click', function() {
		$('.icon_menu').toggleClass('icon_menu1');
		$('.mobile_side').toggleClass('mobile_side1');
	});
  // sidebar menu
	$('.sidebar_nav_button').click( function() {
		$('.sidebar_nav').hide('slow');
		$('.sidebar_info').show('slow');
		$('.sidebar').addClass('sidebar_2');
		$('.content_block').addClass('content_block_2');
	});
	$('.sidebar_nav_close').click( function() {
		$('.sidebar_info').hide('slow');
		$('.sidebar_nav').show('slow');
		$('.sidebar').removeClass('sidebar_2');
		$('.content_block').removeClass('content_block_2');
	});


  // nav_calendar_day_box
	$('.nav_calendar_time').click( function() {
		$('.nav_calendar_time').hide('slow');
		$('.nav_calendar_time_close').show('slow');
		$('.nav_calendar_day_box .list_nav_calendar_times_box').addClass('show');
		// $('.content_block').addClass('content_block_2');
	});
	$('.nav_calendar_time_close').click( function() {
		$('.nav_calendar_time_close').hide('slow');
		$('.nav_calendar_time').show('slow');
		$('.nav_calendar_day_box .list_nav_calendar_times_box').removeClass('show');
		// $('.content_block').removeClass('content_block_2');
	});

	// 
	// $('.nav_calendar_time').on('click', function() {
	// 	$('.nav_calendar_day_box .list_nav_calendar_times_box').toggleClass('show');
	// });

	// Slider pause
	$('.pause').on('click', function() {
		$('.pause').toggleClass('play');
		$('.body_slides').toggleClass('pause_slide');
	});

	$('.box_calendar').matchHeight();

	$('.spoiler-body').hide(300);
	$(document).on('click','.spoiler-head',function (e) {
		e.preventDefault()
		$(this).parents('.spoiler-wrap').toggleClass("active").toggleClass('closed').find('.spoiler-body').slideToggle();
	})
	
if($.magnificPopup){
	$('.popup-with-zoom-anim').magnificPopup({
		
		showCloseBtn: false,
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
	});

	$(document).on('click', '.close_btn', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
}

if (document.getElementsByClassName('datepicker').length !== 0) {
	$( ".datepicker" ).datepicker();

	$('.additionalDt').click(function(){
		$(this).siblings( ".datepicker" ).datepicker( "show" );
	})
}

});