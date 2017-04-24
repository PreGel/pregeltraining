$(document).on('ready page:load', function () {
$(document).foundation({
	'magellan-expedition': {
  active_class: 'active', // specify the class used for active sections
  threshold: 500, // how many pixels until the magellan bar sticks, 0 = auto
  destination_threshold: 90, // pixels from the top of destination for it to be considered active
  throttle_delay: 50, // calculation throttling to increase framerate
  fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
  offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
    },
    'orbit': {
        next_on_click: false // Advance to next slide on click
    }

    });
});



// test 1 - this one kinda works, fades to background color, then starts the next one
// var currentBackground = 0;

// var backgrounds = [];

// backgrounds[0] = '../img/full-image-test.jpg';

// backgrounds[1] = '../img/intro-grid-test.jpg';

// backgrounds[2] = '../img/full-image-test.jpg';

// backgrounds[3] = '../img/intro-grid-test.jpg';

// backgrounds[4] = '../img/full-image-test.jpg';

// function changeBackground() {

//     currentBackground++;

//     if(currentBackground > 4) {currentBackground = 0};

//     $('#intro-full-back').fadeOut(1500,function() {
//         $('#intro-full-back').css({
//             'background-image' : "url('" + backgrounds[currentBackground] + "')"
//         });
//         $('#intro-full-back').fadeIn(1500);
//     });


//     setTimeout(changeBackground, 5000);
// }

// $(document).ready(function() {

//     setTimeout(changeBackground, 5000);  

// }); 

// end test 1


// test 2 - this one uses css3, need to test in everything
/*var i=0;
var imghead=[
    "url(../img/full-image-test.jpg)",
    "url(../img/full-image-test2.jpg)"
    ];//add as many images as you like

function slideimg() {
    setTimeout(function () {
        $('#intro-full-back')
    .animate({opacity: 0}, 'fast', function() {
        $(this)
            .css({'background-image': imghead[i]})
            .animate({opacity: 1});
    });


        // jQuery('#intro-full-back').css({'background-image':imghead[i], 'opacity':'1'});
         i++;
        if(i==imghead.length) i=0;
         slideimg();
    }, 6000);
}
slideimg();*/

/*end test 2 */

//$('#intro-full').fadeTo('slow', 0.3, function()
//{
    //$(this).css('background-image', 'url(' + $img + ')');
   // $(this).css('background-image', 'url(../img/intro-grid-test.jpg)');
//}).delay(1000).fadeTo('slow', 1);




// $(document).ready(function() {
//     $('#back').animate({opacity: 0}, 0).css({'background-image': 'url(http://vaughnroyko.com/jsfiddle/back.png)'}).animate({opacity: 1}, 2500);
// });
