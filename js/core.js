//start revolution slider
var revapis;

$(document).ready(function() {

    revapis = jQuery('.tp-banner-full-screen').revolution({
        delay: 10000000,
        startwidth: 1170,
        startheight: 650,
        hideThumbs: 10,
        navigationType: "none",
        fullWidth: "off",
        fullScreen: "off",
        fullScreenOffsetContainer: "#homeservices"
    });


});
//end revolution slider


$(document).ready(function() {
    //start countdown
    $('#sale-btn').css({
        visibility: 'hidden'

    });

    $('.ce-countdown-1,.ce-countdown-2').countEverest({
        //Set your target date here!
        day: 20,
        month: 10,
        year: 2015,
        timeZone: 7,
        hoursWrapper: '.ce-hours .ce-flip-back',
        minutesWrapper: '.ce-minutes .ce-flip-back',
        secondsWrapper: '.ce-seconds .ce-flip-back',
        wrapDigits: false,
        onChange: function() {
            countEverestAnimate($('.ce-countdown-2 .ce-col>div'), this);
        },
        onComplete: function() {
            console.log("complete");
            $('#sale-btn').css({
                visibility: 'visible'

            });

        }


    });

    function countEverestAnimate($el, data) {
        $el.each(function(index) {
            var $this = $(this),
                $flipFront = $this.find('.ce-flip-front'),
                $flipBack = $this.find('.ce-flip-back'),
                field = $flipBack.text(),
                fieldOld = $this.attr('data-old');
            if (typeof fieldOld === 'undefined') {
                $this.attr('data-old', field);
            }
            if (field != fieldOld) {
                $this.addClass('ce-animate');
                window.setTimeout(function() {
                    $flipFront.text(field);
                    $this
                        .removeClass('ce-animate')
                        .attr('data-old', field);
                }, 800);
            }
        });
    }

    //Fallback for Internet Explorer
    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
        $('html').addClass('ce-ie');
    }
});


//start tooltip
$(document).ready(function() {
    $(".tooltip").tooltip({
        position: {
            my: "top+0 top-75",
            at: "center center"
        }
    });
});
//end tooltip




//start fancybox
$(document).ready(function() {

    $('.fancybox-thumbs').fancybox({
        prevEffect: 'none',
        nextEffect: 'none',

        closeBtn: true,
        arrows: true,
        nextClick: true,

        helpers: {
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });

});
//end fancybox


//start parallax
jQuery(document).ready(function() {

    $('.sectionparallax').parallax("100%", 0.04);

});
//end parallax


/* ]]> */
