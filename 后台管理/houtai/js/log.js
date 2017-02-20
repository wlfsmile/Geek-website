// 点击保存添加的调用函数
function saveMember(){
	var form = new FormData(document.getElementById("addMember"));
		$.ajax({
			type : "POST",
			url : "/geek/member/memberId",
			data : form,
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
}
$(function(){
	// 点击添加成员，弹出框显示
	$(".add").click(function(){
		$(".login").css({
			"display":"block"
		});
		$(".mask").css({
			"display":"block"
		});
	})
	// 点击遮罩层或者x，弹出框消失
	$(".cancel,.mask").click(function(){
		$(".login").css({
			"display":"none"
		});
		$(".mask").css({
			"display":"none"
		});
	})
	// 点击添加成员，弹出框表单内容为空
	$(".add").click(function(){
		var addStr = '';
		addStr ='<form id="addMember" method="post" name="formDada" enctype="multipart/form-data">'+
					'<p>'+
						'<input type="file" name="file" class="file">'+
					'</p>'+
					'<p>'+
						'学号:<input type="text" class="memberId" placeholder="请输入学号" name="memberId">'+
					'</p>'+
					'<p>'+
						'姓名:<input type="text" class="name" placeholder="请输入姓名" name="name">'+
					'</p>'+
					'<p>'+
						'性别:<input type="text" class="sex" placeholder="请输入性别" name="sex">'+
					'</p>'+
					'<p>'+
						'方向:<input type="text" class="direction" placeholder="请输入技术方向" name="direction">'+
					'</p>'+
					'<p>'+
						'公司:<input type="text" class="company" placeholder="请输入就业公司，没有就填无" name="company">'+
					'</p>'+
					'<p>'+
						'简介:<textarea type="text" class="introduction" placeholder="请输入个人简介" name="introduction"></textarea>'+
					'</p>'+
				'</form>'+
				'<button type="button" class="addSub" onclick="saveMember()" >保存添加</button>';
		$(".login_content").html(addStr);
	})//点击添加成员结束
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
						var mData = data.data.listCurrentMembers;
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

						// 分页数字按钮点击
						$(".page li").click(function(){
							nowPage = $(this).text();
							$.ajax({
								type : "GET",
								url : "/geek/member/listOldMembers/"+nowPage,
								success : function(data){
									if (data.success == true) {
										var mData = data.data.listCurrentMembers;
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
										var mData = data.data.listCurrentMembers;
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
										var mData = data.data.listCurrentMembers;
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
})//function结束