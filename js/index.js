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
        

    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    });
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
    $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
    });
    $("#flip4").click(function(){
        $("#panel4").slideToggle("slow");
    });
    $("#flip5").click(function(){
        $("#panel5").slideToggle("slow");
    });
    $("#flip6").click(function(){
        $("#panel6").slideToggle("slow");
    });
    $("#flip7").click(function(){
        $("#panel7").slideToggle("slow");
    });
    $("#flip8").click(function(){
        $("#panel8").slideToggle("slow");
    });

    $(".image img").hover(function(){
        $(this).css("opacity", 1);
    }, function(){$(this).css("opacity", 0.4);
    });
    
    

}); 