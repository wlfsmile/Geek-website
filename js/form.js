window.onload=function(){
	var c_sub=document.getElementById('c_submit');
	c_sub.onclick=function(){
		var xhr=new XMLHttpRequest();
		xhr.open("post","/candidate/saveCandidate");
		var data="c_candidateId"+document.getElementById("c_candidateId").value
			+"&name="+document.getElementById("c_name").value
			+"&school="+document.getElementById("c_school").value
			+"&major="+document.getElementById("c_major").value
			+"&direction="+document.getElementById('c_direction').value;
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");  
		xhr.send(data);
		xhr.onreadystadychange=function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					alert("亲，信息提交成功，请耐心等待");
					window.location.reload();
				}
			}
		}
	}
}