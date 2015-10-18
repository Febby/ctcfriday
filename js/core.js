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

    //start countdown
    $('.ce-countdown-1').countEverest({
        //Set your target date here!
        day: 20,
        month: 10,
        year: 2015
    });

    $('.ce-countdown-2').countEverest({
        //Set your target date here!
        day: 22,
        month: 10,
        year: 2015
    });

}); //ready
//end revolution slider


function countEverestAnimate($el) {
    $el.each(function() {
        var $this = $(this),
            fieldText = $this.text(),
            fieldData = $this.attr('data-value'),
            fieldOld = $this.attr('data-old');

        if (typeof fieldOld === 'undefined') {
            $this.attr('data-old', fieldText);
        }

        if (fieldText != fieldData) {
            $this
                .attr('data-value', fieldText)
                .attr('data-old', fieldData)
                .addClass('ce-animate');

            window.setTimeout(function() {
                $this
                    .removeClass('ce-animate')
                    .attr('data-old', fieldText);
            }, 300);
        }
    });
}


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
