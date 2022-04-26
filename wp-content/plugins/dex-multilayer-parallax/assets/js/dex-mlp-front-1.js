(function($){
	function is_touch_device(){
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}
	$(function(){
		var $layers = { 'bg': [], 'ly': [] }, $sto;
		$('.dex-mlp-parallax').each(function(){
			$(this)
				.attr( 'data-stellar-horizontal-offset', parseInt( $(this).offset().top ) )
				.find( '.dex-container' ).width( $(this).parent().width() );
			if( $(this).hasClass( 'dex-custom' ) ){
				if( $(this).hasClass( 'dex-force-fw' ) ){
					$(this).css({
						'width': $(window).width(),
						'max-width': $(window).width(),
						'left': $(this).position().left - $(this).offset().left
					});
				}
			} else if( $(this).hasClass( 'dex-fullscreen' ) ){
				$(this).css({
					'width': $(window).width(),
					'max-width': $(window).width(),
					'height': $(window).height(),
					'left': $(this).position().left - $(this).offset().left
				});
			}
			if( $(this).hasClass( 'dex-mouse' ) ){
				var $lyrs = $(this).find('.dex-mlp-layer');
				$layers.bg.push( {
					'elem': this,
					'x': 50,
					'y': 50,
					'r': parseFloat( $(this).attr('data-move-ratio') / 10 )
				} );
				$lyrs.each(function(){
					$layers.ly.push( {
						'elem': this,
						'x': parseInt( this.style.left ),
						'y': parseInt( this.style.top ),
						'r': parseFloat( $(this).attr('data-move-ratio') / 10 )
					} );
				});
			}
		});
		if( !is_touch_device() ){
			if( $layers.bg.length > 0 ){
				$('html').on('mousemove',function(e){
					var x = e.clientX, y = e.clientY, w = $(window).width(), h = $(window).height();
					for( var i = 0; i < $layers.bg.length; i++ ){
						$layers.bg[i].elem.style.backgroundPosition =
							( $layers.bg[i].r * ( w / 2 - x ) + $layers.bg[i].x ) + '% ' +
							( $layers.bg[i].r * ( h / 2 - y ) + $layers.bg[i].y ) + '%';
					}
					for( var i = 0; i < $layers.ly.length; i++ ){
						$layers.ly[i].elem.style.left = ( $layers.ly[i].r * ( w / 2 - x ) + $layers.ly[i].x ) + 'px';
						$layers.ly[i].elem.style.top = ( $layers.ly[i].r * ( h / 2 - y ) + $layers.ly[i].y ) + 'px';
					}
				});
			}
			$(window).stellar({
				responsive: true,
				horizontalScrolling: false,
				verticalScrolling: true
			});
		}
		$('.dex-mlp-video-bg').YTPlayer();
		$(window).resize(function(){
			// clearTimeout( $sto );
			// $sto = setTimeout(function(){
				$('.dex-mlp-parallax').each(function(){
					$(this).find('.dex-layer-container,.dex-container').width( $(this).parent().width() );
					if( $(this).hasClass( 'dex-custom' ) ){
						if( $(this).hasClass( 'dex-force-fw' ) ){
							$(this).css({
								'width': $(window).width(),
								'max-width': $(window).width(),
								'left': $(this).position().left - $(this).offset().left
							}).find('.dex-layer-container').width( $(window).width() );
						}
					} else if( $(this).hasClass( 'dex-fullscreen' ) ){
						$(this).css({
							'width': $(window).width(),
							'max-width': $(window).width(),
							'height': $(window).height(),
							'left': $(this).position().left - $(this).offset().left
						});
					}
				});
			// },300);
		});
	});
})(jQuery);
