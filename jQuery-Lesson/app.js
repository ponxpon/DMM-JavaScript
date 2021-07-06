$(function (){
  // マウスオーバーイベント
  $('.box1').mouseover(function (){
    // addClassは対象のHTML要素にclass属性を追加
    $('.box1').addClass('box1-ext');
  });
  // マウスアウトイベント
  $('.box1').mouseout(function(){
    // removeClassは要素に設定されているclass属性を解除
    $('.box1').removeClass('box1-ext');
  });
});