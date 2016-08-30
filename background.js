var BackgroundImage = document.getElementById("background");

var bImW = 0;
var bImH = 0;

function backgroundResize() {
	var difX = document.body.clientWidth / bImW;
	var difY = document.body.clientHeight / bImH;
	
	if (difX >= difY) {
		//Needs to scale more along X
		$(BackgroundImage).css('width', '100%');
		$(BackgroundImage).css('height', 'auto');
	} else {
		//Needs to scale more along Y
		$(BackgroundImage).css('width', 'auto');
		$(BackgroundImage).css('height', '100%');
	}

	$(BackgroundImage).css('left', (document.body.clientWidth/2) - (BackgroundImage.clientWidth/2));
	$(BackgroundImage).css('top', (document.body.clientHeight/2) - (BackgroundImage.clientHeight/2));
}

BackgroundImage.onload = function() {
	bImW = BackgroundImage.clientWidth;
	bImH = BackgroundImage.clientHeight;
	
	backgroundResize();

	$.adaptiveBackground.run();
}

// Colour Processing
$(BackgroundImage).on('ab-color-found', function(ev,payload){
	if (payload.color == "rgb(,,)" || payload.color == "rgb()") {
		payload.color = "rgb(80,80,80)";
	}
	var payCol = payload.color.replace(/[^\d,]/g, '').split(',');
	var backColour = new RGBColour(Number(payCol[0]), Number(payCol[1]), Number(payCol[2]));

	console.log(backColour.getHSV());

	var value = 50;

	if (backColour.getHSV().v > 90) {
		console.log("Too bright.");
		$('#quote, #source, #linkbar, a').css("color", "#222");
		value = 20;
	} else {
		console.log("Normal colouring.");
		if (backColour.getHSV().v < 20) { backColour = new HSVColour(backColour.getHSV().h, backColour.getHSV().s, 20); }
		if (backColour.getHSV().s < 30) { backColour = new HSVColour(backColour.getHSV().h, 30, backColour.getHSV().v); }
		value = 90
	}

	if (backColour.getHSV().h > 180) {
		console.log("Right end.");
		var bad = new HSVColour((backColour.getHSV().h / 2) + 180, backColour.getHSV().s, value);
		var good = new HSVColour((backColour.getHSV().h + (360 - backColour.getHSV().h)/2)/2, backColour.getHSV().s, value);
	} else {
		console.log("Left end.");
		var bad  = new HSVColour(backColour.getHSV().h / 2, backColour.getHSV().s, value);
		var good = new HSVColour((backColour.getHSV().h + (180 - backColour.getHSV().h))/2, backColour.getHSV().s, value);
	}

	if ( bad.getHSV().s < 40) { bad  = new HSVColour (bad.getHSV().h, 40,  bad.getHSV().v);	}
	if (good.getHSV().s < 40) { good = new HSVColour(good.getHSV().h, 40, good.getHSV().v);	}

	console.log(bad.getRGB());
	console.log(good.getRGB());

	$('em').css('color', bad.getCSSIntegerRGB());
	$('strong').css('color', good.getCSSIntegerRGB());
	$('#linkbar, .tabMenu, .material, .linkTab').css('background-color', backColour.getCSSHexadecimalRGB());
});

$(window).on("resize", backgroundResize);
