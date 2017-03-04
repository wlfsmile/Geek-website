var c_sub=document.getElementById('c_submit');
	c_sub.onclick=function(){
		var xhr=new XMLHttpRequest();
		xhr.open("post","/home/saveCandidate");
		var data="candidateId="+document.getElementById("c_candidateId").value
			+"&name="+document.getElementById("c_name").value
			+"&school="+document.getElementById("c_school").value
			+"&major="+document.getElementById("c_major").value
			+"&direction="+document.getElementById('c_direction').value;
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");  
		xhr.send(data);
		xhr.onreadystatechange=function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					var date=JSON.parse(xhr.responseText);
					if(date.success == true){
						alert(date.data);
						window.location.reload();
					}
				}
			}
		}
	}
