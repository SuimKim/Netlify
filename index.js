$(document).ready(function() {
    $(function() {
        $('ul.tab li').click(function() {
            var activeTab = $(this).attr('data-tab');
            $('ul.tab li').removeClass('on');
            $('.tabcont').removeClass('on');
            $(this).addClass('on');
            $('#' + activeTab).addClass('on');
        })
    });
    
    $('.slider').bxSlider({
        mode:'horizontal',
          speed:1000, 
          auto: true
    });
    
});