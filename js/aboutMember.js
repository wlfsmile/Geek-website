
$(document).ready(function(){
	var $lable_li=$("#T_lable ul li");
	$lable_li.bind("click",function(){
        $(this).addClass("T_selected")//当前li元素高亮
                .siblings().removeClass("T_selected");
        //获取当前li元素在全部li元素中的索引
        var index=$lable_li.index(this);

        //选取各个T_lable下的子节点
        $(".T_carousel> ul")
            .eq(index).show()
            .siblings().hide();
	});

     //获取成员图片信息
    // 默认2014级成员
    $.ajax({
        type : "GET",
        url :"/home/currentMembers/2015",
        success : function(data){
            if (data.success==true) {
                var str = '';
                var count = data.data.length;
                for(var i = 0; i < count; i++){
                    str += '<figure>'+'<img src=' + data.data[i].photo +' class="pic_img">' +
                                '<div class="T_message"><li>姓名：'+ data.data[i].name + 
                                '</li><li>性别：' + data.data[i].sex +
                                '</li><li>方向：' + data.data[i].direction + 
                                '</li><li>简介：' + data.data[i].introduction + '</li></div>'
                        +'</figure>';  
                }
                $(".T_container .T_2015").html(str);

                // 图片位置
                 // 获取当前img长度
                 var $imgL = $(".T_2015 figure").length;
                 // 角度
                 var Deg = 360 / $imgL;
                 var r = 67 / Math.tan((Deg / 2) / 180 * Math.PI);
                 var Zlength = r + 20;
                 // 遍历，改变图片的样式
                 $(".T_2015 figure").each(function(i){
                     $(this).css({"transform": "rotateY(" + i * Deg + "deg)translateZ(" + Zlength +"px)" });
                 });


                //鼠标hover图片出现遮罩层及文字
                // 设置文字位置
                $(".T_message").css({"top": "120px"});
                // 滑动效果
                $(".T_container ul figure").hover(function(){
                    $(this).find(".T_message").stop(true, false).animate({"top":  "-153px"},700);
                },function(){
                    $('.T_message').css({"top": "120px"});
                });

            }else{
                alert("failure");
            }
        },
        error : function(){
            alert("Request failed");
        }
    });

    $("#T_lable ul li").click(function(){
        var strN = $(this).text();
        // console.log(strN);
        $.ajax({
            type : "GET",
            url : "/home/currentMembers/"+strN,

            success : function(data){
                if (data.success==true) {
                    console.log(data.data);
                    var str = '';
                    var str1 = '';
                    var count =  data.data.length;
                    for(var i = 0; i < count; i++){
                        str +=  '<figure class="pic">'+'<img src=' +  data.data[i].photo +' class="pic_img">' 
                                         + '<div class="T_message"><li>姓名：'+  data.data[i].name + 
                                             '</li><li>性别：' +  data.data[i].sex +
                                             '</li><li>方向：' +  data.data[i].direction + 
                                             '</li><li>简介：' +   data.data[i].introduction + 
                                             '</li></div></figure>';  
                                            
                    }
                   str1 = '<ul class="T_'+strN+'">'+ str +'</ul>';
                       console.log(str1);
                       $(".T_container").html(str1);
                       // console.log(str1);
                       // 图片位置
                       // var str2 =$(this).text();
                       //  console.log(str2);
                        // 获取当前img长度
                        var $imgL = count;
                        console.log($imgL);
                        // 角度
                        var Deg = 360 / $imgL;  
                        var r = 67 / Math.tan((Deg / 2) / 180 * Math.PI);
                        var Zlength = r + 20;
                        // 遍历，改变图片的样式
                        $(".pic").each(function(i){
                            $(this).css({"transform": "rotateY(" + i * Deg + "deg)translateZ(" + Zlength +"px)" });
                        });
                        
                    //鼠标hover图片出现遮罩层及文字
                    // 设置文字位置
                    $(".T_message").css({"top": "120px"});
                    // 滑动效果
                    $(".T_container ul figure").hover(function(){
                        $(this).find(".T_message").stop(true, false).animate({"top":  "-153px"},700);
                    },function(){
                        $('.T_message').css({"top": "120px"});
                    });

                }else{
                    alert("failure");
                }
            },
            error : function(){
                alert("Request failed");
            }
        })
    })

   /* var data = [
    {
        img: "image/T_1.jpg",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_2.jpg",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_3.jpg",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_4.jpg",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_5.jpg",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_6.jpg",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_7.jpg",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_8.jpg",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },

    {
        img: "image/T_9.jpg",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_10.png",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_11.png",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_12.png",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
        img: "image/T_13.png",
        name: "唐雅",
        sex: "女",
        direction: "恩恩",
        motto: "哈哈哈哈哈哈哈哈哈哈哈哈哈"
    }
    ];

    $("#T_lable ul li").click(function(){
        var str = '';
        var count = data.length;
        for(var i = 0; i < count; i++){
            str += 
            // '<ul class="T_ + $(this).text()" ' + '>' +
                        '<figure>'+'<img src=' + data[i].img +'>' +
                        '<div class="T_message"><li>姓名：'+ data[i].name + 
                        '</li><li>性别：' + data[i].sex +
                        '</li><li>方向：' + data[i].direction + 
                        '</li><li>格言：' +  data[i].motto + 
                        '</li></div></figure>';
                        // + '</ul>';
        }

        $(".T_container .T_2014").html(str);

        // 图片位置
         // var str3 = 'T_' + $(this).text();
         
         // 获取当前img长度
         // var $imgL = $(".str3 figure").length;
         var $imgL = $(".T_2014 figure").length;
         // 角度
         // console.log($imgL);
         var Deg = 360 / $imgL;
         console.log(Deg);
         //挨个赋值
         var roY = 0,roX = -10,xN,yN,play=null; 
         // 遍历，改变图片的样式
         $(".T_container figure").each(function(i){
             $(this).css({"transform": "rotateY(" + i * Deg + "deg)translateZ(288px)" });
         });
        //鼠标hover图片出现遮罩层及文字
        // 设置文字位置
        $(".T_message").css({"top": "100px"});
        // 滑动效果
        $(".T_container ul figure").hover(function(){
            $(this).find(".T_message").stop(true, false).animate({"top":  "-120px"},700);
        },function(){
            $('.T_message').css({"top": "120px"});
            $('.T_message').animate({"top":  "100px"});
        });

    })
*/
});
