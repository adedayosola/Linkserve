
$(document).ready(function(){
      $(window).scroll(function()  { // check if scroll event happened
        if ($(document).scrollTop() > 100)  { // check if user scrolled more than 50 from top of the browser window
          $(".bg-x").css({"background-color":"#FFF ", "box-shadow":  "0 0.15rem 0.5rem rgba(0,0,0,.18)" }); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".bg-x").css({"background-color":"transparent ", "box-shadow":  "none"}); // if not, change it back to transparent
        }
      });
    });

    $(function(){
         // When the window is resized, check the size to determine your classes
         $(window).resize(function(){
            // When the width and height meet your specific requirements or lower
            if (($(window).width() <= 1024) && ($(window).height() <= 768)){
                  // If it is smaller or equal to 1024x768, apply your class
                 $(".normal").removeClass('normal').addClass('smaller');
            }
            else{
                 // Otherwise, reverse the classes
                 $(".smaller").removeClass('smaller').addClass('normal');
            }
         });
       });

       $('.navbar-nav>li>a').on('click', function(){
           $('.navbar-collapse').collapse('hide');
       })
