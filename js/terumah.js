// terumah.js
// by xX_mAdDy_VaRnEr_Xx

var min = 1;
var page = 1;
var max = 11;
var delay = 500;

$( document ).ready(function() {
    
    // click down
    $( "#down" ).click(function() {
        console.log("down click");
        if (page != max) {
            page++;
            $('html,body').animate({
              scrollTop: $( "#" + page.toString() ).offset().top
            }, delay);
        }
    });
    
    // click up
    $( "#up" ).click(function() {
        console.log("up click");
        if (page != min) {
            page--;
            $('html,body').animate({
              scrollTop: $( "#" + page.toString() ).offset().top
            }, delay);
        }
    });
    
    // key up & down
    $("body").keydown(function(e) {
        if(e.keyCode == 37) { // left
            page--;
            $('html,body').animate({
              scrollTop: $( "#" + page.toString() ).offset().top
            }, delay);
        }
        else if(e.keyCode == 39) { // right
            page++;
            $('html,body').animate({
              scrollTop: $( "#" + page.toString() ).offset().top
            }, delay);
        }
    });
    
    // cursor
    $(document).mousemove(function(event){
        var eighth = $( window ).width() / 8;
        var image = Math.floor(event.pageX / eighth) + 1;
        $( 'html' ).css('cursor', "url('../cursor/frowny" 
                      + image.toString() + ".png'), move" );
    });
});