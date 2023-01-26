// scroll position
var urlHash = location.hash;
if(urlHash) {
  $('body,html').stop().scrollTop(0);
  setTimeout(function () {
    scrollToAnker(urlHash) ;
  }, 100);
}
function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top - 70;
    $('body,html').stop().animate({scrollTop:position}, 100);
}
$('a[href*="#"]').on('click', function () {
  var href = $(this).attr("href").substr( $(this).attr("href").indexOf('#') );
  var target = $(href == "#" || href == "" ? 'html' : href);
  if(target!=undefined){
    var position = target.offset().top - 70;
    $("html, body").animate({scrollTop: position}, 100, "swing");
  }
  return false;
});

// 360px未満レスポンシブ用
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();

// table scroll hint
if(document.documentElement.lang.includes('ja' || 'ja-jp' || 'ja-JP')) {
  new ScrollHint('.js-scrollable', {
    applyToParents: true,
    i18n: {
      scrollable: 'スクロールできます'
    }
  });
} else {
  new ScrollHint('.js-scrollable', {
    applyToParents: true,
    i18n: {
      scrollable: 'You can scroll'
    }
  });
}

