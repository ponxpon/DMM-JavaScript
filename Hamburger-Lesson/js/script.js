// マウスクリックイベント
$(function() {
  // .menu-triggerクリック時に行われる処理
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});