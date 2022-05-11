$(function(){
    $('.dropdown-submenu').each(function(){
        $(this).click(function(){
            var dropdownContext = $(this).find('.dropdown-menu')[0];
            if ($(dropdownContext).css('display') === 'contents'){
                   $(dropdownContext).css('display','none');
            } else {
                $(dropdownContext).css('display','contents');
            }
            event.stopPropagation();
        });
    });    
});