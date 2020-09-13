function link(path) {
	$(".container").fadeOut(150, function () {
		p = path.replace("/index.html", "")
		p = path.replace("index.html", "")
		if (p.search(/"blog"/) !== -1) p += "/index.html"
		$.get(p, data => {
		$(".container").html($(".blurb", data))
			$(".container").fadeIn(150)
			history.pushState(p, p, p)
			$(".blurb").append("<script>initParallax();</script>")
		})
	});
}

function cardClick(path) {
	if (path) window.location.href = path;
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
}


// Prikol

var prikolVisible = false;

function showPrikol() {
  if (!prikolVisible) {
    var pr = document.createElement("img");
    pr.src = "/img/prikol.png";
    pr.className = "prikol";
    document.querySelector("body").append(pr);
    prikolVisible = true;
    setTimeout(() => {
      pr.remove()
      prikolVisible = false;
    }, 5000);
  }
}
