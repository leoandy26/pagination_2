// ロード時にフィルター情報を取得
$().ready(function () {
  const allInFilter = $('option:selected').text();

  console.log(allInFilter);
});

// 項目を選択時にフィルター情報を取得
$('#0').change(function () {
  const rank = $('option:selected').text();

  console.log(rank);
});

$('#1').change(function () {
  const position = $('option:selected').text();

  console.log(position);
});

$('#2').change(function () {
  const skill = $('option:selected').text();

  console.log(skill);
});

$('#3').change(function () {
  const frame = $('option:selected').text();

  console.log(frame);
});

$('#4').change(function () {
  const result = $('option:selected').text();

  console.log(result);
});

let searchFilter = '.filter_col'; // 絞り込む項目を選択するエリア
let listItem = '.card'; // 絞り込み対象のアイテム
let hideClass = 'is-hide'; // 絞り込み対象外の場合に付与されるclass名

$(function () {
  // 絞り込み項目を変更した時
  $(document).on('change', searchFilter + ' option', function () {
    search_filter();
  });
});

/**
 * リストの絞り込みを行う
 */
function search_filter() {
  // 非表示状態を解除
  $(listItem).removeClass(hideClass);
  for (let i = 0; i < $(searchFilter).length; i++) {
    let name = $(searchFilter).eq(i).find('option').attr('name');
    // 選択されている項目を取得
    let searchData = get_selected_option_items(name);
    // 選択されている項目がない、またはALLを選択している場合は飛ばす
    if (searchData.length === 0 || searchData[0] === '') {
      continue;
    }
    // リスト内の各アイテムをチェック
    for (let j = 0; j < $(listItem).length; j++) {
      // アイテムに設定している項目を取得
      let itemData = $(listItem).eq(j).data(name);
      // 絞り込み対象かどうかを調べる
      if (searchData.indexOf(itemData) === -1) {
        $(listItem).eq(j).addClass(hideClass);
      }
    }
  }
}

/**
 * optionで選択されている値の一覧を取得する
 * @param  {String} name 対象にするoptionのname属性の値
 * @return {Array}       選択されているoptionのvalue属性の値
 */
function get_selected_option_items(name) {
  let searchData = [];
  $('[name=' + name + ']:checked').each(function () {
    searchData.push($(this).val());
  });
  return searchData;
}
