$(function(){
	// 毕业去向初始展示
	/*$.ajax({
		type : "GET",
		url : "",
		success : function(data){
			if (data.success == true) {
				var str = '';
				var oData = data.data;
				var len = oData.length;
				for(var i=0;i<len;i++){
					str+=   '<tr>'+
								'<td>'+oData[i].memberId+'</td>'+
							    '<td>'+oData[i].name+'</td>'+
								'<td>'+oData[i].sex+'</td>'+
								'<td>'+oData[i].direction+'</td>'+
								'<td>'+oData[i].introduction+'</td>'+
								'<td>'+oData[i].company+'</td>'+
								'<td><button type="button" class="change">修改</button></td>'+
								'<td><button type="button" class="del">删除</button></td>'+
							'</tr>';
				}
				$('.W_show_table').append(str);
			}else{
				alert("失败");
			}
		},
		error : function(){
			alert("请求失败");
		}
	})*/
	var oData=[
		{
			memberId : "1",
			name : "哈哈",
			sex : "男",
			direction : "前端",
			introduction : "jkkk",
			company : "阿里巴巴",
			photo : "image/W_1.jpg"
		},
		{
			memberId : "2",
			name : "哈哈",
			sex : "男",
			direction : "前端",
			introduction : "jkkk",
			company : "阿里巴巴",
			photo : "image/W_1.jpg"
		},
		{
			memberId : "3",
			name : "哈哈",
			sex : "男",
			direction : "前端",
			introduction : "jkkk",
			company : "阿里巴巴",
			photo : "image/W_1.jpg"
		},
		{
			memberId : "4",
			name : "哈哈",
			sex : "男",
			direction : "前端",
			introduction : "jkkk",
			company : "阿里巴巴",
			photo : "image/W_1.jpg"
		},
		{
			memberId : "5",
			name : "哈哈",
			sex : "男",
			direction : "前端",
			introduction : "jkkk",
			company : "阿里巴巴",
			photo : "image/W_1.jpg"
		}
	];
	var len = oData.length;
	var str = '';
	for(var i=0;i<len;i++){
		str+=   '<tr>'+
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
	$('.W_show_table').append(str);
	// 点击删除数据
	
})