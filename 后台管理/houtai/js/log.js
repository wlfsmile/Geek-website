function saveMember(){
	var form = new FormData(document.getElementById("addMember"));
	console.log(form);
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
		addStr ='<form class="addMember" method="post" name="formDada" enctype="multipart/form-data">'+
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
						'简介:<textarea type="text" class="introduce" placeholder="请输入个人简介" name="introduce"></textarea>'+
					'</p>'+
				'</form>'+
				'<button type="button" class="addSub" onclick="saveMember()" >保存添加</button>';
		$(".login_content").html(addStr);
	})//点击添加成员结束
})//function结束