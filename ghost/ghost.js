var width = $(".x-menu-style-vertical").width();
var offset = width + 25;
if (window.matchMedia('(min-width: 768px)').matches) {
  $(".app").css({
    "margin-left": offset + "px"
  });
}