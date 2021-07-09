// マウスクリックイベント
$(function() {
  // .menu-triggerクリック時に行われる処理
  $('.menu-trigger').on('click', function(event) {
    // .toggleClass()は指定されているclassをトグル処理するメソッド
    // トグル処理では該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加される
    $(this).toggleClass('active');
    // .fadeToggle()は要素のフェードイン・フェードアウトを切り替えるメソッド
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});