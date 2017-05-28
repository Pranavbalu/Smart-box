
var in1 = document.getElementById('input1')
var i=(in1.value);
var result=document.getElementById('sum')
var x=document.getElementById('a')
var y=document.getElementById('b')
var list = document.getElementById('todolist')
var list1 = document.getElementById('addlist')

var ele=document.getElementById('element')
var count = 0
var btn1=document.getElementById('btn1')
var btn2=document.getElementById('btn2')
function dothis(event)
{
	if(event.which==13)
 {
	
		if((in1.value).substring(0,3)=="add" )
		{
		 
		 var arr = (in1.value).split(/ /g).slice(1);
		 var a=arr[0];
		 var b=arr[1];
		 var sum=parseFloat(a)+parseFloat(b);
		 
		 list1.innerHTML = list1.innerHTML + "<li>"+a + "+" + b + "=" + sum +"</li>";
		 //result.innerHTML=sum;
		  //x.innerHTML=a+"+";
		 // y.innerHTML=b+"=";
		 in1.value = "";
		 function clearList()
			{
			list1.innerHTML = ""
			in1.value = ""
			
			}
			btn2.addEventListener('click', clearList)
			
	    }
	    else if((in1.value).substring(0,6)=="colour")
	    {
	    	document.body.style.backgroundColor = (in1.value).substring(7);
	    	in1.value = "";
	    	function clearList()
			{
			  document.body.style.backgroundColor ="white";
			}
			btn2.addEventListener('click', clearList)
			
	    }
	    else if((in1.value).substring(0,4)=="todo")
	    {
	    	
	    	
			
			
			if(count<15)
			{
				var toadd = (in1.value).substring(5);
				list.innerHTML = list.innerHTML + "<li>" + toadd + "</li>"
		    }
			else
			{

				alert("List is full! Cut it out!")
			}

			in1.value = "";
			count++;
			function clearList()
			{
			list.innerHTML = ""
			in1.value = ""
			count = 0
			}
			btn2.addEventListener('click', clearList)

			
		}
		else if((in1.value).substring(0,5)=="image")
		{
			  
    		var filename=(in1.value).substring(6);
    		element.innerHTML= "<img src='" + filename + "'>";
			in1.value = "";
    	}
		else
		{
			alert("Check Instruction");
		}
	
	
 }
}





function dothis1()
{
	
 
	
		if((in1.value).substring(0,3)=="add" )
		{
		 
		 var arr = (in1.value).split(/ /g).slice(1);
		 var a=arr[0];
		 var b=arr[1];
		 var sum=parseFloat(a)+parseFloat(b);
		 
		 list1.innerHTML = list1.innerHTML + "<li>"+a + "+" + b + "=" + sum +"</li>";
		 //result.innerHTML=sum;
		  //x.innerHTML=a+"+";
		 // y.innerHTML=b+"=";
		 in1.value = "";
	    }
	    if((in1.value).substring(0,6)=="colour")
	    {
	    	document.body.style.backgroundColor = (in1.value).substring(7);
	    	function clearList()
			{
			  document.body.style.backgroundColor ="white";
			}
			btn2.addEventListener('click', clearList)
			in1.value = "";
	    }
	    if((in1.value).substring(0,4)=="todo")
	    {
	    	
	    	
			
			
			if(count<15)
			{
				var toadd = (in1.value).substring(5);
				list.innerHTML = list.innerHTML + "<li>" + toadd + "</li>"
		    }
			else
			{

				alert("List is full! Cut it out!")
			}

			in1.value = "";
			count++;
			function clearList()
			{
			list.innerHTML = ""
			in1.value = ""
			count = 0
			}
			btn2.addEventListener('click', clearList)

			
		}
		if((in1.value).substring(0,5)=="image")
		{
			  
    		var filename=(in1.value).substring(6);
    		element.innerHTML= "<img src='" + filename + "'>";
			
    	}
		else
		{
			alert("Check Instruction");
		}
	
 
}
btn1.addEventListener('click', dothis1)
in1.addEventListener('keypress', dothis)
