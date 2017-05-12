$.getJSON('quotes.json', function(data) {
	var wQ = Math.max(Math.round(m.random()*data.length)-1, 0);
	console.log(wQ);
	$("#quote").append(markdown.toHTML(data[wQ]["Quotation"]));
	$("#source").append(markdown.toHTML(data[wQ]["Source"]));
});

$.getJSON('linkbar.json',function(data) {
	for (tab in data) {
		var newTab = document.createElement("div");
		newTab.className = "linkTab";
		newTab.innerHTML = tab;
		$("#linkbar").append(newTab);

		//Set up the animations
		var tabMenu = document.createElement("div");
		tabMenu.className = "tabMenu fadeInDown";

		newTab.appendChild(tabMenu);
		for (entry in data[tab]) {
			var link_url = data[tab][entry];
			(function(link_url, entry, tabMenu) {
				var entryImage = document.createElement("img")
				var sImgSource = "icons/"+entry+".png"					//Set image path
	
				//Check if image exists
				var http = new XMLHttpRequest();
				http.open('HEAD', sImgSource, true);
				http.onload = function(e) {
					if (http.status==404) {
						//If image dosn't, retrieve via google's favicon service
						sImgSource="https://www.google.com/s2/favicons?domain="+link_url
					}
					$(tabMenu).append("<a href='"+link_url+"' class='menuItem'><img src='"+sImgSource+"'/>"+entry+"</a>");
				}
				http.onerror = function (e) {
   					// do something to fix the results of server error...
				};
				http.send(null);
			})(link_url, entry, tabMenu);
		}
	}
});
