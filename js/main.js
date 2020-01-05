function link(path) {
	$(".container").fadeOut(150, function () {
		// $(".loading").fadeIn(150);
		$.get(path, data => {
		$(".container").html($(".blurb", data))
			$(".container").fadeIn(150)
			p = path.replace("index.html", "")
			history.pushState(p, p, p)
			$(".blurb").append("<script>initParallax();</script>")
		})
	});
}

function toggleVisibility(name) {
	var pr = `p[name="${name}"]`;
	if ($(pr).css("display") == "block") {
		$(pr).animate({opacity: 0}, 100, () => {
			$(pr).css("display", "none")
		});
	} else if ($(pr).css("display") == "none") {
		$(pr).css("display", "block")
		$(pr).animate({opacity: 1}, 250);
	} 
}

function initParallax() {
	var list = document.querySelectorAll("div[data-src]");

	for (var i = 0; i < list.length; i++) {
		var url = list[i].getAttribute('data-src');
		list[i].style.backgroundImage="url(" + window.location.href + url + ")";
	}
	
	console.log(`Successfully initialized ${list.length} parallax containers.`)
}
