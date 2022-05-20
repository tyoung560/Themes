TB.themeRender(function($){
    var verticalNav = document.getElementsByClassName(
      'x-menu-style-vertical'
    ).length > 0; // check if vertical menu class exists in DOM
  
    var width = $(".x-menu-style-vertical").width(); // get vertical menu width
    var offset = width + 25; //add pixels to veritcal menu width
  
    if (verticalNav) {
      $(".app").css({
        "margin-left": offset + "px"
      }); // add margin to app class to shift app away from vertical menu
  
      $(".navbar").css({
        "overflow": "auto"
      }); // add overflow to vertical menu to allow for menu scroll
  
      $(function () {
        $('.dropdown-submenu').each(function () {
          $(this).click(function () {
            var dropdownContext = $(this).find('.dropdown-menu')[0];
            if ($(dropdownContext).css('display') === 'contents') {
              $(dropdownContext).css('display', 'none');
            } else {
              $(dropdownContext).css('display', 'contents');
            }
            event.stopPropagation();
          });
        });
      }); // Chems code for clicking on 
  
    } else {
      console.log('horizontal menu');
    }
  });