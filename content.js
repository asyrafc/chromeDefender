if(window.location.href.indexOf("%3c%73%63%72%69%70%74%3e") > -1 || window.location.href.indexOf("<script>") > -1 )
{
	// this line will render the html code in the website useless as everything will be commented out
	var newWindow = window.open();
	newWindow.document.write(document.documentElement.innerHTML);
	
	document.write('<!--');
	document.write('-->');
	// This line will overwrite the html code/content
	document.write("<h1>Test</h1>");
	document.write("<p>Page loading have been intercepted as the website that you visited just now might contain malicious content</p>");
	
	//newWindow.document.write("<p>You have been redirected as the website that you visited just now might contain malicious content</p>");
	
	//window.top.close();
	//alert(window.location.href);
	
	var audio = new Audio(chrome.extension.getURL('rh.mp3'));
	audio.play();
}



//alert(chrome.extension.getURL(""));

