$(function(){
	// 设置各个照片，介绍文字的位置
	$(".W_leaderImg").eq(1).css({
		"top" : "120px"
	});
	$(".W_leaderImg").eq(3).css({
		"top" : "120px"
	});
	$(".W_introduce").eq(1).css({
		"top" : "180px"
	});
	$(".W_introduce").eq(3).css({
		"top" : "180px"
	});
	// 设置滑动效果
	$(".W_leaderImg").eq(1).mouseover(function(){
		$(this).stop(true,false).animate({"top":0},700);
	}).mouseout(function(){
		$(this).stop(true,false).animate({"top":"120px"},700);
	})
	$(".W_leaderImg").eq(3).mouseover(function(){
		$(this).stop(true,false).animate({"top":0},700);
	}).mouseout(function(){
		$(this).stop(true,false).animate({"top":"120px"},700);
	})
	$(".W_leaderImg").eq(0).mouseover(function(){
		$(this).stop(true,false).animate({"top":"120px"},700);
	}).mouseout(function(){
		$(this).stop(true,false).animate({"top":0},700);
	})
	$(".W_leaderImg").eq(2).mouseover(function(){
		$(this).stop(true,false).animate({"top":"120px"},700);
	}).mouseout(function(){
		$(this).stop(true,false).animate({"top":0},700);
	})
	$(".W_leaderImg").eq(4).mouseover(function(){
		$(this).stop(true,false).animate({"top":"120px"},700);
	}).mouseout(function(){
		$(this).stop(true,false).animate({"top":0},700);
	})
})