var infobtn = infobtn || document.getElementById("infobtn");
var info = info || document.getElementById("info");
var meunsbtn = meunsbtn || document.getElementById("meunsbtn");
var meuns = meuns || document.getElementById("meuns");
var branchesbtn = branchesbtn || document.getElementById("branchesbtn");
var branches = branches || document.getElementById("branches");

infobtn.addEventListener("click", function() {
    info.style.display = "block";
    meuns.style.display = "none";
    branches.style.display = "none";
});

meunsbtn.addEventListener("click", function() {
    info.style.display = "none";
    meuns.style.display = "block";
    branches.style.display = "none";
});

branchesbtn.addEventListener("click", function() {
    info.style.display = "none";
    meuns.style.display = "none";
    branches.style.display = "block";
});

const items = $(".list-group-item");
const views = $(".view");

items.click(function() {
    items.removeClass("active btn-primary");
    $(this).addClass("active btn-primary");
    console.log($(this));
});

$(".view").css("display", "none");
$([...$(".view")][0]).css("display", "block");