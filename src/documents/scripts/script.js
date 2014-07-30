function onScrolledTop(){
	// AdobeEdge.getComposition("docpad-keys-animation").getStage().play("start");
	document.getElementById('main-menu').style.borderBottom = '7px solid #005EAC';
}

window.onscroll = function(){
	document.documentElement.scrollTop || document.body.scrollTop > 366 ?
		onScrolledTop()
		: document.getElementById('main-menu').style.borderBottom = 0;
}
