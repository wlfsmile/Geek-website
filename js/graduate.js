// 初始图片交互
	$.ajax({
		type : "GET",
		url : "/home/allOldMembers",
		success : function(data){
			if (data.success ==true){
				var str = '';
				var str1 = '';
				var str2 = '';
				var str3 = '';
				var str4 = '';
				var oData = data.data;
				var lenSum=oData.length;
				if(lenSum>21){
					lenSum = 21;
				}
				// 算出一共有几次循环，有几行
				var len = Math.floor(lenSum/7);
				// 算出最后一行的个数
				var len1 = lenSum%7;

				// 循环获取出前n-1行中全满的照片及信息
				for(var i=0;i<len;i++){
					for(var j=i*7;j<i*7+7;j++){
						str1+=  '<li>'+
									'<div class="W_photo">'+
										'<img src='+ oData[j].photo +'> '+
									'</div>'+
									'<div class="mask_data">'+
										'<h4>'+ oData[j].name +'</h4>'+
										'<p>'+ oData[j].direction +'</p>'+
										'<p>'+ oData[j].company +'</p>'+
									'</div>'+
								'</li>';
					}
					str2+='<ul class="W_picture clearfix">'+ str1 +'</ul>';
					str1= '';
				}
				// 循环出最后一行的信息个数
				for(var m=7*len;m<lenSum;m++){
					str3+= '<li>'+
								'<div class="W_photo">'+
									'<img src='+ oData[m].photo +'> '+
								'</div>'+
								'<div class="mask_data">'+
									'<h4>'+ oData[m].name +'</h4>'+
									'<p>'+ oData[m].direction +'</p>'+
									'<p>'+ oData[m].company +'</p>'+
								'</div>'+
							'</li>';
					str4 = '<ul class="W_picture clearfix">'+ str3 +'</ul>'
				}
				// 两个循环相加，添加到html中
				str = str2 + str4;
				$(".W_main").html(str);
			}else{
				alert("失败");
			}
		},
		error : function(){
			alert("请求失败");
		}
	})
	/*var data = [
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管1",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管1",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管1",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管1",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管1",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管1",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管1",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管2",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管2",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管2",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管2",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管2",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管2",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管2",
		company : "阿里巴巴"
	},
	{
		img : "image/W_1.jpg",
		name : "税java",
		major : "信管2",
		company : "阿里巴巴"
	}
	];
	var str = '';
	var str1 = '';
	var str2 = '';
	var str3 = '';
	var str4 = '';
	var lenSum=data.length;
	if(lenSum>21){
		lenSum = 21;
	}
	// 算出一共有几次循环，有几行
	var len = Math.floor(lenSum/7);
	// 算出最后一行的个数
	var len1 = lenSum%7;
	console.log(len);
	// 循环获取出前n-1行中全满的照片及信息
	for(var i=0;i<len;i++){
		for(var j=i*7;j<i*7+7;j++){
			str1+=  '<li>'+
						'<div class="W_photo">'+
							'<img src='+ data[j].img +'> '+
						'</div>'+
						'<div class="mask_data">'+
							'<h4>'+ data[j].name +'</h4>'+
							'<p>'+ data[j].major +'</p>'+
							'<p>'+ data[j].company +'</p>'+
						'</div>'+
					'</li>';
		}
		str2+='<ul class="W_picture clearfix">'+ str1 +'</ul>';
		str1= '';
	}
	// 循环出最后一行的信息个数
	for(var m=7*len;m<lenSum;m++){
		str3+= '<li>'+
					'<div class="W_photo">'+
						'<img src='+ data[m].img +'> '+
					'</div>'+
					'<div class="mask_data">'+
						'<h4>'+ data[m].name +'</h4>'+
						'<p>'+ data[m].major +'</p>'+
						'<p>'+ data[m].company +'</p>'+
					'</div>'+
				'</li>';
		str4 = '<ul class="W_picture clearfix">'+ str3 +'</ul>'
	}
	// 两个循环相加，添加到html中
	str = str2 + str4;
	$(".W_main").html(str);*/
