//paralax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll)

    $('.jumbotron .display-4').css({
        'transform' : 'translate(0px,'+ wScroll*2/4 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px,'+ wScroll*5/3 +'%)'
    });
    $('.jumbotron .btn').css({
        'transform' : 'translate(0px,'+ wScroll*7/6 +'%)'
    });

    // muncul
    if(wScroll > $('.ruang').offset().top-500){
        $('.ruang').each(function(){
            setTimeout(function(){
                $('.ruang').addClass('muncul');
                $('.pkiri').addClass('pmuncul');
                $('.pkanan').addClass('pmuncul');
            },500);      
        });
    }
    if(wScroll < $('.ruang').offset().top-500){
        $('.ruang').removeClass('muncul');
        $('.pkiri').removeClass('pmuncul');
        $('.pkanan').removeClass('pmuncul');
        $('.kartu').removeClass('cmuncul');
    }
    if(wScroll > $('.ruang').offset().top-500){
        $('.kartu').each(function(i){
            setTimeout(function(){
                $('.kartu').eq(i).addClass('cmuncul');
            },700*(i+1));      
        });
    }
});

// //about
// $(window).on('load',function() { 
    //     $('.pkiri').addClass('pmuncul');
    //     $('.pkanan').addClass('pmuncul');
    // });

$(document).ready(function(){
$("#whatsapp1").click(function(){
    $("#ubah1").text("082361450804");
});

$("#email1").click(function(){
    $("#ubah1").text("9b25wahyuhutabarat190700@gmail.com");
});
});