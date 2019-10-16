let items = $(".list-group-item");
let views = $(".view");

items.click(function() {
    items.removeClass("active btn-primary");
    views.fadeTo("fast", 0);
    views.css("display", "none");
    $(this).addClass("active btn-primary");
    for (var i = 0; i < items.length; i++) {
        console.log(this.name)
        console.log(views[i].id);
        if (this.name == (views[i].id)) {
            $(views[i]).css("display", "block");
            $(views[i]).fadeTo("slow", 1);

            break;
        }
    }
});

$(".view").css("display", "none");
$([...$(".view")][0]).css("display", "block");