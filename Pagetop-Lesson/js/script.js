// マウスクリックイベント
$(function() {
  // #back内のaタグがクリックされたときの処理
  // $('#id名 要素名')と指定するとid内の子要素に対してのみ指定
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});
