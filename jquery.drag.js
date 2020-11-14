// Draggable plugin b
(function($) {
    $.fn.drag = function(options) {
        options = $.extend({
            handle: null,
            cursor: 'move',
            onMoved:function(){},
			onDrop: function(){}
        }, options);

        var $handle = this,
            $drag = this;

        if( options.handle ) {
            $handle = $(options.handle);
        }

        $handle
            .css('cursor', options.cursor)
            .on("touchstart mousedown", function(e) {
                var pos = e;
                if(e.type === "touchstart"){
                    pos = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                }
                var x = $drag.offset().left - pos.pageX,
                    y = $drag.offset().top - pos.pageY,
                    z = $drag.css('z-index');

                $drag.css('z-index', 100000);

                $(document.documentElement)
                    .on('touchmove.drag mousemove.drag', function(e) {
                        var pos = e;
                        if(e.type === "touchmove"){
                            pos = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                        } 					
                        $drag.offset({
                            left: x + pos.pageX,
                            top: y + pos.pageY
                        });
                        options.onMoved();
                    })
                    .on('touchend mouseup', function() {
                        $(this).off('touchmove.drag mousemove.drag');
                        $drag.css('z-index', z);
                    });

                // disable selection n
                e.preventDefault();
            })
			.on('touchend mouseup', function() {
				$handle.off('touchmove mousemove');
				options.onDrop();
			});
    };
})(jQuery);