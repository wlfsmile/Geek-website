function c(){
	//点击删除
	$(".del").click(function(){
		if(confirm("确定要删除数据吗")){
			var url = "/geek/member/memberId/"+ $(this).parent("td").siblings().eq(0).text();
			console.log(url);
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
	// 点击修改成员信息，弹出框表单显示且内容为此人信息
	$(".change").click(function(){
		$(".login").css({
			"display":"block"
		});
		$(".mask").css({
			"display":"block"
		});
		var changeStr = '';
		changeStr = '<form id="changeMember" method="post" name="formDada" enctype="multipart/form-data">'+
						'<p>'+
							'<input type="file" name="file" class="file">'+
						'</p>'+
						'<p class="p_memberId">'+
							'学号:<input type="text" class="memberId" name="memberId" value='+ $(this).parent().siblings().eq(0).text() +'>'+
						'</p>'+
						'<p>'+
							'姓名:<input type="text" class="name" name="name" value='+ $(this).parent().siblings().eq(1).text()+'>'+
						'</p>'+
						'<p>'+
							'性别:<input type="text" class="sex" name="sex" value='+ $(this).parent().siblings().eq(2).text() +' >'+
						'</p>'+
						'<p>'+
							'方向:<input type="text" class="direction" name="direction" value='+ $(this).parent().siblings().eq(3).text() +'>'+
						'</p>'+
						'<p>'+
							'公司:<input type="text" class="company" name="company" value='+ $(this).parent().siblings().eq(5).text() +'>'+
						'</p>'+
						'<p>'+
							'简介:<textarea type="text" class="introduction" name="introduction">'+$(this).parent().siblings().eq(4).text()+'</textarea>'+
						'</p>'+
						'<input type="hidden" name="_method" value="put">'+
					'</form>'+
					'<button type="button" class="changeSub" >保存修改</button>';
		$(".login_content").html(changeStr);
		// 点击保存修改
		var t = $(this).parent().siblings().eq(0).text();
		$(".changeSub").click(function(){
			var form = new FormData(document.getElementById("changeMember"));
			var url = "/geek/member/memberId/"+t;
				$.ajax({
					type : "POST",
					url : url,
					data : form,
					cache: false,
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
		return false;
	})
}
function g(){
	$.ajax({
		type : "GET",
		url : "/geek/member/listOldMembers/"+1,
		success : function(data){
			var p = new Promise(function(res, rej){
				if (data.success == true) {
					res();
				} else {
					rej();
				}
			});
			p.then(function(){
				var oData = data.data.listMembers;
				var len = oData.length;
				var graduateStr = '';
				var str = '';
				var pageSize = data.page;
				var pageNum = data.data.page.totalPage;
				var nowPage = data.data.page.currentPage;
				for(var i=0;i<len;i++){
					graduateStr+='<tr class="graduate_tr">'+
									'<td class="member_id">'+oData[i].memberId+'</td>'+
									'<td>'+oData[i].name+'</td>'+
									'<td>'+oData[i].sex+'</td>'+
									'<td>'+oData[i].direction+'</td>'+
									'<td>'+oData[i].introduction+'</td>'+
									'<td>'+oData[i].company+'</td>'+
									'<td><img src='+oData[i].photo+' class="memberImg" alt="img"></td>'+
									'<td><button type="button" class="change">修改</button></td>'+
									'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
								'</tr>';
				}
				str =   '<table border="1" cellspacing="0" class="">'+
							'<tr>'+
								'<td>memberId</td>'+
								'<td>name</td>'+
								'<td>sex</td>'+
								'<td>direction</td>'+
								'<td>introduction</td>'+
								'<td>company</td>'+
								'<td>photo</td>'+
								'<td></td>'+
								'<td></td>'+
							'</tr>'+
							graduateStr+
						'</table>';
				$('.graduate_show_body').html(str);

				// 生成分页按钮
				var pageStr = '';
				for(var i=1;i<=pageNum;i++){
					pageStr+='<li class="page_li">'+ i +'</li>';
				}
				$(".page_ul").html(pageStr);

				//按钮高亮显示
				$(".page_li").eq(nowPage-1).css({
					"background-color": "#32afcf",
					"color": "#fff"
				}).siblings().css({
					"background-color": "#fff",
					"color": "#aaa"
				});

				// 分页数字按钮点击
				$(".page li").click(function(){
					nowPage = $(this).text();
					$.ajax({
						type : "GET",
						url : "/geek/member/listOldMembers/"+nowPage,
						success : function(data){
							if (data.success == true) {
								var oData = data.data.listMembers;
								var len = oData.length;
								var graduateStr = '';
								var str = '';
								var pageSize = data.page;
								var pageNum = data.data.page.totalPage;
								var nowPage = data.data.page.currentPage
								for(var i=0;i<len;i++){
									graduateStr+='<tr class="graduate_tr">'+
													'<td class="member_id">'+oData[i].memberId+'</td>'+
													'<td>'+oData[i].name+'</td>'+
													'<td>'+oData[i].sex+'</td>'+
													'<td>'+oData[i].direction+'</td>'+
													'<td>'+oData[i].introduction+'</td>'+
													'<td>'+oData[i].company+'</td>'+
													'<td><img src='+oData[i].photo+' class="memberImg" alt="img"></td>'+
													'<td><button type="button" class="change">修改</button></td>'+
													'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
												'</tr>';
								}
								str =   '<table border="1" cellspacing="0" class="">'+
											'<tr>'+
												'<td>memberId</td>'+
												'<td>name</td>'+
												'<td>sex</td>'+
												'<td>direction</td>'+
												'<td>introduction</td>'+
												'<td>company</td>'+
												'<td>photo</td>'+
												'<td></td>'+
												'<td></td>'+
											'</tr>'+
											graduateStr+
										'</table>';
								$('.graduate_show_body').html(str);
								c();
								//按钮高亮显示
								$(".page_li").eq(nowPage-1).css({
									"background-color": "#32afcf",
									"color": "#fff"
								}).siblings().css({
									"background-color": "#fff",
									"color": "#aaa"
								});
							}else{
								alert("点击按钮失败");
							}
						},
						error : function(){
							alert("点击按钮请求失败")
						}
					})
				})

				// 上一页点击
				$("#page_prev").click(function(){
					if (nowPage == 1) {
						alert("已经是第一页了");
					}else{
					nowPage = nowPage - 1;
					$.ajax({
						type : "GET",
						url : "/geek/member/listOldMembers/"+nowPage,
						success : function(data){
							if (data.success == true) {
								var oData = data.data.listMembers;
								var len = oData.length;
								var graduateStr = '';
								var str = '';
								var pageSize = data.page;
								var pageNum = data.data.page.totalPage;
								var nowPage = data.data.page.currentPage;
								for(var i=0;i<len;i++){
									graduateStr+='<tr class="graduate_tr">'+
													'<td class="member_id">'+oData[i].memberId+'</td>'+
													'<td>'+oData[i].name+'</td>'+
													'<td>'+oData[i].sex+'</td>'+
													'<td>'+oData[i].direction+'</td>'+
													'<td>'+oData[i].introduction+'</td>'+
													'<td>'+oData[i].company+'</td>'+
													'<td><img src='+oData[i].photo+' class="memberImg" alt="img"></td>'+
													'<td><button type="button" class="change">修改</button></td>'+
													'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
												'</tr>';
								}
								str =   '<table border="1" cellspacing="0" class="">'+
											'<tr>'+
												'<td>memberId</td>'+
												'<td>name</td>'+
												'<td>sex</td>'+
												'<td>direction</td>'+
												'<td>introduction</td>'+
												'<td>company</td>'+
												'<td>photo</td>'+
												'<td></td>'+
												'<td></td>'+
											'</tr>'+
											graduateStr+
										'</table>';
								$('.graduate_show_body').html(str);
								c();
								//按钮高亮显示
								$(".page_li").eq(nowPage-1).css({
									"background-color": "#32afcf",
									"color": "#fff"
								}).siblings().css({
									"background-color": "#fff",
									"color": "#aaa"
								});
							}else{
								alert("点击按钮失败");
							}
						},//如果ajax成功结束
						error : function(){
							alert("点击按钮请求失败")
						}
					})//ajax请求结束
					}//else结束
				});//点击事件结束

				//下一页点击
				$("#page_next").click(function(){
					if (nowPage == pageNum) {
						alert("已经是最后一页了");
					}else{
					nowPage = nowPage + 1;
					$.ajax({
						type : "GET",
						url : "/geek/member/listOldMembers/"+nowPage,
						success : function(data){
							if (data.success == true) {
								var oData = data.data.listMembers;
								var len = oData.length;
								var graduateStr = '';
								var str = '';
								var pageSize = data.page;
								var pageNum = data.data.page.totalPage;
								var nowPage = data.data.page.currentPage;
								for(var i=0;i<len;i++){
									graduateStr+='<tr class="graduate_tr">'+
													'<td class="member_id">'+oData[i].memberId+'</td>'+
													'<td>'+oData[i].name+'</td>'+
													'<td>'+oData[i].sex+'</td>'+
													'<td>'+oData[i].direction+'</td>'+
													'<td>'+oData[i].introduction+'</td>'+
													'<td>'+oData[i].company+'</td>'+
													'<td><img src='+oData[i].photo+' class="memberImg" alt="img"></td>'+
													'<td><button type="button" class="change">修改</button></td>'+
													'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
												'</tr>';
								}
								str =   '<table border="1" cellspacing="0" class="">'+
											'<tr>'+
												'<td>memberId</td>'+
												'<td>name</td>'+
												'<td>sex</td>'+
												'<td>direction</td>'+
												'<td>introduction</td>'+
												'<td>company</td>'+
												'<td>photo</td>'+
												'<td></td>'+
												'<td></td>'+
											'</tr>'+
											graduateStr+
										'</table>';
								$('.graduate_show_body').html(str);
								c();
								//按钮高亮显示
								$(".page_li").eq(nowPage-1).css({
									"background-color": "#32afcf",
									"color": "#fff"
								}).siblings().css({
									"background-color": "#fff",
									"color": "#aaa"
								});
							}else{
								alert("点击按钮失败");
							}
						},//如果ajax发送成功结束
						error : function(){
							alert("点击按钮请求失败")
						}
					})//ajax请求结束
					}//else结束
				})//点击事件结束
			}).then(function(){
				c();
			}).catch(function(){
				alert("失败");
			})
		},
		error : function(){
			alert("请求失败");
		}
	})
}
$(function(){
// 毕业去向初始展示
$("#whereabouts").click(function(){
	//var nowPage=1;	
	g();
	/*$.ajax({
		type : "GET",
		url : "/geek/member/listOldMembers/"+nowPage,
		success : function(data){
			var p = new Promise(function(res, rej){
				if (data.success == true) {
					res();
				} else {
					rej();
				}
			});
			p.then(function(){
				var oData = data.data.listMembers;
				var len = oData.length;
				var graduateStr = '';
				var str = '';
				var pageSize = data.page;
				var pageNum = data.data.page.totalPage;
				// 
				for(var i=0;i<len;i++){
					graduateStr+='<tr class="graduate_tr">'+
									'<td class="member_id">'+oData[i].memberId+'</td>'+
									'<td>'+oData[i].name+'</td>'+
									'<td>'+oData[i].sex+'</td>'+
									'<td>'+oData[i].direction+'</td>'+
									'<td>'+oData[i].introduction+'</td>'+
									'<td>'+oData[i].company+'</td>'+
									'<td><img src='+oData[i].photo+' class="memberImg" alt="img"></td>'+
									'<td><button type="button" class="change">修改</button></td>'+
									'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
								'</tr>';
				}
				str =   '<table border="1" cellspacing="0" class="">'+
							'<tr>'+
								'<td>memberId</td>'+
								'<td>name</td>'+
								'<td>sex</td>'+
								'<td>direction</td>'+
								'<td>introduction</td>'+
								'<td>company</td>'+
								'<td>photo</td>'+
								'<td></td>'+
								'<td></td>'+
							'</tr>'+
							graduateStr+
						'</table>';
				$('.graduate_show_body').html(str);

				// 生成分页按钮
				var pageStr = '';
				for(var i=1;i<=pageNum;i++){
					pageStr+='<li class="page_li">'+ i +'</li>';
				}
				$(".page_ul").html(pageStr);

				// 分页数字按钮点击
				$(".page li").click(function(){
					nowPage = $(this).text();
					$.ajax({
						type : "GET",
						url : "/geek/member/listOldMembers/"+nowPage,
						success : function(data){
							if (data.success == true) {
								var oData = data.data.listMembers;
								var len = oData.length;
								var graduateStr = '';
								var str = '';
								var pageSize = data.page;
								var pageNum = data.data.page.totalPage;
								// 
								for(var i=0;i<len;i++){
									graduateStr+='<tr class="graduate_tr">'+
													'<td class="member_id">'+oData[i].memberId+'</td>'+
													'<td>'+oData[i].name+'</td>'+
													'<td>'+oData[i].sex+'</td>'+
													'<td>'+oData[i].direction+'</td>'+
													'<td>'+oData[i].introduction+'</td>'+
													'<td>'+oData[i].company+'</td>'+
													'<td><img src='+oData[i].photo+' class="memberImg" alt="img"></td>'+
													'<td><button type="button" class="change">修改</button></td>'+
													'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
												'</tr>';
								}
								str =   '<table border="1" cellspacing="0" class="">'+
											'<tr>'+
												'<td>memberId</td>'+
												'<td>name</td>'+
												'<td>sex</td>'+
												'<td>direction</td>'+
												'<td>introduction</td>'+
												'<td>company</td>'+
												'<td>photo</td>'+
												'<td></td>'+
												'<td></td>'+
											'</tr>'+
											graduateStr+
										'</table>';
								$('.graduate_show_body').html(str);
								c();
							}else{
								alert("点击按钮失败");
							}
						},
						error : function(){
							alert("点击按钮请求失败")
						}
					})
				})

				// 上一页点击
				$("#page_prev").click(function(){
					if (nowPage == 1) {
						alert("已经是第一页了");
					}else{
					nowPage = nowPage - 1;
					$.ajax({
						type : "GET",
						url : "/geek/member/listOldMembers/"+nowPage,
						success : function(data){
							if (data.success == true) {
								var oData = data.data.listMembers;
								var len = oData.length;
								var graduateStr = '';
								var str = '';
								var pageSize = data.page;
								var pageNum = data.data.page.totalPage;
								// 
								for(var i=0;i<len;i++){
									graduateStr+='<tr class="graduate_tr">'+
													'<td class="member_id">'+oData[i].memberId+'</td>'+
													'<td>'+oData[i].name+'</td>'+
													'<td>'+oData[i].sex+'</td>'+
													'<td>'+oData[i].direction+'</td>'+
													'<td>'+oData[i].introduction+'</td>'+
													'<td>'+oData[i].company+'</td>'+
													'<td><img src='+oData[i].photo+' class="memberImg" alt="img"></td>'+
													'<td><button type="button" class="change">修改</button></td>'+
													'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
												'</tr>';
								}
								str =   '<table border="1" cellspacing="0" class="">'+
											'<tr>'+
												'<td>memberId</td>'+
												'<td>name</td>'+
												'<td>sex</td>'+
												'<td>direction</td>'+
												'<td>introduction</td>'+
												'<td>company</td>'+
												'<td>photo</td>'+
												'<td></td>'+
												'<td></td>'+
											'</tr>'+
											graduateStr+
										'</table>';
								$('.graduate_show_body').html(str);
								c();
							}else{
								alert("点击按钮失败");
							}
						},//如果ajax成功结束
						error : function(){
							alert("点击按钮请求失败")
						}
					})//ajax请求结束
					}//else结束
				});//点击事件结束

				//下一页点击
				$("#page_next").click(function(){
					if (nowPage == pageNum) {
						alert("已经是最后一页了");
					}else{
					nowPage = nowPage+1;
					$.ajax({
						type : "GET",
						url : "/geek/member/listOldMembers/"+nowPage,
						success : function(data){
							if (data.success == true) {
								var oData = data.data.listMembers;
								var len = oData.length;
								var graduateStr = '';
								var str = '';
								var pageSize = data.page;
								var pageNum = data.data.page.totalPage;
								// 
								for(var i=0;i<len;i++){
									graduateStr+='<tr class="graduate_tr">'+
													'<td class="member_id">'+oData[i].memberId+'</td>'+
													'<td>'+oData[i].name+'</td>'+
													'<td>'+oData[i].sex+'</td>'+
													'<td>'+oData[i].direction+'</td>'+
													'<td>'+oData[i].introduction+'</td>'+
													'<td>'+oData[i].company+'</td>'+
													'<td><img src='+oData[i].photo+' class="memberImg" alt="img"></td>'+
													'<td><button type="button" class="change">修改</button></td>'+
													'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
												'</tr>';
								}
								str =   '<table border="1" cellspacing="0" class="">'+
											'<tr>'+
												'<td>memberId</td>'+
												'<td>name</td>'+
												'<td>sex</td>'+
												'<td>direction</td>'+
												'<td>introduction</td>'+
												'<td>company</td>'+
												'<td>photo</td>'+
												'<td></td>'+
												'<td></td>'+
											'</tr>'+
											graduateStr+
										'</table>';
								$('.graduate_show_body').html(str);
								c();
							}else{
								alert("点击按钮失败");
							}
						},//如果ajax发送成功结束
						error : function(){
							alert("点击按钮请求失败")
						}
					})//ajax请求结束
					}//else结束
				})//点击事件结束
			}).then(function(){
				c();
			}).catch(function(){
				alert("失败");
			})
		},
		error : function(){
			alert("请求失败");
		}
	})*///ajax结束
});//点击毕业去向结束

// 点击学号查询
$("#W_searchBtn").click(function(){
	var nowPage = 1;
	var url = "/geek/member/memberId/"+$("#W_search").val()+"/"+nowPage;
	$.ajax({
		type : "GET",
		url : url,
		success : function(data){
			if (data.success == true) {
				if(data.data == "not found."){
					alert("没有该数据");
				}else{
					console.log(data.data);
					var mData = data.data.listMembers;
					var cStr = '';
					var s = '';
					var len = mData.length;
					var pageNum = data.data.page.totalPage;
					for(var i=0;i<len;i++){
						cStr+='<tr class="graduate_tr">'+
										'<td class="member_id">'+mData[i].memberId+'</td>'+
										'<td>'+mData[i].name+'</td>'+
										'<td>'+mData[i].sex+'</td>'+
										'<td>'+mData[i].direction+'</td>'+
										'<td>'+mData[i].introduction+'</td>'+
										'<td>'+mData[i].company+'</td>'+
										'<td><img src='+mData[i].photo+' class="memberImg" alt="img"></td>'+
										'<td><button type="button" class="change">修改</button></td>'+
										'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
									'</tr>';
					}
					s =   '<table border="1" cellspacing="0" class="">'+
								'<tr>'+
									'<td>memberId</td>'+
									'<td>name</td>'+
									'<td>sex</td>'+
									'<td>direction</td>'+
									'<td>introduction</td>'+
									'<td>company</td>'+
									'<td>photo</td>'+
									'<td></td>'+
									'<td></td>'+
								'</tr>'+
								cStr+
							'</table>';
					$('.graduate_show_body').html(s);
					c();

					// 生成分页按钮
					var pageStr = '';
					var pageStr_1 = '';
					for(var i=1;i<=pageNum;i++){
						pageStr_1+='<li class="page_li">'+ i +'</li>';
					}
					pageStr = '<a class="page_prev page_change" id="page_prev_1">上一页</a>'+
							  '<ul class="page_ul">'+
							  	pageStr_1+
							  '</ul>'+
							  '<a class="page_next page_change" id="page_next_1">下一页</a>';
					$(".page").html(pageStr);

					//按钮高亮显示
					$(".page_li").eq(nowPage-1).css({
						"background-color": "#32afcf",
						"color": "#fff"
					}).siblings().css({
						"background-color": "#fff",
						"color": "#aaa"
					});
					// 分页数字按钮点击
					$(".page li").click(function(){
						nowPage = $(this).text();
						$.ajax({
							type : "GET",
							url : "/geek/member/listOldMembers/"+nowPage,
							success : function(data){
								if (data.success == true) {
									var mData = data.data.listMembers;
									var len = mData.length;
									var cStr = '';
									var s = '';
									var pageSize = data.page;
									var pageNum = data.data.page.totalPage;
									// 
									for(var i=0;i<len;i++){
										cStr+='<tr class="graduate_tr">'+
														'<td class="member_id">'+mData[i].memberId+'</td>'+
														'<td>'+mData[i].name+'</td>'+
														'<td>'+mData[i].sex+'</td>'+
														'<td>'+mData[i].direction+'</td>'+
														'<td>'+mData[i].introduction+'</td>'+
														'<td>'+mData[i].company+'</td>'+
														'<td><img src='+mData[i].photo+' class="memberImg" alt="img"></td>'+
														'<td><button type="button" class="change">修改</button></td>'+
														'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
													'</tr>';
									}
									s =   '<table border="1" cellspacing="0" class="">'+
												'<tr>'+
													'<td>memberId</td>'+
													'<td>name</td>'+
													'<td>sex</td>'+
													'<td>direction</td>'+
													'<td>introduction</td>'+
													'<td>company</td>'+
													'<td>photo</td>'+
													'<td></td>'+
													'<td></td>'+
												'</tr>'+
												cStr+
											'</table>';
									$('.graduate_show_body').html(s);
									c();

									//按钮高亮显示
									$(".page_li").eq(nowPage-1).css({
										"background-color": "#32afcf",
										"color": "#fff"
									}).siblings().css({
										"background-color": "#fff",
										"color": "#aaa"
									});
								}else{
									alert("点击按钮失败");
								}
							},
							error : function(){
								alert("点击按钮请求失败")
							}
						})
					})

					// 上一页点击
					$("#page_prev_1").click(function(){
						if (nowPage == 1) {
							alert("已经是第一页了");
						}else{
						nowPage = nowPage - 1;
						$.ajax({
							type : "GET",
							url : "/geek/member/listOldMembers/"+nowPage,
							success : function(data){
								if (data.success == true) {
									var mData = data.data.listMembers;
									var len = mData.length;
									var cStr = '';
									var s = '';
									var pageSize = data.page;
									var pageNum = data.data.page.totalPage;
									// 
									for(var i=0;i<len;i++){
										cStr+='<tr class="graduate_tr">'+
														'<td class="member_id">'+mData[i].memberId+'</td>'+
														'<td>'+mData[i].name+'</td>'+
														'<td>'+mData[i].sex+'</td>'+
														'<td>'+mData[i].direction+'</td>'+
														'<td>'+mData[i].introduction+'</td>'+
														'<td>'+mData[i].company+'</td>'+
														'<td><img src='+mData[i].photo+' class="memberImg" alt="img"></td>'+
														'<td><button type="button" class="change">修改</button></td>'+
														'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
													'</tr>';
									}
									s =   '<table border="1" cellspacing="0" class="">'+
												'<tr>'+
													'<td>memberId</td>'+
													'<td>name</td>'+
													'<td>sex</td>'+
													'<td>direction</td>'+
													'<td>introduction</td>'+
													'<td>company</td>'+
													'<td>photo</td>'+
													'<td></td>'+
													'<td></td>'+
												'</tr>'+
												cStr+
											'</table>';
									$('.graduate_show_body').html(s);
									c();

									//按钮高亮显示
									$(".page_li").eq(nowPage-1).css({
										"background-color": "#32afcf",
										"color": "#fff"
									}).siblings().css({
										"background-color": "#fff",
										"color": "#aaa"
									});

								}else{
									alert("点击按钮失败");
								}
							},//如果ajax成功结束
							error : function(){
								alert("点击按钮请求失败")
							}
						})//ajax请求结束
						}//else结束
					});//点击事件结束

					//下一页点击
					$("#page_next_1").click(function(){
						if (nowPage == pageNum) {
							alert("已经是最后一页了");
						}else{
						nowPage = nowPage+1;
						$.ajax({
							type : "GET",
							url : "/geek/member/listOldMembers/"+nowPage,
							success : function(data){
								if (data.success == true) {
									var mData = data.data.listMembers;
									var len = mData.length;
									var cStr = '';
									var s = '';
									var pageSize = data.page;
									var pageNum = data.data.page.totalPage;
									// 
									for(var i=0;i<len;i++){
										cStr+='<tr class="graduate_tr">'+
														'<td class="member_id">'+mData[i].memberId+'</td>'+
														'<td>'+mData[i].name+'</td>'+
														'<td>'+mData[i].sex+'</td>'+
														'<td>'+mData[i].direction+'</td>'+
														'<td>'+mData[i].introduction+'</td>'+
														'<td>'+mData[i].company+'</td>'+
														'<td><img src='+mData[i].photo+' class="memberImg" alt="img"></td>'+
														'<td><button type="button" class="change">修改</button></td>'+
														'<td><button type="button" class="del" onclick="del()">删除</button></td>'+
													'</tr>';
									}
									s =   '<table border="1" cellspacing="0" class="">'+
												'<tr>'+
													'<td>memberId</td>'+
													'<td>name</td>'+
													'<td>sex</td>'+
													'<td>direction</td>'+
													'<td>introduction</td>'+
													'<td>company</td>'+
													'<td>photo</td>'+
													'<td></td>'+
													'<td></td>'+
												'</tr>'+
												cStr+
											'</table>';
									$('.graduate_show_body').html(s);
									c();

									//按钮高亮显示
									$(".page_li").eq(nowPage-1).css({
										"background-color": "#32afcf",
										"color": "#fff"
									}).siblings().css({
										"background-color": "#fff",
										"color": "#aaa"
									});

								}else{
									alert("点击按钮失败");
								}
							},//如果ajax发送成功结束
							error : function(){
								alert("点击按钮请求失败")
							}
						})//ajax请求结束
						}//else结束
					})//点击事件结束
				}
			}else{
				alert("失败");
			}
		},
		error : function(){
			alert("请求失败");
		}
	})
})

})//function渲染结束