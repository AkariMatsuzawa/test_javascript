// $(function () {
//     $("").click(function () {
    
//         // 入力された値を取得
        
//         // urlを設定
//         var url = "";
//         // 送るデータを成形する
//         var param = { zipcode: zipcode };
//         // サーバーと通信(Ajax)
        
//         $.ajax({
//             type: "", 
//             cache: false,
//             data: ,
//             url: ,
//             dataType: "jsonp"
//         })
//         .done(function (res) {
//             if (res.status != 200) {
//                 // 通信には成功。APIの結果がエラー
//                 // エラー内容を表示
//                 $('#zip_result').html(res.message);
//             } else {
//                 //住所を表示
                
//             }

//         })
//         .fail(function (error) {
//             console.log(error);
//             $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
//         });
//     });
// });




$(function () {
  $('#serch_btn').on('click', function(){
      

      // 入力された値を取得
      
      // urlを設定
      var url = "zipcode";
      // 送るデータを成形する
      var param =  {zipcode: $('#zipcode').val()}
      // val()メソッドでHTML要素のvalue値を取得できる
      // サーバーと通信(Ajax)
      var send_url = "http://zipcloud.ibsnet.co.jp/api/search";
      
      
      $.ajax({
          type: "GET", 
          cache: false,
          data: param,
          //外から入ってくる値。処理結果に影響を与える外部から投入される変動要素のこと
          url: send_url,
          dataType: "jsonp"
          //読み込んだファイルでデータ取得できる、返却までしてくれる。
      })
      .done(function (res) {
          if (res.status != 200) {
              alert('該当の住所がありません');
              $('#zip_result').html(res.message);

              // 通信には成功。APIの結果がエラー
              // エラー内容を表示
              
          } else{
              // //住所を表示
              var html = '';
                  for (var i = 0; i < res.results.length; i++) {
                      var result = res.results[i];
                      console.log(res.results);
                      html += '<h2>住所' + (i + 1) + '</h2>';
                      //+=は加算代入
                      html += '<div>都道府県コード：' + result.prefcode + '</div>';
                      html += '<div>都道府県：' + result.address1 + '</div>';
                      html += '<div>市区町村：' + result.address2 + '</div>';
                      html += '<div>町域：' + result.address3 + '</div>';
                      html += '<div>都道府県(カナ)：' + result.kana1 + '</div>';
                      html += '<div>市区町村(カナ)：' + result.kana1 + '</div>';
                      html += '<div>町域(カナ)：' + result.kana1 + '</div>';
                  }
                  $('#zip_result').html(html);
          }
          }
      )
      .fail(function (error) {
          console.log(error);
          $('#zip_result').html("<p><p>通信エラーです。時間をおいてお試しください</p>");
      });
  });
});