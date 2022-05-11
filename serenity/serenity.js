TB.themeRender(function ($) {
  var width = $(".x-menu-style-vertical").width();
  var offset = width + 0;
  if (window.matchMedia('(min-width: 768px)').matches) {
    $(".app").css({
      "margin-left": offset + "px"
    });
  }
});