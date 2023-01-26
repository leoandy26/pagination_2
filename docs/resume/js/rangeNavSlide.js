var rangeSlide = document.getElementById('rangeNavSlide');

noUiSlider.create(rangeSlide,{
  start: [50, 200],
  connect: true,
  format: wNumb({
    decimals: 0
  }),
  range: {
    'min': 0,
    'max': 300
  }
});

var rangeNavValues = [
	document.getElementById('skip-value-nav-lower'),
	document.getElementById('skip-value-nav-upper')
];

rangeSlide.noUiSlider.on('update', function( values, handle ) {
	rangeNavValues[handle].innerHTML = values[handle];
});

rangeSlide.noUiSlider.on('update', function(){
	var upperNum = $("#skip-value-nav-upper").text();
	var lowerNum = $("#skip-value-nav-lower").text();
	$(".popUpperNum").text(upperNum);
	$(".popLowerNum").text(lowerNum);
	
	$(function(){
	if (upperNum === '300'){
		$("#skip-value-nav-upper").text('∞');
		$(".popUpperNum").text('∞');
		$(".navSearch .kmTxt").hide();
	} else {
		$(".upperNum").removeClass('mostUpper');
		$(".navSearch .kmTxt").show();
	}
	});
	
$(".noUi-handle-upper").mousedown(function(){
	$(this).html('<p class="popUpperNum">' + upperNum + '</p>');
});
$(".noUi-handle-upper").mouseup(function(){
	$(this).html('');
});
$(".noUi-handle-lower").mousedown(function(){
	$(this).html('<p class="popLowerNum">' + lowerNum + '</p>');
});
$(".noUi-handle-lower").mouseup(function(){
	$(this).html('');
});

});
