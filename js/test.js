//成果展示的文字介绍部分
$(function(){
	var intr1 = imgs[0].introduction;
	var url1 = imgs[0].url;
	var str1 = '';
	str1 = '<span class="S_infoTitle">作品简介</span>'+
			'<p class="S_infoMeassage">'+ intr1 +'</p>'+
			'<p class="S_infoUrl">链接地址：<a href="'+ url1 +'">'+ url1 +'</a></p>';
	$(".S_intr").html(str1);
	$(".slides li").click(function(){
		var n = $(this).index();
		var intr = imgs[n].introduction;
		var url = imgs[n].url;
		var str = '';
		str = '<span class="S_infoTitle">作品简介</span>'+
				'<p class="S_infoMeassage">'+ intr +'</p>'+
				'<p class="S_infoUrl">链接地址：<a href="'+ url +'">'+ url +'</a></p>';
		$(".S_intr").html(str);
	})
	
})