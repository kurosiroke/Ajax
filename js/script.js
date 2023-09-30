const API_KEY = "取得したAPTキー";

$(function(){
  $('#btn').on('click',function(){
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "dcb7a453304a385ec6f5703a9f07a3c7",
      detaType : 'jsonp',
    }).done(function (date){
      //通信成功
    }).fail(function (date){
      //通信失敗
    });
  });
});