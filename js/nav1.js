$(function(){
//点击导航栏
	var oS=$('#SXH').height();
	var oT=$('#TY').height();
	var oT_1=$('#TY_2').height();
	var oW=$('#WLF').height();
	var oS_1=$('.SXH_2').height();
	$(".nav li").eq(0).click(function(){
		$("#body").stop(true,false).animate({scrollTop:0},700);
	})
	$(".nav li").eq(1).click(function(){
		$("#body").stop(true,false).animate({scrollTop:oS},700);
	})
	$(".nav li").eq(2).click(function(){
		$("#body").stop(true,false).animate({scrollTop:oS+620+"px"},700);
	})
	$(".nav li").eq(3).click(function(){
		$("#body").stop(true,false).animate({scrollTop:oS+1360+"px"},700);
	})
	$(".nav li").eq(4).click(function(){
		$("#body").stop(true,false).animate({scrollTop:oS+oW+1450+"px"},700);
	})

	//滑动加入我们
	$(".form").mouseover(function(){
		$(".form").stop(true,false).animate({right:250},700);
	}).mouseout(function(){
		$(".form").stop(true,false).animate({right:0},700);
	})
})	
	
