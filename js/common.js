$(document).ready(function() {

    $('.but_right').click(function(){
		$('.block_pop').show('slow'); 
		$(this).hide('slow');
    });
    $('.closeB').click(function(){
		$('.but_right').show('slow');
		$('.block_pop').hide('slow'); 
    });


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
    $('.popup_phenomenon_item_var').click(function(){
    	$(this).prev('input').click();
    });


    $('.link_calendar').click(function(){
    	$('.popup-qimen_container').removeClass('popup-qimen_container-hidden');
    });
    $('.popup-qimen_close').click(function(){
    	$('.popup-qimen_container').addClass('popup-qimen_container-hidden');
    });


	//  PageScroll  start
  	$('a.order').mPageScroll2id();
	//  PageScroll end  

  	// Header menu
	$('.nav_mob').on('click', function() {
		$('.icon_menu').toggleClass('icon_menu1');
		$('.mobile_side').toggleClass('mobile_side1');
	});


	function topMenuPunktsDecor(){
		document.querySelectorAll('.menu_box_2 .menu').forEach(function(item){
			var parentWidth = item.offsetWidth;
			var previousValue = 0;
			item.querySelectorAll('li').forEach(function(item, i, arr){
				item.style.borderLeft = '1px solid #fff';
				previousValue = previousValue + item.offsetWidth;
				if(previousValue>parentWidth){
					previousValue = item.offsetWidth;
					item.style.borderLeft = 'none';
				}
			});
		});
	};
	topMenuPunktsDecor();
	window.addEventListener('resize',topMenuPunktsDecor);
	

  	// sidebar menu
	$('.sidebar_nav_button').click( function() {
		$('.sidebar').addClass('sidebar_2');
	});
	$('.sidebar_nav_close').click( function() {
		$('.sidebar').removeClass('sidebar_2');
	});


	// Slider pause
	$('.pause').on('click', function() {
		$('.pause').toggleClass('play');
		$('.body_slides').toggleClass('pause_slide');

		var status = getCookie('sliderSwitch');
		console.log(status,toggleStatus(status));
		setCookie('sliderSwitch', toggleStatus(status), {expires: 0, path: "/"});
	});

	function toggleStatus(n){
		return +n ? n=0 : n=1;
	}

	function sliderChekStatus(){
		var status = getCookie('sliderSwitch');
		console.log(+status);
		if(status == undefined){
			setCookie('sliderSwitch', false, {expires: 0, path: "/"})
		} else if(+status) $('.pause').addClass('play');
	}
	sliderChekStatus();

	function getCookie(name) {
	  var matches = document.cookie.match(new RegExp(
	    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	  ));
	  return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	function setCookie(name, value, options) {
	  options = options || {};

	  var expires = options.expires;

	  if (typeof expires == "number" && expires) {
	    var d = new Date();
	    d.setTime(d.getTime() + expires * 1000);
	    expires = options.expires = d;
	  }
	  if (expires && expires.toUTCString) {
	    options.expires = expires.toUTCString();
	  }

	  value = encodeURIComponent(value);

	  var updatedCookie = name + "=" + value;

	  for (var propName in options) {
	    updatedCookie += "; " + propName;
	    var propValue = options[propName];
	    if (propValue !== true) {
	      updatedCookie += "=" + propValue;
	    }
	  }

	  document.cookie = updatedCookie;
	}

	
	// align items to height (start)
	function heightEqualize(selector){
		function func(){
			var arr = document.querySelectorAll(selector);
			if(!arr.length) return false;
			var minHeight = 0;
			arr.forEach(function(item,i,arr){
				item.style.minHeight = 'auto';
				var computedStyle = getComputedStyle(item);
				var currentHeight = parseFloat(computedStyle.height);
				console.log(i,currentHeight);
				minHeight = Math.max(minHeight, currentHeight);
			});
			arr.forEach(function(item,i,arr){
				item.style.minHeight = minHeight + 'px';
			});
		};
		setTimeout(func,0,selector);
	}
	heightEqualize('.box_calendar');
	// align items to height (end)



	$('.spoiler-body').hide(300);
	$(document).on('click','.spoiler-head',function (e) {
		e.preventDefault()
		$(this).parents('.spoiler-wrap').toggleClass("active").toggleClass('closed').find('.spoiler-body').slideToggle();
	})


	if (document.getElementsByClassName('datepicker').length !== 0) {
		$( ".datepicker" ).datepicker();

		$('.additionalDt').click(function(){
			$(this).siblings( ".datepicker" ).datepicker( "show" );
		})
	}


	// Опции отображения в сайдбаре
	$('.sidebar-switcher').click(function(){
		var c = this.dataset.option;
		jQuery('.' + c + '').toggleClass('hidden');
		if($('.box_calendar').length){
			heightEqualize('.box_calendar');
		}
	});


	// Кнопка таймера
	function timerMake(){
		document.querySelectorAll('.timerok').forEach(function(item){
			function func(){
				var t = new Date();
				function timeFormatter(i){
					return i = (i>=10) ? i : `0${i}`;
				}
				if(document.body.offsetWidth>480){
					item.innerHTML = `${timeFormatter(t.getHours())}:${timeFormatter(t.getMinutes())}:${timeFormatter(t.getSeconds())}`;
				} else {
					item.innerHTML = `${timeFormatter(t.getHours())}:${timeFormatter(t.getMinutes())}`;
				}				
			}
			func();
			setInterval(func,1000);
		})
	};

	timerMake();	
	window.addEventListener('resize',timerMake);



	// "Разиновость" таблицы иароглифов
	var ieghpTableResize = function(){
	    var arr = document.querySelectorAll('.ieghp-table');
	    arr.forEach(function(item,i,arr){
	    	var sizeParentX = Math.min(item.parentElement.offsetWidth, 722);
	    	var sizeTableX = 722;
	    	item.style.transform = 'scale(' + sizeParentX/sizeTableX + ')'; 
	    	item.style.left = -(sizeTableX*(1 - sizeParentX/sizeTableX))/2 + 'px';
	    	item.style.top = -(sizeTableX*(1 - sizeParentX/sizeTableX))/2 + 'px';
	    });
	};

	ieghpTableResize();
	window.addEventListener('resize',ieghpTableResize);
});