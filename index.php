<?php
function random_pic()
{
    $files = glob('backgrounds/*.*');
    $file = array_rand($files);
    return $files[$file];
}
?>

<meta charset="UTF-8">
<html>
	<head>
		<title>New Tab</title>

		<link href='newtab.css' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="markdown.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script type="text/javascript" src="jquery.adaptive-backgrounds.js"></script>
		<script type="text/javascript" src="Colour.js"></script>
		<script type="text/javascript" src="mersenne-twister.js"></script>
	</head>
	<body>
		<img id="background" data-adaptive-background="1"/>
		<script type="text/javascript" src="background.js"></script>
		<script type="text/javascript">
			var m = new MersenneTwister();
			console.log("<?=random_pic()?>");
			BackgroundImage.src = "<?=random_pic()?>";
		</script>
		<div id="linkbar" class="material"></div>
		<div id="quote" class="material">
			<div id="source" class="material"></div>
		</div>
		<script type="text/javascript" src="newtab.js"></script>
	</body>
</html>
