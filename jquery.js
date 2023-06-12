$(document).ready(function() {

	var $a01 = $(".index_btn.left > a");
	var $a02 = $(".index_btn.right > a");
	var $index_img = $(".index_img > img");
	var $index_contents = $(".index_contents");
	var $exp01 = $("#exp01");
	var $exp02 = $("#exp02");

	$a01.mouseover(function() {
		$index_img.fadeOut();
		$index_contents.fadeOut();
		$exp01.fadeIn();
	});
	$a01.mouseleave(function() {
		$exp01.fadeOut();
		$index_img.fadeIn();
		$index_contents.fadeIn();
	});

	$a02.mouseover(function() {
		$index_img.fadeOut();
		$index_contents.fadeOut();
		$exp02.fadeIn();
	});
	$a02.mouseleave(function() {
		$exp02.fadeOut();
		$index_img.fadeIn();
		$index_contents.fadeIn();
	});


});


