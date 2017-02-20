$(function(){
	// 毕业去向初始展示
$(".nav_left a").click(function(){
	$.ajax({
		type : "GET",
		url : "/geek/member/allOldMembers",
		success : function(data){
			var p = new Promise(function(res, rej){
				if (data.success == true) {
					res();
				} else {
					rej();
				}
			});
			p.then(function(){
				var oData = data.data;
				var len = oData.length;
				var graduateStr = '';
				var str = '';
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
			}).then(function(){
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
				changeStr = '<form class="addMember" method="post" name="formDada" enctype="multipart/form-data">'+
								'<p>'+
									'<input type="file" name="file" class="file">'+
								'</p>'+
								'<p>'+
									'学号:<input type="text" class="memberId" value='+ $(this).parent().siblings().eq(0).text() +'>'+
								'</p>'+
								'<p>'+
									'姓名:<input type="text" class="name" value='+ $(this).parent().siblings().eq(1).text()+'>'+
								'</p>'+
								'<p>'+
									'性别:<input type="text" class="sex" value='+ $(this).parent().siblings().eq(2).text() +' >'+
								'</p>'+
								'<p>'+
									'方向:<input type="text" class="direction" value='+ $(this).parent().siblings().eq(3).text() +'>'+
								'</p>'+
								'<p>'+
									'公司:<input type="text" class="company" value='+ $(this).parent().siblings().eq(5).text() +'>'+
								'</p>'+
								'<p>'+
									'简介:<textarea type="text" class="introduce">'+$(this).parent().siblings().eq(4).text()+'</textarea>'+
								'</p>'+
							'</form>'+
							'<button type="button" class="changeSub">保存修改</button>';
				$(".login_content").html(changeStr);
				return false;
			})
			}).catch(function(){
				alert("失败");
			})
			/*if (data.success == true) {
				var oData = data.data;
				var len = oData.length;
				var graduateStr = '';
				var str = '';
				for(var i=0;i<len;i++){
					graduateStr+='<tr>'+
									'<td>'+oData[i].memberId+'</td>'+
									'<td>'+oData[i].name+'</td>'+
									'<td>'+oData[i].sex+'</td>'+
									'<td>'+oData[i].direction+'</td>'+
									'<td>'+oData[i].introduction+'</td>'+
									'<td>'+oData[i].company+'</td>'+
									'<td><img src='+oData[i].photo+' class="memberImg" alt="img"></td>'+
									'<td><button type="button" class="change">修改</button></td>'+
									'<td><button type="button" class="del">删除</button></td>'+
								'</tr>';
				}
				str =   '<table border="1" cellspacing="0" class="W_show_table">'+
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
			}else{
				alert("失败");
			}*/
		},
		error : function(){
			alert("请求失败");
		}
	})//ajax结束
});//点击毕业去向结束
})//function渲染结束