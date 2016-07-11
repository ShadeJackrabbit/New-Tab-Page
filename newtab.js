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
			//Use PHP to check if image exists. If it does...
				//Use folder image
			//If it doesn't...
				//Request http://www.google.com/s2/favicons?domain=www.yourdomain.com
			//Then change append form for it
			$(tabMenu).append("<a href='"+data[tab][entry]+"' class='menuItem'><img src='icons/"+entry+".png'/>"+entry+"</a>");
		}
	}
});