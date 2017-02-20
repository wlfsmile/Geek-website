$(function(){
	// 点击添加成员，修改，弹出框显示
	$(".add,.change").click(function(){
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
						'学号:<input type="text" class="memberId" placeholder="请输入学号">'+
					'</p>'+
					'<p>'+
						'姓名:<input type="text" class="name" placeholder="请输入姓名">'+
					'</p>'+
					'<p>'+
						'性别:<input type="text" class="sex" placeholder="请输入性别">'+
					'</p>'+
					'<p>'+
						'方向:<input type="text" class="direction" placeholder="请输入技术方向">'+
					'</p>'+
					'<p>'+
						'公司:<input type="text" class="company" placeholder="请输入就业公司，没有就填无">'+
					'</p>'+
					'<p>'+
						'简介:<textarea type="text" class="introduce" placeholder="请输入个人简介"></textarea>'+
					'</p>'+
				'</form>'+
				'<button type="button" class="addSub">保存添加</button>';
		$(".login_content").html(addStr);
	})
	// 点击修改成员信息，弹出框表单内容为此人信息
	$(".change").click(function(){
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
	})
})