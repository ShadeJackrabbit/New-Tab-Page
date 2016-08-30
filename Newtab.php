<meta charset="UTF-8">
<html>
	<head>
		<title>New Tab</title>
	</head>
	<link href='http://fonts.googleapis.com/css?family=Pathway+Gothic+One' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Oswald:700' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Anonymous+Pro' rel='stylesheet' type='text/css'>
	<link href='newtab.css' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="markdown.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script type="text/javascript" src="jquery.adaptive-backgrounds.js"></script>
	<script type="text/javascript" src="Colour.js"></script>
	<script type="text/javascript" src="mersenne-twister.js"></script>
	<body>
		<?php
			$dir = "backgrounds";
			$backSrcLnk = $dir . "/" . array_rand(array_flip(array_diff(scandir($dir), array('..', '.'))));
		?>
		<img id="background" data-adaptive-background="1" src="<?php echo $backSrcLnk;?>"/>
		<script type="text/javascript" src="background.js"></script>
		<div id="linkbar" class="material"></div>
		<div id="quote" class="material">
			<div id="source" class="material"></div>
		</div>
		<script type="text/javascript" src="newtab.js"></script>
	</body>
</html>