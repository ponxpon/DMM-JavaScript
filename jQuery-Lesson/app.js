// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// thisを使用すると上の4つの記述を1つの記述にまとめることが出来る

// thisはイベントが発生した要素のみ変化させたいときに使用する
$(function(){
  // box1クラスの正方形がクリックされたとき、this（クリックされた要素）のみslideUpさせる
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});
