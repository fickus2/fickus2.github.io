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
    $(place).append(par);
}
