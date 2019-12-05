function link(path) {
    $(".container").fadeOut(150, function () {
        // $(".loading").fadeIn(150);
        $.get(path, data => {
            $(".container").html($(".blurb", data))
            $(".container").fadeIn(150);
            p = path.replace("index.html", "");
            history.pushState(p, p, p);
        })
//         $(".container").load(path + " .blurb", function () {
//             // $(".loading").fadeOut(150);
//             $(".container").fadeIn(150);
//             p = path.replace("index.html", "");
//             history.pushState(p, p, p);
//         });
    });
}

function createParallax(place, image) {
    var par = document.createElement("div");
    par.className = "parallax";
    $(par).css("background", `url(${image})`);
    $(".blurb").append(par);
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
