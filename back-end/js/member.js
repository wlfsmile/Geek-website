
var c_mem=document.getElementsByClassName("members_show_body"),
//<<<<<<< HEAD
	memberstr='',
	str,
//=======
	memsearch=document.getElementById('searchBtn'),
	memvalue=document.getElementById('search'),
	memberstr = "",
	str = "",
//>>>>>>> af40b96025da03d99068bad8c9a3205b25935b4b
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
								   '<td>'+'<input type="button" value="修改" class="mchange">'+'</td>'+
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
												   '<td>'+'<input type="button" value="修改" class="mchange">'+'</td>'+
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
													   '<td>'+'<input type="button" value="修改" class="mchange">'+'</td>'+
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
													   '<td>'+'<input type="button" value="修改" class="mchange">'+'</td>'+
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
memsearch.onclick=function(){
	memberstr = "",
	str = "",
	c_xhr=new XMLHttpRequest();
	c_xhr.open("get","/member/memberId/"+memvalue.value+"/"+1);
	c_xhr.send();
	c_xhr.onreadystatechange=function(){
	if(c_xhr.readyState == 4){
		if(c_xhr.status == 200){
			var  c_data=JSON.parse(c_xhr.responseText);
			if(c_data.data == "not found."){
				alert("没有该数据");
			}else{
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
								   '<td>'+'<input type="button" value="修改" class="mchange">'+'</td>'+
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
				c_xhr.open("get","/member/memberId/"+memvalue.value+"/"+pagenow);
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
												   '<td>'+'<input type="button" value="修改" class="mchange">'+'</td>'+
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
					c_xhr.open("get","/member/memberId/"+memvalue.value+"/"+pagenow);
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
													   '<td>'+'<input type="button" value="修改" class="mchange">'+'</td>'+
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
					c_xhr.open("get","/member/memberId/"+memvalue.value+"/"+pagenow);
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
													   '<td>'+'<input type="button" value="修改" class="mchange">'+'</td>'+
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
    }
}














































	