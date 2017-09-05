//if(window.location.href.indexOf("git") > -1 || window.location.href.indexOf("how") > -1 )
//{
	// this line will render the html code in the website useless as everything will be commented out
	//var newWindow = window.open();
	//newWindow.document.write(document.documentElement.innerHTML);
	var i;
	var arrayMaliciousContent;
	for(i = 0; i < document.getElementsByTagName("p").length; i++)
	{
		if(document.getElementsByTagName("p")[i].innerHTML.indexOf("Firebase") > -1)
		{
			arrayMaliciousContent[i] = document.getElementsByTagName("p")[i].innerHTML.indexOf("Firebase");
		}
		else
		{
			//alert(document.getElementsByTagName("p")[i].innerHTML);
		}
	}
	
	document.write('<!--');
	document.write('-->');
	// This line will overwrite the html code/content
	document.write("<h1>Test</h1>");
	document.write("<p>Page loading have been intercepted as the website that you visited just now might contain malicious content</p>");
	for(var j = 0; j < arrayMaliciousContent.length; j++)
	{
		document.write(arrayMaliciousContent[j]);
	}
	
	//newWindow.document.write("<p>You have been redirected as the website that you visited just now might contain malicious content</p>");
	
	//window.top.close();
	//alert(window.location.href);
	
	//var audio = new Audio(chrome.extension.getURL('rh.mp3'));
	//audio.play();
//}



//alert(chrome.extension.getURL(""));

