// $()関数は特定の属性を持つ要素や属性値を絞り込むことができる
// 属性値が特定の値に等しくない要素だけを取得
// .hide();は、特定のHTML要素を非表示にするメソッド
$('#tab-contents .tab[id != "tab1"]').hide(); // $('要素[属性 != "値"]')

// id="tab-menu"のaタグがクリックされたときに処理を実行
$('#tab-menu a').on('click', function(event) {
  // id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
  $("#tab-contents .tab").hide();
  // .removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド
  $("#tab-menu .active").removeClass("active");
  // .addClass()は、任意のHTML要素にクラス属性を追加できるメソッド
  $(this).addClass("active"); // タブがクリックされたときに追加
  // .attr()は、HTML要素の属性を取得したり設定できるメソッド
  // .show()は要素を表示するメソッド
  $($(this).attr("href")).show(); // href属性を取得するように指定
  event.preventDefault();
});