
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
        var $img=$(".T_carousel ul img");
        $img.click(function(){
            $("T_message").show();
        },function(){
            $("T_message").hide();
        })
	});

});
