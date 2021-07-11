// API_KEYには取得したAPIキーを記述
const API_KEY = "";

// 検索ボタンがクリックした時の処理
$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({ // $.ajax()はAjaxを実装するメソッド
      // url:では、APIにリクエストするURLを指定 $('#cityname').val()で#citynameの値を受け取り、URLを結合させている
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      // dataTypeではレスポンスとして取得したいデータの型を指定
      dataType : 'jsonp', // 今回はJSONを受け取る
    }).done(function (data){
      //通信成功
       // 位置
       $('#place').text(data.name);
       // 最高気温
       $('#temp_max').text(data.main.temp_max);
       // 最低気温
       $('#temp_min').text(data.main.temp_min);
       //湿度
       $('#humidity').text(data.main.humidity);
       //風速
       $('#speed').text(data.wind.speed);
       // 天気
       $('#weather').text(data.weather[0].main);
       // 天気アイコン
       $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
       $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');
    });
  });
});