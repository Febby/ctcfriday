//start revolution slider
var revapis;

$(document).ready(function() {

    revapis = jQuery('.tp-banner-full-screen').revolution({
        delay: 10000000,
        startwidth: 1170,
        startheight: 450,
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
    // $('#sale-btn').css({
    //     visibility: 'hidden'

    // });

    
});


//start tooltip
$(document).ready(function() {
    $(".tooltip").tooltip({
        position: {
            my: "top+0 top-75",
            at: "center center"
        }
    });
    $(".tooltip-date").tooltip({
        position: {
            my: "left+15 center", at: "right center"
        }
    });
       $(".tooltip-date").on("click", function(event){
   
        event.preventDefault();
            
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
// jQuery(document).ready(function() {

//     $('.sectionparallax').parallax("100%", 0.04);

// });
//end parallax


/* ]]> */
