// マウスクリックイベント
$(function() {
  // #back内のaタグがクリックされたときの処理
  // $('#id名 要素名')と指定するとid内の子要素に対してのみ指定
  $('#back a').on('click',function(event){
    // animate()はアニメーション効果を設定するjQueryの関数
    $('body, html').animate({ // $('セレクタ名').animate({
      // scrollTopはスクロール位置を取得できるメソッド scrollTop:0は最上部に移動する
      scrollTop:0 // 変化対象のプロパティ名:変化値
      // アニメーションの動作時間を800で指定しているので、800ミリ秒間（0.8秒間）かけてページの最上部まで移動する
    }, 800); // }, アニメーションの動作時間);
    // event.preventDefault();はaタグの機能を無効にするメソッド
    event.preventDefault();
  });
});
