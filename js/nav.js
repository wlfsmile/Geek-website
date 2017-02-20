window.onload=function() {
	var otop=document.getElementById('top');
	var oli=document.getElementsByTagName('li');
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
	}
}