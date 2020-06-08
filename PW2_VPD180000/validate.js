// your js code goes here...
var span1= document.createElement("span");
var span2=document.createElement("span");
var span3=document.createElement("span");

span1.setAttribute("id","span1");
span2.setAttribute("id","span2");
span3.setAttribute("id","span3");
span1.style.display = "none";
span2.style.display = "none";
span3.style.display = "none";

var username = document.getElementById("username");
username.parentNode.insertBefore(span1, username.nextSibling);

username.onfocus=function(){
	span1.style.display = "inline";
	span1.innerHTML = "Username should be alphanumeric only";
	span1.className = "info";
	
};

username.onblur=function(){
	
	user1 =/^[a-z0-9]+$/;
	if(username.value==""){
		span1.style.display = "none";		
	}
	//!user1.test(username.value
	else if(username.value.match(user1))
	{ 
		span1.style.display = "inline";		
		span1.innerHTML = "ok";
		span1.className = "ok";
	}
	else
	{
		span1.style.display = "inline";		
		span1.innerHTML = "Error";
		span1.className = "error";
	}
};

	var password = document.getElementById("password");
	password.parentNode.insertBefore(span2, password.nextSibling);

	password.onfocus=function(){
	span2.style.display = "inline";
	span2.className = "info";
	span2.innerHTML = "password should be atleast 6 characters long";

};

	password.onblur=function()
	{
	
			//passw =/^[A-Za-z]\w{6,14}$/;
			if(password.value=="")
			{
				span2.style.display = "none";		
			}
			else if((password.value.length)<6) 
			{ 
				span2.style.display = "inline";	
				span2.innerHTML = "Error";
				span2.className = "error";
			}
			else
			{
				span2.style.display = "inline";	
				span2.innerHTML = "ok";
				span2.className = "ok";
			}

	};
	var email = document.getElementById("email");
	email.parentNode.insertBefore(span3, email.nextSibling);
	
	email.onfocus=function(){
		span3.style.display = "inline";
		span3.className = "info";
		span3.innerHTML = "Email must contain @ sign";
	};

	email.onblur=function(){
		if(email.value==""){
		span3.style.display = "none";		
	}
	else if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) 
		{
			span3.style.display = "inline";	
			span3.innerHTML = "ok";
			span3.className = "ok";
		}
	else
	{
		span3.style.display = "inline";	
		span3.innerHTML = "Error";
		span3.className = "error";
	}

};


