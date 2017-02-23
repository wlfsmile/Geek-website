
var c_mem=document.getElementsByClassName("members_show_body"),
	memberstr,
	c_xhr=new XMLHttpRequest();
c_xhr.open("get","/geek/member/listCurrentMembers/"+1);
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
								   '<td>'+'<img src="c_data.data.listMembers[i].photo" class="memberImg" alt="img">'+'</td>'+
								   '<td>'+c_data.data.listMembers[i].direction+'</td>'+
								   '<td>'+c_data.data.listMembers[i].introduction+'</td>'+
								   '<td>'+c_data.data.listMembers[i].company+'</td>'+
								   '<td>'+'<input type="button" value="修改" class="change">'+'</td>'+
								   '<td>'+'<input type="button" value="删除" class="del" onclick="del()">'+'</td>'+
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
					console.log(c_mem)
			c_mem[0].innerHTML=str;
		}
				console.log(str);
		}
	}
