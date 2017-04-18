window.onload = function() {
	const files = [
		"phaser/v2/build/phaser.min.js",
		"nmc/js/Constants.js",
		"nmc/js/Core.js",
		"nmc/js/resources/Resource.js",
		"nmc/js/resources/DistanceTravelled.js"
	];
	
	LazyLoad.js(files, function() {
		$("#loading").remove();
		new Core();
	});
}