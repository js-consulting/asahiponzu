//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

    var scroll = $(window).scrollTop(); //スクロール値を取得
    if (scroll >= 400){//700pxスクロールしたら
    $('#fixed_btn').removeClass('DownMove');   // DownMoveというクラス名を除去して
    $('#fixed_btn').addClass('UpMove');      // UpMoveというクラス名を追加して出現
    }else{//それ以外は
    if($('#fixed_btn').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
        $('#fixed_btn').removeClass('UpMove'); //  UpMoveというクラス名を除去し
        $('#fixed_btn').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
    }
    }

    var wH = window.innerHeight; //画面の高さを取得
    var footerPos =  $('#footer').offset().top; //footerの位置を取得
    if(scroll+wH >= (footerPos+10)) {
    var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
    $('#fixed_btn').css('bottom',pos); //#fixed_btnに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
    }else{//それ以外は
    if($('#fixed_btn').hasClass('UpMove')){//UpMoveというクラス名がついていたら
        $('#fixed_btn').css('bottom','10px');// 下から10pxの位置にページリンクを指定
    }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #fixed_btnをクリックした際の設定
$('#fixed_btn').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});




$(function(){
    var pagetop = $('.page-top');
    // ボタン非表示
    pagetop.hide();

    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });