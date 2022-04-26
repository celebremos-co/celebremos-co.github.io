/*
 *
 *		CUSTOM.JS
 *
 */

(function($){
	
	"use strict";
	
        // ANIMATE CHARTS //
	function animate_charts() {
		
		$(".statistics-container .animate-chart:in-viewport").each(function() {
			
			if(!$(this).hasClass("animated")) {
				
				$(this).addClass("animated");
				
                            var lc = document.getElementById('line-chart');
                            if (typeof (lc) != 'undefined' && lc != null)
                            {
				// LINE CHART //
				var data = {
					labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
					datasets : [
						{
							fillColor: "transparent",
							strokeColor: "transparent",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [0,0,0,0,0,0,0,0,0,0,0,0]
						},
						{
							fillColor: "transparent",
							strokeColor: "transparent",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [60,60,60,60,60,60,60,60,60,60,60,60]
						},
						{
							fillColor: "transparent",
							strokeColor: "#fe5e3e",
							pointColor: "#fff",
							pointStrokeColor: "fe5e3e",
							data : [5,10,7,15,12,16,11,13,10,2,20,30]
						},
						{
							fillColor: "transparent",
							strokeColor: "#00d2ed",
							pointColor: "#fff",
							pointStrokeColor: "#00d2ed",
							data : [10,20,22,38,30,40,28,22,51,45,55,50]
						},
						{
							fillColor: "transparent",
							strokeColor: "#00e095",
							pointColor: "#fff",
							pointStrokeColor: "#00e095",
							data : [20,25,32,28,35,23,33,48,31,25,10,20]
						}
					]
				}
			
				var line_chart = new Chart(document.getElementById("line-chart").getContext("2d")).Line(data, { 
					responsive: true,
					showTooltips: false,
					bezierCurve: false,
					pointDotStrokeWidth: 2
				});
                            }
                            
                            var flc = document.getElementById('fill-line-chart');
                            if (typeof (flc) != 'undefined' && flc != null)
                            {
				// FILL LINE CHART //
				var data = {
					labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
					datasets : [
						{
							fillColor: "transparent",
							strokeColor: "transparent",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [0,0,0,0,0,0,0,0,0,0,0,0]
						},
						{
							fillColor: "transparent",
							strokeColor: "transparent",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [60,60,60,60,60,60,60,60,60,60,60,60]
						},
						{
							fillColor: "rgba(0, 210, 237, 0.8)",
							strokeColor: "rgba(0, 210, 237, 0.8)",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [10,20,22,38,30,40,28,22,51,45,55,50]
						},
						{
							fillColor: "rgba(0, 224, 149, 0.8)",
							strokeColor: "rgba(0, 224, 149, 0.8)",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [20,25,32,28,35,23,33,48,31,25,10,20]
						},
						{
							fillColor: "rgba(254, 94, 62, 0.8)",
							strokeColor: "rgba(254, 94, 62, 0.8)",
							pointColor: "transparent",
							pointStrokeColor: "transparent",
							data : [5,10,7,15,12,16,11,13,10,2,20,30]
						}
					]
				}
			
				var fill_line_chart = new Chart(document.getElementById("fill-line-chart").getContext("2d")).Line(data, { 
					responsive: true,
					showTooltips: false,
					bezierCurve: false,
					pointDotStrokeWidth: 2
				});
                            }
                            
                            var bc = document.getElementById('bar-chart');
                            if (typeof (bc) != 'undefined' && bc != null)
                            {	
				// BAR CHARTS //
				var data = {
					labels: ["First sem", "Second sem", "Third sem"],
					datasets: [
						{
							label: "",
							fillColor: "transparent",
							strokeColor: "transparent",
							highlightFill: "transparent",
							highlightStroke: "transparent",
							data: [100, 100, 100]
						},
						{
							label: "",
							fillColor: "#fe5e3e",
							strokeColor: "#fe5e3e",
							highlightFill: "#fe5e3e",
							highlightStroke: "#fe5e3e",
							data: [40, 55, 60]
						},
						{
							label: "",
							fillColor: "#00d2ed",
							strokeColor: "#00d2ed",
							highlightFill: "#00d2ed",
							highlightStroke: "#00d2ed",
							data: [50, 75, 70]
						},
						{
							label: "",
							fillColor: "#00e095",
							strokeColor: "#00e095",
							highlightFill: "#00e095",
							highlightStroke: "#00e095",
							data: [65, 50, 40]
						}
					]
				};
				
				var bar_chart  = new Chart(document.getElementById("bar-chart").getContext("2d")).Bar(data, { 
					responsive: true,
					showTooltips: false,
					barShowStroke: true,
					barStrokeWidth: 10,
					barValueSpacing: 10,
					barDatasetSpacing: 10
				});
                            }
				
                            var cc = document.getElementById('circle-chart');
                            if (typeof (cc) != 'undefined' && cc != null)
                            {
				// PIE CHART
				var data = [					
					{
						value: 15,
						color: "#fe5e3e",
						highlight: "#fe5e3e",
						label: "#fe5e3e"
					},			
					{
						value: 25,
						color: "#00d2ed",
						highlight: "#00d2ed",
						label: "#00d2ed"
					},
					{
						value: 30,
						color: "#00e095",
						highlight: "#00e095",
						label: "#00e095"
					},										
					{
						value: 30,
						color:"#e1e1e1",
						highlight: "#e1e1e1",
						label: "#e1e1e1"
					}
				]
				
				var circle_chart = new Chart(document.getElementById("circle-chart").getContext("2d")).Pie(data, { 
					responsive: true,
					showTooltips: false,
					animationSteps: 30
				});
                            }
					
			}
			
		});
		
	}
        
	// DETECT TOUCH DEVICE //
	function is_touch_device() {
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}
	
	
	// SHOW/HIDE MOBILE MENU //
	function show_hide_mobile_menu() {
		
		$("#mobile-menu-button").on("click", function(e) {
            
			e.preventDefault();
			
			$("#mobile-menu").slideToggle(300);
			
        });	
		
	}
	
	
	// MOBILE MENU //
	function mobile_menu() {
		
		if ($(window).width() < 992) {
			
			if ($("#menu").length > 0) {
			
				if ($("#mobile-menu").length < 1) {
					
					$("#menu").clone().attr({
						id: "mobile-menu",
						class: ""
					}).insertAfter("#header");
					
					$("#mobile-menu .megamenu > a").on("click", function(e) {
                        
						e.preventDefault();
						
						$(this).toggleClass("open").next("div").slideToggle(300);
						
                    });
					
					$("#mobile-menu .dropdown > a").on("click", function(e) {
                        
						e.preventDefault();
						
						$(this).toggleClass("open").next("ul").slideToggle(300);
						
                    });
				
				}
				
			}
				
		} else {
			
			$("#mobile-menu").hide();
			
		}
		
	}
	
	// HEADER SEARCH
	function header_search() {	
		
		$("#search-trigger").on("click", function(e) { 
	
			e.preventDefault();
			
			if(!$("#search-trigger").hasClass("open")) {
			
				$("#search-form-container").addClass("open-search-form");
				
			} else {
				
				$("#search-form-container").removeClass("open-search-form");
			
			}
			
			$(window).resize(function(){
				$("#search-form-container").removeClass("open-search-form");
			})
			
		});
		
		$("#search-form").after('<a class="search-form-close" href="#">x</a>');
		
		$("#search-form-container a.search-form-close").on("click", function(event){
			
			event.preventDefault();
			$("#search-form-container").removeClass("open-search-form");
			
		});
		
	 }
	
	
	// STICKY //
	function sticky() {
		
		var sticky_point = 155;
		
		$("#header").clone().attr({
			id: "header-sticky",
			class: ""
		}).insertAfter("header");
		
		$(window).scroll(function(){
			
			if ($(window).scrollTop() > sticky_point) {  
				$("#header-sticky").slideDown(300).addClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "hidden"});
			} else {
				$("#header-sticky").slideUp(100).removeClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "visible"});
			}
			
		});
		$("#header-sticky #logo img").attr("src","/assets/images/logo.png");
		
	}
	
 
	// PROGRESS BARS // 
	function progress_bars() {
		
		$(".progress .progress-bar:in-viewport").each(function() {
			
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated").animate({
					width: $(this).attr("data-width") + "%"
				}, 2000);
			}
			
		});
		
	}
	
	
	// COMPARISON BARS // 
	function comparison_bars() {
		
		$(".comparison-bars .progress .progress-bar:in-viewport").each(function() {
			
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated").animate({
					width: $(this).attr("data-width")/2 + "%"
				}, 2000);
			}
			
			if ($(this).attr("data-direction") == "left") {
				$(this).css({
					"right": 50 + "%",
					"text-align": "right"
				});
			} else {
				$(this).css({
					"left": 50 + "%",
					"text-align": "left"
				});
			}
			
		});
		
	}


	// CHARTS //
	function pie_chart() {
		
		$(".pie-chart:in-viewport").each(function() {
			
			$(this).easyPieChart({
				animate: 1500,
				lineCap: "square",
				lineWidth: $(this).attr("data-line-width"),
				size: $(this).attr("data-size"),
				barColor: $(this).attr("data-bar-color"),
				trackColor: $(this).attr("data-track-color"),
				scaleColor: "transparent",
				onStep: function(from, to, percent) {
					$(this.el).find(".pie-chart-details .value").text(Math.round(percent));
				}
			});
			
		});
		
	}
	
	// COUNTER //
	function counter() {
		
		$(".counter .counter-value:in-viewport").each(function() {
			
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated").jQuerySimpleCounter({
					start: 0,
					end: $(this).attr("data-value"),
					duration: 2000
				});	
			}
		
		});
		
	}
	
	// SHOW/HIDE GO TOP //
	function show_hide_go_top() {
		
		if ($(window).scrollTop() > $(window).height()) {
			$("#go-top").fadeIn(300);
		} else {
			$("#go-top").fadeOut(300);
		}
		
	}
	
	
	// GO TOP //
	function go_top() {				
		
		$("#go-top").on("click", function() {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
	}
	
	
	// INSTAGRAM FEED //
	function instagram_feed() {

		if ($('#instafeed').length > 0 ) {
		
			var nr = $('#instafeed').data('number');
			var userid = $('#instafeed').data('user');
			var accesstoken = $('#instafeed').data('accesstoken');
			
			var feed = new Instafeed({
				target: 'instafeed',
				get: 'user',
				userId: userid,
				accessToken: accesstoken,
				limit: nr,
				resolution: 'thumbnail'			
			});
			
			feed.run();		
		
		}
			
	}
	
	
	// FULL SCREEN //
	function full_screen() {
		
		if ($(window).width() > 767) {
			$(".full-screen").css("height", $(window).height() + "px");
		}
		
	}
	
	
	// ANIMATIONS //
	function animations() {
		
		animations = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 100,
			mobile: false,
			live: true
		})
		
		animations.init();
		
	}
	
	
	// DOCUMENT READY //
	$(document).ready(function(){
		
		// STICKY //
		sticky();
		
		
		// MENU //
		$(".menu").superfish({
			delay: 500,
			animation: {
				opacity: 'show',
				height: 'show'
			},
			speed: 300,
			autoArrows: true
		});
		
		
		// SHOW/HIDE MOBILE MENU //
		show_hide_mobile_menu();
		
		
		// MOBILE MENU //
		mobile_menu();
		
		
		// HEADER SEARCH //
		header_search();
		
		
		// FANCYBOX //
		$(".fancybox").fancybox({
			prevEffect: 'fade',
			nextEffect: 'fade'
		});
		
		
		// FULL SCREEN //
		full_screen();
		
	
		// OWL Carousel //
		// LOGOS SLIDER //
                if (jQuery('.owl-carousel.logos-slider').length > 0) {

                  var logos_sliders = new Array();
                    jQuery('.owl-carousel.logos-slider').each(function (index) {

                        var carousel_id = this.id;

                       logos_sliders[index] = $("#" + carousel_id).owlCarousel({
                            items: 5,
                            itemsDesktop: [1199, 5],
                            itemsDesktopSmall: [991, 4],
                            itemsTablet: [767, 3],
                            itemsMobile: [479, 2],
                            slideSpeed: 500,
                            autoPlay: true,
                            stopOnHover: true,
                            navigation: false,
                            navigationText: false,
                            pagination: false,
                            paginationNumbers: false,
                            mouseDrag: true,
                            touchDrag: true,
                            transitionStyle: false
                        });

                        $("#" + carousel_id + "nav .next").on("click", function () {
                            logos_sliders[index].trigger('owl.next');
                        });

                        $("#" + carousel_id + "nav .prev").on("click", function () {
                            logos_sliders[index].trigger('owl.prev');
                        });

                    });

                }
                
		
		// BRANDING SLIDER //
                if (jQuery('.owl-carousel.branding-slider').length > 0) {

                    var branding_sliders = new Array();
                    jQuery('.owl-carousel.branding-slider').each(function (index) {

                        var carousel_id = this.id;

                        branding_sliders[index] = $("#" + carousel_id).owlCarousel({
                            singleItem: true,
                            slideSpeed: 200,
                            autoPlay: true,
                            stopOnHover: true,
                            navigation: false,
                            navigationText: false,
                            pagination: false,
                            paginationNumbers: false,
                            mouseDrag: false,
                            touchDrag: true,
                            transitionStyle: "fade"
                        });

                        $("#" + carousel_id + "nav .next").on("click", function () {
                            branding_sliders[index].trigger('owl.next');
                        });

                        $("#" + carousel_id + "nav .prev").on("click", function () {
                            branding_sliders[index].trigger('owl.prev');
                        });



                    });

                }
		
		// TESTIMONIAL SLIDER //
		$(".owl-carousel.testimonials-slider").owlCarousel({
			singleItem: true,
			slideSpeed: 200,
			autoPlay: true,
			stopOnHover: true,
			navigation: true,
			navigationText: false,
			pagination: true,
			paginationNumbers: false,
			mouseDrag: false,
			touchDrag: true,
			transitionStyle: "fade"
		});
		
		// IMAGES SLIDER //
		$(".owl-carousel.images-slider").owlCarousel({
			singleItem: true,
			slideSpeed: 200,
			autoPlay: true,
			stopOnHover: true,
			navigation: false,
			navigationText: false,
			pagination: true,
			paginationNumbers: false,
			mouseDrag: true,
			touchDrag: true,
			transitionStyle: "fade"
		});
		
		
		// GOOGLE MAPS //
		$(".map").each(function(){
			
			var data_zoom = 15;
			
			if ($(this).attr("data-zoom") !== undefined) {
				data_zoom = parseInt($(this).attr("data-zoom"),10);
			}	
			
			$(this).gmap3({
				marker: {
					values: [{
						address: $(this).attr("data-address"),
						data: $(this).attr("data-address-details")
					}],
					options:{
						draggable: false
					},
					events:{
						click: function(marker, event, context){
							var map = $(this).gmap3("get"),
							infowindow = $(this).gmap3({get:{name:"infowindow"}});
							if (infowindow){
								infowindow.open(map, marker);
								infowindow.setContent(context.data);
							} else {
								$(this).gmap3({
									infowindow:{
										anchor:marker, 
										options:{content: context.data}
									}
								});
							}
						}
					}
				},
				map: {
					options: {
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						zoom: data_zoom,
						scrollwheel: false
                    }
				}
			});
			
		});
		
		
		// ISOTOPE //
		$(".isotope").imagesLoaded( function() {
			
			var container = $(".isotope");
			
			container.isotope({
				itemSelector: '.isotope-item',
				layoutMode: 'masonry',
				transitionDuration: '0.8s'
			});
			
			$(".filter li a").on("click", function() {
				$(".filter li a").removeClass("active");
				$(this).addClass("active");
	
				var selector = $(this).attr("data-filter");
				container.isotope({
					filter: selector
				});
	
				return false;
			});
	
			$(window).resize(function() {
				container.isotope();
			});
			
		});
		
		
		// PARALLX //
		if (!is_touch_device()) {
			
			$(window).stellar({
				horizontalScrolling: false,
				verticalScrolling: true,
				responsive: true
			});
			
		}
		
		
		// SHOW/HIDE GO TOP
		show_hide_go_top();
		
		
		// GO TOP //
		go_top();
		
		// INSTAGRAM FEED //
		instagram_feed();
		
		
		// ANIMATIONS //
		animations();
		
	
	});
	
	// WINDOW SCROLL //
	$(window).scroll(function() {
		
		comparison_bars();
		progress_bars();
		pie_chart();
		counter();
		animate_charts();
		show_hide_go_top();
		
	});
	
	
	// WINDOW RESIZE //
	$(window).resize(function() {

		mobile_menu();
		full_screen();
		
	});
	
})(window.jQuery);