var m = new MersenneTwister();
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
			var entryImage = document.createElement("img")
			var sImgSource = "icons/"+entry+".png"					//Set image path

			//Check if image exists
			var http = new XMLHttpRequest();
			http.open('HEAD', sImgSource, false);
			http.send();
			if (http.status==404) {
				//If image dosn't, retrieve via google's favicon service
				sImgSource="http://www.google.com/s2/favicons?domain="+data[tab][entry]
			}
			$(tabMenu).append("<a href='"+data[tab][entry]+"' class='menuItem'><img src='"+sImgSource+"'/>"+entry+"</a>");
		}
	}
});
