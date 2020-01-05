// Open menu animation
var menuBlock = $('.menu-block');
var navbar = $('#navbar-wrapper')
var openNavbar = $('#open-navbar');
var menuContent = $('#menu-content');

menuBlock.on('click', function() {

    if(menuBlock.find('.wrapper').eq(1).text() == 'Menu') {
        openNavbar.css({display: 'block'});

        function startOpening() {
            TweenMax.to(navbar, .4, {opacity: 0});

            TweenMax.staggerTo(openNavbar.find('.wrapper').eq(0).find('.open-slice'), .4, {y: 0 + '%'}, .1); 
            TweenMax.staggerTo(openNavbar.find('.wrapper').eq(1).find('.open-slice'), .4, {y: 0 + '%'}, .1);
        }

        function finishOpening() {
            menuBlock.find('.wrapper').eq(1).text('EXIT');

            navbar.css({zIndex: 200 });

            TweenMax.to(menuContent, .4, {opacity: 1});
            TweenMax.to(navbar, .4, {opacity: 1});
        }

        TweenMax.from(menuBlock, 1.5, {
            onStart: startOpening,
            onComplete: finishOpening
        });
    }

    if(menuBlock.find('.wrapper').eq(1).text() == 'EXIT') {
        function startClosing() {
            TweenMax.to(menuContent, .4, {opacity: 0});
            TweenMax.to(navbar, .4, {opacity: 0});
        }

        function finishClosing() {
            function closing() {
                TweenMax.staggerTo(openNavbar.find('.wrapper').eq(0).find('.open-slice'), .4, {y: - 100 + '%'}, .1); 
                TweenMax.staggerTo(openNavbar.find('.wrapper').eq(1).find('.open-slice'), .4, {y: 100 + '%'}, .1);

                navbar.css({zIndex: 10 });
                menuBlock.find('.wrapper').eq(1).text('Menu');
            }

            function completeClosing() {
                openNavbar.css({display: 'none'});
                TweenMax.to(navbar, .4, {opacity: 1});
            }

            TweenMax.from(menuBlock, 1.5, {
                onStart: closing,
                onComplete: completeClosing
            });
        }

        TweenMax.from(menuBlock, .4, {
            onStart: startClosing,
            onComplete: finishClosing
        });
    }
});

// Hover menu content animation
var menuLink = menuContent.find('ul li');

menuLink.on('mouseenter', function() {
    TweenMax.to($(this).siblings(), .45, {color: '#b7b7b7'});

    menuLink.on('mouseleave', function() {
        TweenMax.to(menuLink, .45, {color: '#423d3d'});
    });
});

(function($) {
        
    var menuContainer = $('.UI-menu-container');
    var uiContainer = $('#UI-container');
    var menuSlice = $('.menu-slice');
        
    // Start animation on UI menu
    var allow = 0;
    var delayTime = (0.9 + (menuSlice.length - 1) * 0.3);
    
    function startWebAnimation() {
        TweenMax.staggerTo(menuSlice, .9, {y : 0 + '%'}, .3);
    }
    
    function finishWebAnimation() {
        uiContainer.removeClass('overflow');
        menuContainer.css({width: '', height:''});
        
        allow = 1;
    }
    
    TweenMax.from(menuContainer, delayTime, { onStart: startWebAnimation,onComplete: finishWebAnimation });
    
    // MenuSlice animation on mouseEnter and mouseLeave
    menuSlice.on('mouseenter', function() {
        
        if(allow == 1) {
            var prevLenght = $(this).prevAll().length;
            var nextLenght = $(this).nextAll().length;
            var index = $(this).index();
            var parentIndex = $(this).parent().index();
                        
            TweenMax.to($(this), .35, {
                height: 450,
                width: 490
            });

            // Before element
            for ( i = 0; i < prevLenght; i++ ) {
                TweenMax.to(menuContainer.eq(parentIndex).children().eq(i), .35, {
                    height: 400 - ((prevLenght - i)*6) + 'px',
                    width: 95 * ((i+1)/(prevLenght+1))
                });
            }
            // After element
            for ( i = 0; i < nextLenght; i++ ) {
                TweenMax.to(menuContainer.eq(parentIndex).children().eq(index + i + 1), .35, {
                    height: 400 - ((i+1)*6) + 'px',
                    width: 95 - (95 * ((i+1)/(nextLenght + 1)))
                });
            }

            $(this).on('mouseleave', function() {
                 TweenMax.to(menuSlice, .35, {
                     height: 400,
                     width: 95
                 });
            });
        }

    });
        
})(jQuery)