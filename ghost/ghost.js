TB.render('component_layout_3', function (data) {
  var verticalNav = document.getElementsByClassName(
    'x-menu-style-vertical'
  ).length > 0;

  var width = $(".x-menu-style-vertical").width();
  var offset = width + 25;

  if (verticalNav) {
    $(".app").css({
      "margin-left": offset + "px"
    });
    $(".navbar").css({
      "overflow": "auto"
    });
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