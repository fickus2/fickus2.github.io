function link(path) {
    $(".blurb").fadeOut(300, function () {
        // $(".loading").fadeIn(150);
        $(".blurb").load(path + " #blurb", function () {
            // $(".loading").fadeOut(150);
            $(".blurb").fadeIn(150);
            p = path.replace("index.html", "");
            history.pushState(p, p, p);
        });
    });
}
