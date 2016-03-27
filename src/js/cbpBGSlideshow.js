System.register(["jquery", "imagesloaded"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jquery_1, imagesloaded_1;
    function SlideShow() {
        var $items = jquery_1.default("#cbp-bislideshow").children("li"), itemsCount = $items.length, $controls = jquery_1.default('#cbp-bicontrols'), navigation = {
            $navPrev: $controls.find('span.cbp-biprev'),
            $navNext: $controls.find('span.cbp-binext'),
            $navPlayPause: $controls.find('span.cbp-bipause')
        }, current = 0, slideshowtime, isSlideshowActive = true, interval = 3500;
        function init(config) {
            var slide = imagesloaded_1.default("#cbp-bislideshow", function () {
                $items.each(function () {
                    var $item = jquery_1.default(this);
                    $item.css('background-image', 'url(' + $item.find('img').attr('src') + ')');
                });
                $items.eq(current).css('opacity', 1);
                initEvents();
                startSlideshow();
            });
        }
        function initEvents() {
            navigation.$navPlayPause.on('click', function () {
                var $control = jquery_1.default(this);
                if ($control.hasClass('cbp-biplay')) {
                    $control.removeClass('cbp-biplay').addClass('cbp-bipause');
                    startSlideshow();
                }
                else {
                    $control.removeClass('cbp-bipause').addClass('cbp-biplay');
                    stopSlideshow();
                }
            });
            navigation.$navPrev.on('click', function () {
                navigate('prev');
                if (isSlideshowActive) {
                    startSlideshow();
                }
            });
            navigation.$navNext.on('click', function () {
                navigate('next');
                if (isSlideshowActive) {
                    startSlideshow();
                }
            });
        }
        function navigate(direction) {
            var $oldItem = $items.eq(current);
            if (direction === 'next') {
                current = current < itemsCount - 1 ? ++current : 0;
            }
            else if (direction === 'prev') {
                current = current > 0 ? --current : itemsCount - 1;
            }
            var $newItem = $items.eq(current);
            $oldItem.css('opacity', 0);
            $newItem.css('opacity', 1);
        }
        function startSlideshow() {
            isSlideshowActive = true;
            clearTimeout(slideshowtime);
            slideshowtime = setTimeout(function () {
                navigate('next');
                startSlideshow();
            }, interval);
        }
        function stopSlideshow() {
            isSlideshowActive = false;
            clearTimeout(slideshowtime);
        }
        return { init: init };
    }
    exports_1("SlideShow", SlideShow);
    return {
        setters:[
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (imagesloaded_1_1) {
                imagesloaded_1 = imagesloaded_1_1;
            }],
        execute: function() {
            ;
        }
    }
});
