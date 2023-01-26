// 360px未満レスポンシブ用
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();

// ログインページパスワード表示・非表示
let eye = document.querySelector('.js-eye');
if (eye) {
  eye.addEventListener('click', function () {
    if (this.previousElementSibling.getAttribute('type') === 'password') {
      this.previousElementSibling.setAttribute('type', 'text');
      this.classList.add('is_show');
    } else {
      this.previousElementSibling.setAttribute('type', 'password');
      this.classList.remove('is_show');
    }
  });
}

// レンジスライダー
let rangeSlide = document.getElementById('rangeNavSlide');
if (rangeSlide) {
  noUiSlider.create(rangeSlide, {
    start: [20, 200],
    connect: true,
    format: wNumb({
      decimals: 0,
    }),
    range: {
      min: 0,
      max: 300,
    },
  });

  let rangeNavValues = [
    document.getElementById('skip-value-nav-lower'),
    document.getElementById('skip-value-nav-upper'),
  ];

  rangeSlide.noUiSlider.on('update', function (values, handle) {
    rangeNavValues[handle].innerHTML = values[handle];
  });

  rangeSlide.noUiSlider.on('update', function () {
    let upperNum = $('#skip-value-nav-upper').text();
    let lowerNum = $('#skip-value-nav-lower').text();
    $('.popUpperNum').text(upperNum);
    $('.popLowerNum').text(lowerNum);

    $(function () {
      if (upperNum === '300') {
        $('#skip-value-nav-upper').text('∞');
        $('.popUpperNum').text('∞');
        $('.navSearch .kmTxt').hide();
      } else {
        $('.upperNum').removeClass('mostUpper');
        $('.navSearch .kmTxt').show();
      }
    });

    $('.noUi-handle-upper').mouseup(function () {
      $(this).html('');
    });
    $('.noUi-handle-lower').mouseup(function () {
      $(this).html('');
    });
  });
}

// 疑似セレクトRangeボタン
let priceSelect = document.querySelector('.js-filter_col');
let rangeSlideWrap = document.querySelector('.js-rangeslideWrap');
if (priceSelect) {
  priceSelect.addEventListener('click', function () {
    rangeSlideWrap.classList.add('is_show');
  });
}

// スマホフィルターボタン
let filterBtnOpen = document.querySelector('.js-filter_btn-open');
let filterBtnClose = document.querySelector('.js-filter_btn-close');
let filterContent = document.querySelector('.js-filter');
if (filterBtnOpen) {
  filterBtnOpen.addEventListener('click', () => {
    filterContent.classList.add('is_show');
    document.body.classList.add('is_fixed');
  });
}
if (filterBtnClose) {
  filterBtnClose.addEventListener('click', () => {
    filterContent.classList.remove('is_show');
    document.body.classList.remove('is_fixed');
  });
}
