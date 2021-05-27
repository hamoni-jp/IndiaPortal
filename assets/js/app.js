$(window).scroll(function (){
 $(".marker-animation").each(function(){
   var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
   var scroll = $(window).scrollTop(); //スクロールの位置を取得
   var windowHeight = $(window).height(); //ウインドウの高さを取得
   if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
     $(this).addClass('active'); //クラス「active」を与える
   }
 });
});


//scrollの位置を修正
$(function () {
 var headerHight = 200; //ヘッダの高さ
 $('a[href^="#"]').click(function(){
     var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
     $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
   });
});

AOS.init();