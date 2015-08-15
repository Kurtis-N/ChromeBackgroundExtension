function downloadImage(info)
{
	var url = info['srcUrl'];
	var filename = "Backgrounds/"+url.substring(url.lastIndexOf('/')+1);
	//alert(url + ", " + filename);
	chrome.downloads.download({
  		url: url,
  		filename: filename
	});
}
chrome.contextMenus.create({title: "Add to Background Displays", contexts:["image"], onclick: downloadImage });