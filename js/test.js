$(function(){
	$(".slides li").click(function(){
		var n = $(this).index();
		console.log(imgs);
		var intr = imgs[n].introduction;
		$(".S_intr").html(intr);
	})
	
})