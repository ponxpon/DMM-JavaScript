// 2021/07/07
// JavaScriptを学ぼう　7章　childrenとは

$(function(){
  // button要素がクリックされたときに処理を実行する
  $('button').on('click', function(){
    // .children()は、HTML要素直下のすべての子要素を取得する（今回はul要素の子要素であるli要素が対象）
    $('ul').children().css('color','red');
  });
});
