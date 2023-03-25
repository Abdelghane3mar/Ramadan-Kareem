
let offset = $("#prayer_time").offset().top;

$(window).scroll(function () { 

    let wScroll = $(window).scrollTop();

    if (wScroll > offset - 200){
        $(".navbar").css({"position" : "fixed" , "backgroundColor" : "rgba(0, 0, 0, 0.5)"});
        $("#btnUp").fadeIn(500);
    }
    else{
        $(".navbar").css({"position" : "absolute" , "backgroundColor" : "transparent"});
        $("#btnUp").fadeOut(500)
    }
    
});


$("a[href='#']").click(function() { 

    let aHref = $(this).attr("href");

    var offset = $(aHref).offset().top;

    $("html , body").animate({screenTop : offset} , 500)

});

$("#btnUp").click(function () { 

    $("html , body").animate({scrollTop : 0} , 500)

    
});

