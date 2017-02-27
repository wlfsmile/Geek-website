//点击保存添加作品的函数
function workadd(){
	var workForm = new FormData(document.getElementById("addWork"));
	$.ajax({
		type : "post",
		url : "/production",
		data : workForm,
		processData: false,
        contentType: false,
		success : function(data){
			if (data.success == true) {
				alert(data.data);
				window.location.reload();
			}else{
				alert("添加作品失败")
			}
		},
		error : function(){
			alert("添加作品请求失败");
		}
	})
}
var url;
var nowPage;
//修改、删除作品函数
function work(){
	//点击删除
	$(".delWork").click(function(){
		if(confirm("确定要删除数据吗")){
			var url = "/production/name/"+ $(this).parent("td").siblings().eq(0).text();
			$.ajax({
				type : "POST",
				url : url,
				data : {
					"_method": "delete"
				},
				dataType: "json",
				success : function(data){
					if (data.success == true) {
						alert("删除成功");
						window.location.reload();
					}else{
						alert("失败");
					}
				},
				error : function(){
					alert("请求失败");
				}
			})
		}else{
			alert("已取消删除");
		}
	})
	
	//点击修改，跳出登录框，显示为默认数据
	$(".changeWork").click(function(){
		$(".login").css({
			"display":"block"
		});
		$(".mask").css({
			"display":"block"
		});
		var workchangeStr = '';
		workchangeStr = '<form id="changeWork" method="post" name="formDada" enctype="multipart/form-data">'+
							'<p>'+
								'<input type="file" name="file" class="file">'+
							'</p>'+
							'<p>'+
								'名字:<input type="text" class="name" name="name" value='+ $(this).parent().siblings().eq(0).text() +'>'+
							'</p>'+
							'<p>'+
								'地址:<input type="text" class="url" name="url" value='+ $(this).parent().siblings().eq(1).text() +'>'+
							'</p>'+
							'<p>'+
								'简介:<textarea type="text" class="introduction" name="introduction">'+ $(this).parent().siblings().eq(2).text() +'</textarea>'+
							'</p>'+
							'<input type="hidden" name="_method" value="put">'+
						'</form>'+
						'<button type="button" class="workSub">保存修改</button>';
		$(".login_content").html(workchangeStr);

		var t = $(this).parent().siblings().eq(0).text();
		console.log(t);
		//点击保存修改
		$(".workSub").click(function(){
			var workForm = new FormData(document.getElementById("changeWork"));
			var url = "/production/name/"+t;
			console.log(url);
				$.ajax({
					type : "POST",
					url : url,
					data : workForm,
					processData: false,
				    contentType: false,
					success : function(data){
						if (data.success == true) {
							alert(data.data);
							window.location.reload();
						}else{
							alert("失败")
						}
					},
					error : function(){
						alert("请求失败");
					}
				});//ajax结束
		})
	})	//点击修改结束
}

function w(){
	$.ajax({
		type : "GET",
		url : "/production/listProductions/"+nowPage,
		success : function(data){
			if (data.success == true) {
				var oData = data.data.listProductions;
				var len = oData.length;
				var str = '';
				pageNum = data.data.page.totalPage;
				t = data.data.page.currentPage;
				var workStr = '';
				for(var i=0;i<len;i++){
					workStr+='<tr>'+
								'<td>'+oData[i].name+'</td>'+
								'<td>'+oData[i].url+'</td>'+
								'<td>'+oData[i].introduction+'</td>'+
								'<td><img src="../'+oData[i].effectPicture+'" class="productionImg" alt="img"></td>'+
								'<td><button type="button" class="changeWork">修改</button></td>'+
								'<td><button type="button" class="delWork"">删除</button></td>'+
							'</tr>';
				}
				str =   '<table border="1" cellspacing="0" class="">'+
							'<tr>'+
								'<td>name</td>'+
								'<td>url</td>'+
								'<td>introduction</td>'+
								'<td>effectPicture</td>'+
								'<td></td>'+
								'<td></td>'+
							'</tr>'+
							workStr+
						'</table>';
				$(".work_show_body").html(str);
				//按钮高亮显示
				$(".workPage_li").eq(nowPage-1).css({
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
//点击页码函数
function page(){
	$(".workPage_li,.workPage_li_1").on("click",function(){
			nowPage =$(this).text();
			url = "/production/listProductions/"+nowPage;
		w();
	})
	$("#workPage_prev,#workPage_prev_1").click(function(){
		$.ajax({
			type : "GET",
			url : "/production/listProductions/"+nowPage,
			success : function(data){
				if (data.success == true) {
					 pageNum = data.data.page.totalPage;
					 nowPage = data.data.page.currentPage;
					console.log(nowPage);
					if (nowPage == 1) {
						alert("已经是第一页了");
					}else {
						nowPage = nowPage - 1;
						url = "/production/listProductions/"+ nowPage;
						w();
					}
				}
			},
			error : function(){
				alert("请求失败");
			}
		})
	})
	$("#workPage_next,#workPage_next_1").click(function(){
		$.ajax({
			type : "GET",
			url : "/production/listProductions/"+nowPage,
			success : function(data){
				if (data.success == true) {
					var pageNum = data.data.page.totalPage;
					 nowPage = data.data.page.currentPage;
					console.log(nowPage);
					if (nowPage == pageNum) {
						alert("已经是最后一页了");
					}else {
						nowPage = nowPage + 1;
						url = "/production/listProductions/"+ nowPage;
						w();
					}
				}
			},
			error : function(){
				alert("请求失败");
			}
		})
		/*if (nowPage == pageNum) {
			alert("已经是最后一页了");
		}else {
			nowPage = nowPage + 1;
			url = "/production/listProductions/"+nowPage;
			w();
		}*/
	})	
}
$(function(){
	//页面展示
	$("#workshow").click(function(){
		$.ajax({
			type : "GET",
			url : "/production/listProductions/"+nowPage,
			success : function(data){
				if(data.success == true){
					var workStr = '';
					var oData = data.data.listProductions;
					var str = '';
					var len = oData.length;
					var pageNum = data.data.page.totalPage;
					nowPage = data.data.page.currentPage;
					for(var i=0;i<len;i++){
						workStr+='<tr>'+
										'<td>'+oData[i].name+'</td>'+
										'<td>'+oData[i].url+'</td>'+
										'<td>'+oData[i].introduction+'</td>'+
										'<td><img src="../'+oData[i].effectPicture+'" class="productionImg" alt="img"></td>'+
										'<td><button type="button" class="changeWork">修改</button></td>'+
										'<td><button type="button" class="delWork"">删除</button></td>'+
									'</tr>';
					}
					str =   '<table border="1" cellspacing="0" class="">'+
								'<tr>'+
									'<td>name</td>'+
									'<td>url</td>'+
									'<td>introduction</td>'+
									'<td>effectPicture</td>'+
									'<td></td>'+
									'<td></td>'+
								'</tr>'+
								workStr+
							'</table>';
					$(".work_show_body").html(str);
					work();
					// 生成分页按钮
					var workpageStr1 = '';
					var workpageStr2 = '';
					for(var i=1;i<=pageNum;i++){
						workpageStr1+='<li class="workPage_li">'+ i +'</li>';
					}
					workpageStr2 = '<a class="workPage_prev workPage_change" id="workPage_prev">上一页</a><ul class="workPage_ul">'+
									workpageStr1 +
									'</ul>'+
									'<a class="workPage_next workPage_change" id="workPage_next">下一页</a>';
					$(".workPage").html(workpageStr2);

					//按钮高亮显示
					$(".workPage_li").eq(nowPage-1).css({
						"background-color": "#32afcf",
						"color": "#fff"
					}).siblings().css({
						"background-color": "#fff",
						"color": "#aaa"
					});

					page();
				}else{
					alert("失败");
				}
			},
			error : function(){
				alert("请求失败");
			}
		})
	})
	//点击查询作品
	$("#work_searchBtn").click(function(){
		var nowPage = 1;
		var url = "/production/name/"+$("#work_search").val()+"/"+nowPage;
		$.ajax({
			type : "GET",
			url : url,
			success : function(data){
				if (data.success == true) {
					if(data.data == "not found."){
						alert("没有该数据");
					}else{
						var oData = data.data.listProductions;
						var workStr = '';
						var str = '';
						var len = oData.length;
						var pageNum = data.data.page.totalPage;
						for(var i=0;i<len;i++){
							workStr+='<tr>'+
										'<td>'+oData[i].name+'</td>'+
										'<td>'+oData[i].url+'</td>'+
										'<td>'+oData[i].introduction+'</td>'+
										'<td><img src="../'+oData[i].effectPicture+'" class="productionImg" alt="img"></td>'+
										'<td><button type="button" class="changeWork">修改</button></td>'+
										'<td><button type="button" class="delWork"">删除</button></td>'+
									 '</tr>';
						}
						str =   '<table border="1" cellspacing="0" class="">'+
									'<tr>'+
										'<td>name</td>'+
										'<td>url</td>'+
										'<td>introduction</td>'+
										'<td>effectPicture</td>'+
										'<td></td>'+
										'<td></td>'+
									'</tr>'+
									workStr+
								'</table>';
						$('.work_show_body').html(str);
						work();

						//生成分页按钮
						var workpageStr = '';
						var workpageStr_1 ='';
						for(var i=1;i<=pageNum;i++){
							workpageStr_1+='<li class="workPage_li">'+ i +'</li>';
						}
						workpageStr = '<a class="workPage_prev workPage_change" id="workPage_prev_1">上一页</a><ul class="workPage_ul">'+
									   workpageStr_1+
									   '</ul>'+
									   '<a class="workPage_next workPage_change" id="workPage_next_1">下一页</a>';
						$(".workPage").html(workpageStr);

						//按钮高亮显示
						$(".workPage_li").eq(nowPage-1).css({
							"background-color": "#32afcf",
							"color": "#fff"
						}).siblings().css({
							"background-color": "#fff",
							"color": "#aaa"
						});

						// 分页数字点击
						$(".workPage_li").click(function(){
							nowPage = $(this).text();
							$.ajax({
								type : "GET",
								url : url,
								success : function(data){
									if (data.success == true) {
										var workStr = '';
										var oData = data.data.listProductions;
										var str = '';
										var len = oData.length;
										var pageNum = data.data.page.totalPage;
										nowPage = data.data.page.currentPage;
										for(var i=0;i<len;i++){
											workStr+='<tr>'+
															'<td>'+oData[i].name+'</td>'+
															'<td>'+oData[i].url+'</td>'+
															'<td>'+oData[i].introduction+'</td>'+
															'<td><img src="../'+oData[i].effectPicture+'" class="productionImg" alt="img"></td>'+
															'<td><button type="button" class="changeWork">修改</button></td>'+
															'<td><button type="button" class="delWork">删除</button></td>'+
														'</tr>';
										}
										str =   '<table border="1" cellspacing="0" class="">'+
													'<tr>'+
														'<td>name</td>'+
														'<td>url</td>'+
														'<td>introduction</td>'+
														'<td>effectPicture</td>'+
														'<td></td>'+
														'<td></td>'+
													'</tr>'+
													workStr+
												'</table>';
										$(".work_show_body").html(str);
										work();

										//按钮高亮显示
										$(".workPage_li").eq(nowPage-1).css({
											"background-color": "#32afcf",
											"color": "#fff"
										}).siblings().css({
											"background-color": "#fff",
											"color": "#aaa"
										});										
									}else{
										alert("分页按钮点击失败");
									}
								},
								error : function(){
									alert("分页按钮点击请求失败");
								}
							})//点击页码ajax结束
						})//点击页码结束

							//点击上一页
						$("#workPage_prev_1").click(function(){
							if (nowPage == 1) {
								alert("已经是第一页了");
							}else{
								nowPage = nowPage - 1;
								$.ajax({
									type : "GET",
									url : url,
									success : function(data){
										if (data.success == true) {
											var workStr = '';
											var oData = data.data.listProductions;
											var str = '';
											var len = oData.length;
											var pageNum = data.data.page.totalPage;
											nowPage = data.data.page.currentPage;
											for(var i=0;i<len;i++){
												workStr+='<tr>'+
																'<td>'+oData[i].name+'</td>'+
																'<td>'+oData[i].url+'</td>'+
																'<td>'+oData[i].introduction+'</td>'+
																'<td><img src"../'+oData[i].effectPicture+'" class="productionImg" alt="img"></td>'+
																'<td><button type="button" class="changeWork">修改</button></td>'+
																'<td><button type="button" class="delWork">删除</button></td>'+
															'</tr>';
											}
											str =   '<table border="1" cellspacing="0" class="">'+
														'<tr>'+
															'<td>name</td>'+
															'<td>url</td>'+
															'<td>introduction</td>'+
															'<td>effectPicture</td>'+
															'<td></td>'+
															'<td></td>'+
														'</tr>'+
														workStr+
													'</table>';
											$(".work_show_body").html(str);
											work();

											//按钮高亮显示
											$(".workPage_li").eq(nowPage-1).css({
												"background-color": "#32afcf",
												"color": "#fff"
											}).siblings().css({
												"background-color": "#fff",
												"color": "#aaa"
											});

										}else{
											alert("上一页点击失败");
										}
									},//success结束
									error : function(){
										alert("上一页点击请求失败");
									}
									})//点击上一页ajax结束
								}//else结束
						})//点击上一页结束

						// 点击下一页
						$("#workPage_next_1").click(function(){
							if (nowPage == pageNum) {
								alert("已经是最后一页了");
							}else{
								nowPage = nowPage + 1;
								$.ajax({
									type : "GET",
									url : url,
									success : function(data){
										if (data.success == true) {
											var workStr = '';
											var oData = data.data.listProductions;
											var str = '';
											var len = oData.length;
											var pageNum = data.data.page.totalPage;
											nowPage = data.data.page.currentPage;
											for(var i=0;i<len;i++){
												workStr+='<tr>'+
																'<td>'+oData[i].name+'</td>'+
																'<td>'+oData[i].url+'</td>'+
																'<td>'+oData[i].introduction+'</td>'+
																'<td><img src="../'+oData[i].effectPicture+'" class="productionImg" alt="img"></td>'+
																'<td><button type="button" class="changeWork">修改</button></td>'+
																'<td><button type="button" class="delWork">删除</button></td>'+
															'</tr>';
											}
											str =   '<table border="1" cellspacing="0" class="">'+
														'<tr>'+
															'<td>name</td>'+
															'<td>url</td>'+
															'<td>introduction</td>'+
															'<td>effectPicture</td>'+
															'<td></td>'+
															'<td></td>'+
														'</tr>'+
														workStr+
													'</table>';
											$(".work_show_body").html(str);
											work();

											//按钮高亮显示
											$(".workPage_li").eq(nowPage-1).css({
												"background-color": "#32afcf",
												"color": "#fff"
											}).siblings().css({
												"background-color": "#fff",
												"color": "#aaa"
											});

										}else{
											alert("下一页点击失败");
										}
									},//success结束
									error : function(){
										alert("下一页点击请求失败");
									}
									})//点击下一页ajax结束
								}//else结束
						})//点击下一页结束						
					}
				}else{
					alert("查询作品失败");
				}
			},
			error : function(){
				alert("查询作品请求失败");
			}
		})
	})
})//function 渲染结束