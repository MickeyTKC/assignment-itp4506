//List Group Event
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
$("#addReview").css("display", "none");

$("#leaveReview").click(function() {
    $("#addReview").css("display", "inline");
});

$("#save").click(function() {
    $(".comments").append("<hr><p>" + $("textarea").val() + "</p>" +
        "<small class='text-muted'>Posted by " + visitor.username + "</small>");
});


$("#reset").click(function() {
    $("#addReview").css("display", "none");
    $("textarea").val("");
});

$("#submitOrder").click(() => {
    $(".thankYouForOrder").fadeIn()
    setTimeout(() => { $(".thankYouForOrder").fadeOut() }, 7000)
})