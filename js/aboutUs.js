$(document).ready(
      function() {
        var nowimg = 1;
        var page = 4;
        $(".T_number p").each(
          function(){
            var a = $(this).index() % 3 * 140;
            // console.log(a);
            var b = parseInt($(this).index() / 3) * 65;
            // console.log(b);
            $(this).css(
              {
                "left":a,
                "top": b,
                "background-position":(-a) + "px " + (-b) + "px"
              }
            );
          }
        );

        //箭头点击事件
        $(".T_next").click(
          function(){
            if(nowimg < page){
              nowimg ++;
            }else{
              nowimg = 1;
            }
            move();       
          }
        );
        $(".T_prev").click(
          function(){
            if(nowimg > 1 ){
              nowimg --;
            }else{
              nowimg = page;
            }
            move();
           
          }
        );

        // 隐藏箭头
        $(".T_pic").hover(function(){
          $(".T_arrow").show();
          clearInterval(timer);
        },function(){
          $(".T_arrow").hide();
          timer = setInterval(autoPlay,2000);
          
        });
        function move(){
            //加过渡：
            $(".T_number p").css("transition","all 1.5s ease 0s");
            $(".T_number").addClass("T_fly");
            
            $(".T_images img").attr("src","image/T_" + nowimg + ".png");

            setTimeout(function(){
              //去掉过渡
              $(".T_number p").css("transition","none");
              $(".T_number p").css("background-image","url(image/T_" + nowimg + ".png)");
              //我们准备下一张图
              $(".T_number").removeClass("T_fly");
            },1000);
        }

        // 自动
        function autoPlay(){
          $(".T_next").click();
         //向右切换
        }
        var timer = setInterval(autoPlay,2000);

      }   

    );