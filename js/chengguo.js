var imgs;
(function(){
		$.ajax({
			type : "GET",
			url : "/home/allProductions",
			success : function(data){
				if (data.success == true){
			        var oData = data.data;
			        imgs = oData; 
				}else{
					alert("失败");
				}
			},
			error : function(){
				alert("请求失败");
			}
		})
	$(function(){
		$("#S_slider").sudySlider();
	})
})();
		

	