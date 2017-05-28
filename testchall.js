
var in1 = document.getElementById('input1')
var i=(in1.value);
var result=document.getElementById('sum')
var x=document.getElementById('a')
var y=document.getElementById('b')
var list = document.getElementById('todolist')
var list1 = document.getElementById('addlist')
var list2 = document.getElementById('element')

var count = 0
var count1=0
var btn1=document.getElementById('btn1')
var btn2=document.getElementById('btn2')
var clr1=document.getElementById('clr1')
var clr2=document.getElementById('clr2')
var clr3=document.getElementById('clr3')
function dothis(event)
{
	if(event.which==13)
 {
	
		if((in1.value).substring(0,3)=="add" )
		{
		 document.getElementById('jk1').scrollIntoView();
		 var arr = (in1.value).split(/ /g).slice(1);
		 var a=arr[0];
		 var b=arr[1];
		 var sum=parseFloat(a)+parseFloat(b);
		 if(count1<10)
		 list1.innerHTML = list1.innerHTML + "<li>"+a + "+" + b + "=" + sum +"</li>";
		 //result.innerHTML=sum;
		  //x.innerHTML=a+"+";
		 // y.innerHTML=b+"=";
		 else
		 	alert("List is full");
		 count1++;
		 function clearList()
			{
			list1.innerHTML = ""
			in1.value = ""
			count1=0;
			}
			clr1.addEventListener('click', clearList)
			in1.value="";
	    }
	     else if((in1.value).substring(0,3)=="sub" )
		{
		 document.getElementById('jk1').scrollIntoView();
		 var arr1 = (in1.value).split(/ /g).slice(1);
		 var a1=arr1[0];
		 var b1=arr1[1];
		 var sub=parseFloat(a1)-parseFloat(b1);
		 if(count1<10)
		 list1.innerHTML = list1.innerHTML + "<li>"+a1 + "-" + b1+ "=" + sub +"</li>";
		 else
		 	alert("List is full ");
		 count1++;
		 in1.value="";
		 function clearList()
			{
			list1.innerHTML = ""
			in1.value = ""
			
			}
			clr1.addEventListener('click', clearList)
			in1.value="";
	    }
	    else if((in1.value).substring(0,4)=="mult" )
		{
		 document.getElementById('jk1').scrollIntoView();
		 var arr2 = (in1.value).split(/ /g).slice(1);
		 var a2=arr2[0];
		 var b2=arr2[1];
		 var mul=parseFloat(a2)*parseFloat(b2);
		 if(count1<10)
		 list1.innerHTML = list1.innerHTML + "<li>"+a2 + "*" + b2+ "=" + mul +"</li>";
		 else
		 	alert("List is full ");
		 count1++;
		 in1.value="";
		 function clearList()
			{
			list1.innerHTML = ""
			in1.value = ""
			
			}
			clr1.addEventListener('click', clearList)
			in1.value="";
	    }
	     else if((in1.value).substring(0,3)=="div" )
		{
		 document.getElementById('jk1').scrollIntoView();
		 var arr3 = (in1.value).split(/ /g).slice(1);
		 var a3=arr3[0];
		 var b3=arr3[1];
		 var div=parseFloat(a3)/parseFloat(b3);
		 if(count1<10)
		 list1.innerHTML = list1.innerHTML + "<li>"+a3 + "/" + b3+ "=" + div +"</li>";
		 else
		 	alert("List is full ");
		 count1++;
		 in1.value="";
		 function clearList()
			{
			list1.innerHTML = ""
			in1.value = ""
			
			}
			clr1.addEventListener('click', clearList)
			in1.value="";
	    }
	    else if((in1.value).substring(0,6)=="colour")
	    {
	    	document.body.style.backgroundColor = (in1.value).substring(7);
	    	function clearList()
			{
			  document.body.style.backgroundColor ="white";
			}
			btn2.addEventListener('click', clearList);
			in1.value="";
	    }
	    else if((in1.value).substring(0,4)=="todo")
	    {
	    	
	    	
			document.getElementById('jk2').scrollIntoView();
			
			if(count<10)
			{
				
				var toadd = (in1.value).substring(5);
				list.innerHTML = list.innerHTML + "<li><input type='checkbox'><label class='strikeoff'>" + toadd +"</label></li>";
				
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
			clr2.addEventListener('click', clearList)

			
		}
		else if((in1.value).substring(0,5)=="image")
		{
			  document.getElementById('jk3').scrollIntoView();
    		var filename=(in1.value).substring(6);
    		list2.innerHTML= list2.innerHTML + "<img src= ' " + filename + "'style='width:200px; height:200px;'> ";
			in1.value="";
			function clearList()
			{
			element.innerHTML = ""
			in1.value = ""
			
			}
			clr3.addEventListener('click', clearList)

    	}
    	else if((in1.value).substring(0,6)=="google")
    	{
    		window.location.href = "https://www.google.co.in/search?client=ubuntu&channel=fs&q="+(in1.value).substring(7)+			   	
   			"&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=QKoQWNXLCcWHoAOjhIGABQ";
   			in1.value="";
   		}

		else
		{	
			alert("Command not found.Check instruction ");
		}
 }
}





function dothis1()
{
	
 
	
		if((in1.value).substring(0,3)=="add" )
		{
		document.getElementById('jk1').scrollIntoView();
		 var arr = (in1.value).split(/ /g).slice(1);
		 var a=arr[0];
		 var b=arr[1];
		 var sum=parseFloat(a)+parseFloat(b);
		 if(count1<10)
		 list1.innerHTML = list1.innerHTML + "<li>"+a + "+" + b + "=" + sum +"</li>";
		 else
		 	alert("List is full ");
		 count1++;
		 in1.value="";
		 function clearList()
			{
			list1.innerHTML = ""
			in1.value = ""
			
			}
			clr1.addEventListener('click', clearList)
			in1.value="";
	    }
	    else if((in1.value).substring(0,3)=="sub" )
		{
		 document.getElementById('jk1').scrollIntoView();
		 var arr1 = (in1.value).split(/ /g).slice(1);
		 var a1=arr1[0];
		 var b1=arr1[1];
		 var sub=parseFloat(a1)-parseFloat(b1);
		 if(count1<10)
		 list1.innerHTML = list1.innerHTML + "<li>"+a1 + "-" + b1+ "=" + sub +"</li>";
		 else
		 	alert("List is full ");
		 count1++;
		 in1.value="";
		 function clearList()
			{
			list1.innerHTML = ""
			in1.value = ""
			
			}
			clr1.addEventListener('click', clearList)
			in1.value="";
	    }
	    else if((in1.value).substring(0,4)=="mult" )
		{
		 document.getElementById('jk1').scrollIntoView();
		 var arr2 = (in1.value).split(/ /g).slice(1);
		 var a2=arr2[0];
		 var b2=arr2[1];
		 var mul=parseFloat(a2)*parseFloat(b2);
		 if(count1<10)
		 list1.innerHTML = list1.innerHTML + "<li>"+a2 + "*" + b2+ "=" + mul +"</li>";
		 else
		 	alert("List is full ");
		 count1++;
		 in1.value="";
		 function clearList()
			{
			list1.innerHTML = ""
			in1.value = ""
			
			}
			clr1.addEventListener('click', clearList)
			in1.value="";
	    }
	    else if((in1.value).substring(0,3)=="div" )
		{
		 document.getElementById('jk1').scrollIntoView();
		 var arr3 = (in1.value).split(/ /g).slice(1);
		 var a3=arr3[0];
		 var b3=arr3[1];
		 var div=parseFloat(a3)/parseFloat(b3);
		 if(count1<10)
		 list1.innerHTML = list1.innerHTML + "<li>"+a3 + "/" + b3+ "=" + div +"</li>";
		 else
		 	alert("List is full ");
		 count1++;
		 in1.value="";
		 function clearList()
			{
			list1.innerHTML = ""
			in1.value = ""
			
			}
			clr1.addEventListener('click', clearList)
			in1.value="";
	    }
	    else if((in1.value).substring(0,6)=="colour")
	    {
	    	document.body.style.backgroundColor = (in1.value).substring(7);
	    	function clearList()
			{
			  document.body.style.backgroundColor ="white";
			}
			btn2.addEventListener('click', clearList)
			in1.value="";
	    }
	    else if((in1.value).substring(0,4)=="todo")
	    {
	    	
	    	
			
			document.getElementById('jk2').scrollIntoView();
			if(count<10)
			{	
				var toadd = (in1.value).substring(5);
				list.innerHTML = list.innerHTML + "<li><input type='checkbox'><label class='strikeoff'>" + toadd +"</label></li>";
				
		    }
			else
			{

				alert("List is full!")
			}

			in1.value = "";
			count++;
			function clearList()
			{
			list.innerHTML = ""
			in1.value = ""
			count = 0
			}
			clr2.addEventListener('click', clearList)
			in1.value="";
			
		}
		
		
		else if((in1.value).substring(0,5)=="image")
		{
			  document.getElementById('jk3').scrollIntoView();
    		var filename=(in1.value).substring(6);
    		list2.innerHTML= list2.innerHTML + "<img src= ' " + filename + "'style='width:200px; height:200px;'> ";
			in1.value="";
			function clearList()
			{
			element.innerHTML = ""
			in1.value = ""
			
			}
			clr3.addEventListener('click', clearList)

    	}
    	else if((in1.value).substring(0,6)=="google")
    	{
    		window.location.href = "https://www.google.co.in/search?client=ubuntu&channel=fs&q="+(in1.value).substring(7)+			   	
   			"&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=QKoQWNXLCcWHoAOjhIGABQ";
   			in1.value="";
   		}
		
		else
		{	
			alert("Command not found.Check instruction ");
		}
	
 
}
function clear()
{
		
 window.location.href = "indextest.html";
}
btn2.addEventListener('click', clear)
btn1.addEventListener('click', dothis1)
in1.addEventListener('keypress', dothis)

























