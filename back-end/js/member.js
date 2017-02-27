
var c_mem=document.getElementsByClassName("members_show_body"),
	memberstr,
	str,
	c_xhr=new XMLHttpRequest();
c_xhr.open("get","/member/listCurrentMembers/"+1);
c_xhr.send();
c_xhr.onreadystatechange=function(){
	if(c_xhr.readyState == 4){
		if(c_xhr.status == 200){
			var c_data=JSON.parse(c_xhr.responseText),
				len=c_data.data.listMembers.length,
				pagenum=c_data.data.page.totalPage,
				pagenow=c_data.data.page.currentPage;
				for(var i=0;i<len;i++){
					memberstr+='<tr class="graduate_tr">'+
								   '<td class="member_id">'+c_data.data.listMembers[i].memberId+'</td>'+
								   '<td>'+c_data.data.listMembers[i].name+'</td>'+
								   '<td>'+c_data.data.listMembers[i].sex+'</td>'+
								   '<td>'+'<img src="../'+c_data.data.listMembers[i].photo+'" class="memberImg" alt="img">'+'</td>'+
								   '<td>'+c_data.data.listMembers[i].direction+'</td>'+
								   '<td>'+c_data.data.listMembers[i].introduction+'</td>'+
								   '<td>'+c_data.data.listMembers[i].company+'</td>'+
								   '<td>'+'<input type="button" value="修改" class="change">'+'</td>'+
								   '<td>'+'<input type="button" value="删除" class="del">'+'</td>'+
								'</tr>';
				}
				str = '<table border="1" cellspacing="0" class="">'+
							'<tr>'+
								'<td>memberId</td>'+
								'<td>name</td>'+
								'<td>sex</td>'+
								'<td>photo</td>'+
								'<td>direction</td>'+
								'<td>introduction</td>'+
								'<td>company</td>'+
								'<td></td>'+
								'<td></td>'+
							'</tr>'+
							memberstr+
						'</table>';
			$(".members_show_body").html(str);
///////////////////////////////////分割线
			var pageStr2 = '';
			var pageStr1 = '';
			for(var i=1;i<=pagenum;i++){
				pageStr1+='<li class="page_li">'+ i +'</li>';
			}
			pageStr2 = '<a class="page_prev page_change" id="page_prev">上一页</a><ul class="page_ul">'+
						pageStr1+
						'</ul>'+
						'<a class="page_next page_change" id="page_next">下一页</a>';
			$(".page").html(pageStr2);
			$(".page li").click(function(){
				str='';
				memberstr='';
				pagenow = $(this).text();
				console.log(pagenow);
				c_xhr=new XMLHttpRequest();
				c_xhr.open("get","/member/listCurrentMembers/"+pagenow);
				c_xhr.send();
				c_xhr.onreadystatechange=function(){
					if(c_xhr.readyState == 4){
						if(c_xhr.status == 200){
							var c_data=JSON.parse(c_xhr.responseText),
								len=c_data.data.listMembers.length,
								pagenum=c_data.data.page.totalPage,
								pagenow=c_data.data.page.currentPage;
								for(var i=0;i<len;i++){
									memberstr+='<tr class="graduate_tr">'+
												   '<td class="member_id">'+c_data.data.listMembers[i].memberId+'</td>'+
												   '<td>'+c_data.data.listMembers[i].name+'</td>'+
												   '<td>'+c_data.data.listMembers[i].sex+'</td>'+
												   '<td>'+'<img src="../'+c_data.data.listMembers[i].photo+'" class="memberImg" alt="img">'+'</td>'+
												   '<td>'+c_data.data.listMembers[i].direction+'</td>'+
												   '<td>'+c_data.data.listMembers[i].introduction+'</td>'+
												   '<td>'+c_data.data.listMembers[i].company+'</td>'+
												   '<td>'+'<input type="button" value="修改" class="c_change">'+'</td>'+
												   '<td>'+'<input type="button" value="删除" class="del">'+'</td>'+
												'</tr>';
								}
								str = '<table border="1" cellspacing="0" class="">'+
											'<tr>'+
												'<td>memberId</td>'+
												'<td>name</td>'+
												'<td>sex</td>'+
												'<td>photo</td>'+
												'<td>direction</td>'+
												'<td>introduction</td>'+
												'<td>company</td>'+
												'<td></td>'+
												'<td></td>'+
											'</tr>'+
											memberstr+
										'</table>';
							$(".members_show_body").html(str);
				///////////////////////////////////分割线
							
						}
						}
				    }
			})		
			$("#page_prev").click(function(){
				if (pagenow == 1) {
						alert("已经是第一页了");
					}else{
					pagenow = pagenow - 1;				
					str='';
					memberstr='';
					c_xhr=new XMLHttpRequest();
					c_xhr.open("get","/member/listCurrentMembers/"+pagenow);
					c_xhr.send();
					c_xhr.onreadystatechange=function(){
						if(c_xhr.readyState == 4){
							if(c_xhr.status == 200){
								var c_data=JSON.parse(c_xhr.responseText),
									len=c_data.data.listMembers.length,
									pagenum=c_data.data.page.totalPage,
									pagenow=c_data.data.page.currentPage;
									for(var i=0;i<len;i++){
										memberstr+='<tr class="graduate_tr">'+
													   '<td class="member_id">'+c_data.data.listMembers[i].memberId+'</td>'+
													   '<td>'+c_data.data.listMembers[i].name+'</td>'+
													   '<td>'+c_data.data.listMembers[i].sex+'</td>'+
													   '<td>'+'<img src="../'+c_data.data.listMembers[i].photo+'" class="memberImg" alt="img">'+'</td>'+
													   '<td>'+c_data.data.listMembers[i].direction+'</td>'+
													   '<td>'+c_data.data.listMembers[i].introduction+'</td>'+
													   '<td>'+c_data.data.listMembers[i].company+'</td>'+
													   '<td>'+'<input type="button" value="修改" class="c_change">'+'</td>'+
													   '<td>'+'<input type="button" value="删除" class="c_del">'+'</td>'+
													'</tr>';
									}
									str = '<table border="1" cellspacing="0" class="">'+
												'<tr>'+
													'<td>memberId</td>'+
													'<td>name</td>'+
													'<td>sex</td>'+
													'<td>photo</td>'+
													'<td>direction</td>'+
													'<td>introduction</td>'+
													'<td>company</td>'+
													'<td></td>'+
													'<td></td>'+
												'</tr>'+
												memberstr+
											'</table>';
								$(".members_show_body").html(str);
					///////////////////////////////////分割线
								c();
							}
							}
					    }
					}//else结束
				});//点击事件结束
			$("#page_next").click(function(){
				if (pagenow == pagenum) {
						alert("已经是最后一页了");
					}else{
					pagenow = pagenow + 1;				
					str='';
					memberstr='';
					c_xhr=new XMLHttpRequest();
					c_xhr.open("get","/member/listCurrentMembers/"+pagenow);
					c_xhr.send();
					c_xhr.onreadystatechange=function(){
						if(c_xhr.readyState == 4){
							if(c_xhr.status == 200){
								var c_data=JSON.parse(c_xhr.responseText),
									len=c_data.data.listMembers.length,
									pagenum=c_data.data.page.totalPage,
									pagenow=c_data.data.page.currentPage;
									for(var i=0;i<len;i++){
										memberstr+='<tr class="graduate_tr">'+
													   '<td class="member_id">'+c_data.data.listMembers[i].memberId+'</td>'+
													   '<td>'+c_data.data.listMembers[i].name+'</td>'+
													   '<td>'+c_data.data.listMembers[i].sex+'</td>'+
													   '<td>'+'<img src="../'+c_data.data.listMembers[i].photo+'" class="memberImg" alt="img">'+'</td>'+
													   '<td>'+c_data.data.listMembers[i].direction+'</td>'+
													   '<td>'+c_data.data.listMembers[i].introduction+'</td>'+
													   '<td>'+c_data.data.listMembers[i].company+'</td>'+
													   '<td>'+'<input type="button" value="修改" class="c_change">'+'</td>'+
													   '<td>'+'<input type="button" value="删除" class="c_del">'+'</td>'+
													'</tr>';
									}
									str = '<table border="1" cellspacing="0" class="">'+
												'<tr>'+
													'<td>memberId</td>'+
													'<td>name</td>'+
													'<td>sex</td>'+
													'<td>photo</td>'+
													'<td>direction</td>'+
													'<td>introduction</td>'+
													'<td>company</td>'+
													'<td></td>'+
													'<td></td>'+
												'</tr>'+
												memberstr+
											'</table>';
								$(".members_show_body").html(str);
					///////////////////////////////////分割线
								c();
							}
							}
					    }
					}//else结束
				});//点击事件结束
			c();
		}
		}
    }

var memberStr = '';
var str ='';
var oData;
var len;
var pageNum;
function member(){
	console.log(len);
	for(var i=0;i<len;i++){
		memberstr+='<tr>'+
					   '<td>'+oData[i].memberId+'</td>'+
					   '<td>'+oData[i].name+'</td>'+
					   '<td>'+oData[i].sex+'</td>'+
					   '<td>'+'<img src="../'+oData[i].photo+'" class="memberImg" alt="img">'+'</td>'+
					   '<td>'+oData[i].direction+'</td>'+
					   '<td>'+oData[i].introduction+'</td>'+
					   '<td>'+oData[i].company+'</td>'+
					   '<td>'+'<input type="button" value="修改" class="c_change">'+'</td>'+
					   '<td>'+'<input type="button" value="删除" class="c_del">'+'</td>'+
					'</tr>';
	}
	str = '<table border="1" cellspacing="0" class="">'+
				'<tr>'+
					'<td>memberId</td>'+
					'<td>name</td>'+
					'<td>sex</td>'+
					'<td>photo</td>'+
					'<td>direction</td>'+
					'<td>introduction</td>'+
					'<td>company</td>'+
					'<td></td>'+
					'<td></td>'+
				'</tr>'+
				memberstr+
			'</table>';
	$(".members_show_body").html(str);
}
//点击查询
$("#searchBtn").click(function(){
	var nowPage = 1;
	var url = "/member/memberId/"+$("#search").val()+"/"+nowPage;
	$.ajax({
		type : "GET",
		url : url,
		success : function(data){
			if (data.success == true) {
				if(data.data == "not found."){
					alert("没有该数据");
				}else{
					oData = data.data.listMembers;
					memberStr = '';
					str = '';
					len = oData.length;
					pageNum = data.data.page.totalPage;
					member();
					//生成分页按钮
					var pageStr = '';
					var pageStr_1 ='';
					for(var i=1;i<=pageNum;i++){
						pageStr_1+='<li class="page_li">'+ i +'</li>';
					}
					pageStr = '<a class="page_prev page_change" id="page_prev_1">上一页</a><ul class="page_ul">'+
								   pageStr_1+
								   '</ul>'+
								   '<a class="page_next page_change" id="page_next_1">下一页</a>';
					$(".page").html(pageStr);
				}
			}else{
				alert("查询失败");
			}
		},
		error : function(){
			alert("查询请求失败");
		}
	})
})















































	