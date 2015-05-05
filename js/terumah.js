// terumah.js
// by xX_mAdDy_VaRnEr_Xx

var page = min = 1;
var max = 11;
var delay = 500;

$( document ).ready(function() {
    $( "#down" ).click(function() {
        console.log("down click");
        if (page != max) {
            page++;
            $('html,body').animate({
              scrollTop: $( "#" + page.toString() ).offset().top
            }, delay);
        }
    });
    
    $( "#up" ).click(function() {
        console.log("up click");
        if (page != min) {
            page--;
            $('html,body').animate({
              scrollTop: $( "#" + page.toString() ).offset().top
            }, delay);
        }
    });
});

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            if (page != min) {
                page--;
                $('html,body').animate({
                  scrollTop: $( "#" + page.toString() ).offset().top
                }, delay);
            }
        break;
            
        case 39: // right
            if (page != max) {
                page++;
                $('html,body').animate({
                  scrollTop: $( "#" + page.toString() ).offset().top
                }, delay);
            }
        break;
            
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});