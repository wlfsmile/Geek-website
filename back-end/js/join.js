var nowPage;
var url;
function j(){
	$.ajax({
		type : "GET",
		url : url,
		success : function(data){
			if (data.success == true) {
				var oData = data.data.listCandidates;
				var len = oData.length;
				var joinStr = '';
				var str = '';
				pageNum = data.data.page.totalPage;
				t = data.data.page.currentPage;
				for(var i=0;i<len;i++){
					joinStr+='<tr>'+
									'<td class="candidate_id">'+oData[i].candidateId+'</td>'+
									'<td>'+oData[i].name+'</td>'+
									'<td>'+oData[i].school+'</td>'+
									'<td>'+oData[i].major+'</td>'+
									'<td>'+oData[i].direction+'</td>'+
									'<td>'+oData[i].introduction+'</td>'+
								'</tr>';
				}
				str =   '<table border="1" cellspacing="0" class="">'+
							'<tr class="join_tr">'+
								'<td>candidateId</td>'+
								'<td>name</td>'+
								'<td>school</td>'+
								'<td>major</td>'+
								'<td>direction</td>'+
								'<td>introduction</td>'+
							'</tr>'+
							joinStr+
						'</table>';
				$('.join_show_body').html(str);
				//按钮高亮显示
				$(".joinPage_li").eq(nowPage-1).css({
					"background-color": "#32afcf",
					"color": "#fff"
				}).siblings().css({
					"background-color": "#fff",
					"color": "#aaa"
				});
			}else{
				alert("失败");
			}
		},
		error : function(){
			alert("请求失败");
		}
	})
}
function join(){
	$(".joinPage_li").on("click",function(){
			nowPage =$(this).text();
			url = "/candidate/listCandidates/"+ nowPage;
		j();
	})
	$("#joinPage_prev").click(function(){
		$.ajax({
			type : "GET",
			url : "/candidate/listCandidates/"+nowPage,
			success : function(data){
				if (data.success == true) {
					 pageNum = data.data.page.totalPage;
					 nowPage = data.data.page.currentPage;
					if (nowPage == 1) {
						alert("已经是第一页了");
					}else {
						nowPage = nowPage - 1;
						url = "/candidate/listCandidates/"+ nowPage;
						j();
					}
				}
			},
			error : function(){
				alert("请求失败");
			}
		})
	})
	$("#joinPage_next").click(function(){
		$.ajax({
			type : "GET",
			url : "/candidate/listCandidates/"+nowPage,
			success : function(data){
				if (data.success == true) {
					 pageNum = data.data.page.totalPage;
					 nowPage = data.data.page.currentPage;
					if (nowPage == pageNum) {
						alert("已经是最后一页了");
					}else {
						nowPage = nowPage + 1;
						url = "/candidate/listCandidates/"+ nowPage;
						j();
					}
				}
			},
			error : function(){
				alert("请求失败");
			}
		})
	})	
}
$(function(){
	$("#joinus").click(function(){
		var url = "/candidate/listCandidates/"+ nowPage;
		var nowPage = 1;
		$.ajax({
			type : "GET",
			url : url,
			success : function(data){
				if (data.success == true) {
					var oData = data.data.listCandidates;
					var len = oData.length;
					var joinStr = '';
					var str = '';
					var pageNum = data.data.page.totalPage;
					var nowPage = data.data.page.currentPage;
					for(var i=0;i<len;i++){
						joinStr+='<tr>'+
										'<td class="candidate_id">'+oData[i].candidateId+'</td>'+
										'<td>'+oData[i].name+'</td>'+
										'<td>'+oData[i].school+'</td>'+
										'<td>'+oData[i].major+'</td>'+
										'<td>'+oData[i].direction+'</td>'+
										'<td>'+oData[i].introduction+'</td>'+
									'</tr>';
					}
					str =   '<table border="1" cellspacing="0" class="">'+
								'<tr class="join_tr">'+
									'<td>candidateId</td>'+
									'<td>name</td>'+
									'<td>school</td>'+
									'<td>major</td>'+
									'<td>direction</td>'+
									'<td>introduction</td>'+
								'</tr>'+
								joinStr+
							'</table>';
					$('.join_show_body').html(str);

					// 生成分页按钮
					var pageStr2 = '';
					var pageStr1 = '';
					for(var i=1;i<=pageNum;i++){
						pageStr1+='<li class="joinPage_li">'+ i +'</li>';
					}
					pageStr2 = '<a class="joinPage_prev joinPage_change" id="joinPage_prev">上一页</a><ul class="joinPage_ul">'+
								pageStr1+
								'</ul>'+
								'<a class="joinPage_next joinPage_change" id="joinPage_next">下一页</a>';
					$(".joinPage").html(pageStr2);

					//按钮高亮显示
					$(".joinPage_li").eq(nowPage-1).css({
						"background-color": "#32afcf",
						"color": "#fff"
					}).siblings().css({
						"background-color": "#fff",
						"color": "#aaa"
					});

					join();

				}else{
					alert("加入我们失败");
				}
			},
			error : function(){
				alert("加入我们请求失败");
			}
		})
	})
})