	//导航栏变色
	var otop=document.getElementById('top');
	var oli=document.getElementsByTagName('li');
	var os = document.getElementById('SXH');
	var ow = document.getElementById('WLF');
	var oindex = document.getElementById('index');
	var oS=os.clientHeight;
	var oW=ow.clientHeight;
	//鼠标滚动 
	window.onscroll = function(ev){
		var oevent=ev||event;
		otop.style.transition="0.6s"
		disy=otop.offsetTop+document.body.scrollTop;
		if(disy>0){
			otop.style.backgroundColor="rgba(0,0,0,0.7)";
			for(var i=0;i<6;i++)
			oli[i].style.color="#fff";
		}
		if(disy==0){
			otop.style.backgroundColor = "#4c4c4c";
			//otop.style.border="none";
			for(var i=0;i<6;i++)
			oli[i].style.color="white";
		}
		if (disy<250) {
			oindex.style.display='none';
		}else{
			oindex.style.display='block';
		}
		if (disy>=0&&disy<500) {
			oli[0].style.borderBottom = "2px solid #eee";
			oli[1].style.borderBottom = "none";
			oli[2].style.borderBottom = "none";
			oli[3].style.borderBottom = "none";
			oli[4].style.borderBottom = "none";
		}else if(disy<oS+620){
			oli[1].style.borderBottom = "2px solid #eee";
			oli[0].style.borderBottom = "none";
			oli[2].style.borderBottom = "none";
			oli[3].style.borderBottom = "none";
			oli[4].style.borderBottom = "none";
		}else if (disy<oS+1360) {
			oli[2].style.borderBottom = "2px solid #eee";
			oli[0].style.borderBottom = "none";
			oli[1].style.borderBottom = "none";
			oli[3].style.borderBottom = "none";
			oli[4].style.borderBottom = "none";
		}else if(disy<oS+oW+1450){
			oli[3].style.borderBottom = "2px solid #eee";
			oli[0].style.borderBottom = "none";
			oli[1].style.borderBottom = "none";
			oli[2].style.borderBottom = "none";
			oli[4].style.borderBottom = "none";
		}else{
			oli[4].style.borderBottom = "2px solid #eee";
			oli[0].style.borderBottom = "none";
			oli[1].style.borderBottom = "none";
			oli[2].style.borderBottom = "none";
			oli[3].style.borderBottom = "none";
		}
	}
