//点击导航栏
$(".nav_left li a").click(function(){
	$(this).parent("li").css({
		"background-color":" gray"
	}).siblings().css({
		"background-color":"#f2f2f2"
	});
})
// 毕业去向点击保存添加的调用函数
function saveMember(){
	var form = new FormData(document.getElementById("addMember"));
		$.ajax({
			type : "POST",
			url : "/member/memberId",
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
	$(".add, .work_add , .memadd").click(function(){
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
	//点击添加作品
	$(".memadd").click(function(){
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
						'简介:<textarea type="text" class="introduction" placeholder="请输入个人简介" name="introduction"></textarea>'+
					'</p>'+
				'</form>'+
				'<button type="button" class="addSub" onclick="saveMember()" >保存添加</button>';
		$(".login_content").html(addStr);
	})
	$(".work_add").click(function(){
		var workaddStr = '';
		workaddStr = '<form id="addWork" method="post" name="formDada" enctype="multipart/form-data">'+
						'<p>'+
							'<input type="file" name="file" class="file">'+
						'</p>'+
						'<p>'+
							'名字:<input type="text" class="name" placeholder="请输入作品名字" name="name">'+
						'</p>'+
						'<p>'+
							'地址:<input type="text" class="url" placeholder="请输入作品地址" name="url">'+
						'</p>'+
						'<p>'+
							'简介:<textarea type="text" class="introduction" placeholder="请输入作品简介" name="introduction"></textarea>'+
						'</p>'+
					'</form>'+
					'<button type="button" class="workSub" onclick="workadd()" >保存添加</button>';
		$(".login_content").html(workaddStr);
	})
})//function结束