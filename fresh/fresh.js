TB.themeRender(function ($) {
  var width = $(".x-menu-style-vertical").width();
  var offset = width + 0;
  if (window.matchMedia('(min-width: 768px)').matches) {
    $(".app").css({
      "margin-left": offset + "px"
    });

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
    });

  } else {
    console.log('horizontal menu');
  }
});