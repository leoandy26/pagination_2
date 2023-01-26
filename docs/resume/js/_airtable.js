$(document).ready(() => {
  $.ajax({
    url: ' https://gsslab-website-api.vercel.app/api/get_all_resume', //アクセスするURL
    type: 'post', //post or get
    cache: false, //cacheを使うか使わないかを設定
    dataType: 'json', //data type script・xmlDocument・jsonなど
    data: {}, //アクセスするときに必要なデータを記載
  })

    .done(function (response) {
      //通信成功時の処理
      //成功したとき実行したいスクリプトを記載
      // console.log(response);
      const jsonData = JSON.stringify(response);

      const objData = JSON.parse(jsonData);

      const response_id = objData.data;

      console.log(response_id);

      $(response_id).each((index, val) => {
        $('.content_body').append(
          `
      <li class="card" data-js-num="1">
      <div class="card_header">
          <figure class="card_figure"><img src="${val.Picture[0].url}" alt=""></figure>
          <div class="card_header_right">
              <h2 class="card_name">${val.Name}<br><span class="card_name_age">(${
            val.Age
          }歳)</span></h2>
              <div class="card_rank">
                  <img src="img/badge_gold.png" alt="gold">
                  <p class="card_rank_text">${val.Rank}</p>
              </div>
              <p class="card_price"><span class="card_price_big">${
                val.Salary / 10000
              }万円</span> / 月</p>
          </div>
      </div>
      <div class="card_body">
          <div class="card_body_top">
              <div class="badge_box">
                  <p class="badge_title">ポジション</p>
                  <ul class="badge_list badge_list-hasPositon">
                      ${val.Position}
                      <li class="badge_item bgc_orange"></li>
                  </ul>
              </div>
              <div class="badge_box">
                  <p class="badge_title">スキル</p>
                  <ul class="badge_list">
                      ${val.Skills}
                      <li class="badge_item bgc_orange">Nodesjs</li>
                      <li class="badge_item bgc_skyblue">Python</li>
                  </ul>
              </div>
          </div>
          <div class="card_body_bottom">
              <h3 class="card_title_sub">経歴</h3>
              <p class="card_desc">${val.WorkHistory}</p>
          </div>
      </div>
      </li>   
      `,
        );
      });

      $(response_id).each((index, val) => {
        $('.modal js-modal_1').append(
          `
    <div class="modal_inner">
        <div class="modal_content">
            <header class="modal_header">
              <figure class="modal_figure"><img src="${
                val.Picture[0].url
              }" alt=""></figure>
              <div class="modal_header_right">
                  <div class="modal_header_sp">
                      <p class="modal_name">${val.Name}<span class="modal_name_age"> (${
            val.Age
          }歳)</span></p>
                      <div class="modal_meta">
                          <div class="modal_meta_box">
                              <img src="img/badge_gold.png" alt="gold">
                              <p class="modal_meta_text">${val.Rank}</p>
                          </div>
                          <div class="modal_meta_box">
                              <img src="img/icon_area.svg" alt="">
                              <p class="modal_meta_text">${val.WorkLocation}</p>
                          </div>
                          <p class="modal_price"><span class="modal_price_big"><span class="pc">ご契約金額：</span>${
                            val.Salary / 10000
                          }万円</span> / 月</p>
                      </div>
                  </div>
                  <div class="modal_badge">
                      <div class="badge_box">
                        <p class="badge_title">ポジション</p>
                        <ul class="badge_list badge_list-hasPositon">
                          ${val.Position}
                          <li class="badge_item bgc_blue-position">フロントエンド</li>
                        </ul>
                      </div>
                      <div class="badge_box">
                        <p class="badge_title">スキル</p>
                        <ul class="badge_list">
                          ${val.Skills}
                          <li class="badge_item bgc_pink">PHP</li>
                        </ul>
                      </div>
                      <div class="badge_box">
                        <p class="badge_title">フレームワーク</p>
                        <ul class="badge_list">
                          ${val.Framework}
                          <li class="badge_item bgc_pink">PHP</li>
                        </ul>
                      </div>
                  </div>
              </div>
          </header>
          <div class="modal_body">
  
              <!-- modal_postWrapは今後の拡張性で追加しています -->
              <div class="modal_postWrap">
                  <p class="modal_title_sub">経歴</p>
  
                  <!-- modal_post直下にCMS機能が入るイメージ -->
                  <div class="modal_post">
                      <p>経歴がこちらに記載されます。経歴がこちらに記載されます。経歴がこちらに記載されます。経歴がこちらに記載されます経歴がこちらに記載されます経歴がこちらに記載されます。<br>経歴がこちらに記載されます。経歴がこちらに記載されます。経歴がこちらに記載されます。経歴がこちらに記載されます経歴<br>経歴がこちらに記載されます。経歴がこちらに記載されます。経歴がこちらに記載されます。経歴がこちらに記載されます経歴</p>
                  </div>
                  <p class="modal_title_sub">面接動画</p>
  
                  <!-- modal_post直下にCMS機能が入るイメージ -->
                  <div class="modal_post">
                      <div class="center">
                          <video src="modal_movie.mp4" playsinline controls></video>
                      </div>
                  </div>
                  <p class="modal_title_sub">GSSからのコメント</p>
                  
                  <!-- modal_post直下にCMS機能が入るイメージ -->
                  <div class="modal_post">
                      <p>経歴がこちらに記載されます。経歴がこちらに記載されます。経歴がこちらに記載されます。経歴がこちらに記載されます経歴がこちらに記載されます経歴がこちらに記載されます。<br>経歴がこちらに記載されます。経歴がこちらに記載されます。経歴がこちらに記載されます。経歴がこちらに記載されます経歴</p>
                      <!-- コードテスト結果のランクテキストカラーは、CSSを4種用意しています。 -->
                      <div class="modal_post_code">コードテスト結果：<span class="textC_purple">A - Great</span></div>
                  </div>
              </div>
          </div>
          <footer class="modal_footer">
              <div class="modal_btnWrap">
                  <a class="modal_btn">面談予約</a>
                  <a class="modal_btn modal_btn-close js-close">閉じる</a>
              </div>
          </footer>
      </div>
  `,
        );
      });

      // //情報をDOM操作でAPIで取得した全てのリスト表示
      //   $(response_id).each((index, val) => { $('.test_resume').append('<li>' + val.Name + val.Age + val.Rank + val.WorkLocation + val.Salary + val.Position + val.Skills + val.Framework + val.WorkHistory + val.CodeExam);
      // });

      // //1人単位の格納された全ての情報を出力-1
      // $.each(objData[0].data, function(index, value) {
      //     console.log(value);
      // })

      //1人単位の格納された全ての情報を出力-2
      // $.each( objData[0].data, function( index, value ) {
      //   console.log( "index", index, "value", value );
      // });

      // //1人単位のスキルのみを表示
      // $.each(objData[0].data,
      //   function(index, val) {
      //       console.log(' スキル：' + val.Skills);
      //   }
      // );
    })

    .fail(function (xhr) {
      //通信失敗時の処理
      //失敗したときに実行したいスクリプトを記載
      // console.log(xhr);
    });

  // .always(function(xhr, msg) {
  //   //通信完了時の処理
  //   //結果に関わらず実行したいスクリプトを記載
  //   // console.log(xhr, msg);
  // });

  //   const json_data_airtable = [
  //     {
  //       "message": "Success to get_all_resume",
  //       "data": [
  //         {
  //           "Rank": "ジュニア+",
  //           "Framework": [
  //             "Nuxtjs",
  //             "React",
  //             "ReactNative"
  //           ],
  //           "Name": "Erika Piason1",
  //           "Skills": [
  //             "Nodejs",
  //             "HTML"
  //           ],
  //           "Position": "バックエンド"
  //         },
  //         {
  //           "Rank": "シニア",
  //           "Framework": [
  //             "Nuxtjs",
  //             "React",
  //             "ReactNative"
  //           ],
  //           "Name": "ABC Taro",
  //           "Skills": [
  //             "Nodejs",
  //             "HTML"
  //           ],
  //           "Position": "バックエンド"
  //         },
  //         {
  //           "Rank": "シニア+",
  //           "Framework": [
  //             "Nuxtjs",
  //             "React",
  //             "ReactNative"
  //           ],
  //           "Name": "Erika Piason4",
  //           "Skills": [
  //             "Nodejs",
  //             "HTML"
  //           ],
  //           "Position": "フルスタック"
  //         },
  //         {
  //           "Rank": "ジュニア",
  //           "Framework": [
  //             "Nuxtjs",
  //             "React",
  //             "ReactNative"
  //           ],
  //           "Name": "Erika Piason55",
  //           "Skills": [
  //             "Nodejs",
  //             "HTML"
  //           ],
  //           "Position": "アプリディベロッパー"
  //         },
  //         {
  //           "Rank": "ミドル",
  //           "Framework": [
  //             "Nuxtjs",
  //             "React",
  //             "ReactNative"
  //           ],
  //           "Name": "Daiki Shirakawa",
  //           "Skills": [
  //             "Nodejs",
  //             "HTML"
  //           ],
  //           "Position": "フルスタック"
  //         },
  //         {
  //           "Rank": "ジュニア+",
  //           "Framework": [
  //             "Nuxtjs",
  //             "React",
  //             "ReactNative"
  //           ],
  //           "Name": "Erika Piason2",
  //           "Skills": [
  //             "Nodejs",
  //             "HTML"
  //           ],
  //           "Position": "アプリディベロッパー"
  //         },
  //         {
  //           "Rank": "ミドル+",
  //           "Framework": [
  //             "Nuxtjs",
  //             "React",
  //             "ReactNative"
  //           ],
  //           "Name": "Erika Piason3",
  //           "Skills": [
  //             "Nodejs",
  //             "HTML"
  //           ],
  //           "Position": "フルスタック"
  //         },
  //         {
  //           "Rank": "ジュニア",
  //           "Framework": [
  //             "Nuxtjs",
  //             "React",
  //             "ReactNative"
  //           ],
  //           "Name": "Erika Piason",
  //           "Skills": [
  //             "Nodejs",
  //             "HTML"
  //           ],
  //           "Position": "フロントエンド"
  //         },
  //         {
  //           "Rank": "テックリード",
  //           "Framework": [
  //             "Nuxtjs",
  //             "React",
  //             "ReactNative"
  //           ],
  //           "Name": "Mark Andoru",
  //           "Skills": [
  //             "Nodejs",
  //             "HTML"
  //           ],
  //           "Position": "アプリディベロッパー"
  //         }
  //       ],
  //       "error": null
  //     }
  // ];

  // const jsonData1 = JSON.stringify(json_data_airtable);

  // const objData1 = JSON.parse(jsonData1);
  // console.log(objData1[0].data);
});
