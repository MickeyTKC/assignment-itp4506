$(document).ready(function() {
        $("#header").load("components/nav.html");
        $("#footer").load("components/footer.html");

        var divs = document.getElementsByClassName("form-label-group");
        for (var i = 0; i < divs.length; i++) {
            divs[i].setAttribute("ondrop", "drop(event)");
            divs[i].setAttribute("ondragover", "allowDrop(event)");
        }

        const existingUsers = {
            user: [],
            operator: [],
            admin: []
        };
        const createRow = (user) => {
            const row = $("<pre id='" + user.username + "'class='data' draggable='true' ondragstart='drag(event)'>");
            const alias = " <label class='inputlbl'>" + user.alias + "</label>";
            const action = "<img src='image/del24px.png' class='databtn' /><img src='image/edit24px.png' class='databtn editbtn' />"
            row.html(user.username + "\t" + user.password + "\t" + alias + action);
            $(row.find("img")[0]).click(function() {
                $(this).parent().fadeOut()
            })
            return row;
        }
        $.getJSON("data/user.json", (data) => {
            existingUsers.user = data.filter((v) => {
                return (v.type == "user")
            })
            existingUsers.operator = data.filter((v) => {
                return (v.type == "operator")
            })
            existingUsers.admin = data.filter((v) => {
                return (v.type == "admin")
            })

            existingUsers.user.forEach(v => {
                $($(".card")[0]).find(".form-label-group").append(createRow(v))
            })

            existingUsers.operator.forEach(v => {
                $($(".card")[1]).find(".form-label-group").append(createRow(v))
            })

            existingUsers.admin.forEach(v => {
                $($(".card")[2]).find(".form-label-group").append(createRow(v))
            })
        })
        $("#btn-reset").click(() => {
            $.getJSON("data/user.json", (data) => {
                $(".card").find(".form-label-group").html("");
                existingUsers.user = data.filter((v) => {
                    return (v.type == "user")
                })
                existingUsers.operator = data.filter((v) => {
                    return (v.type == "operator")
                })
                existingUsers.admin = data.filter((v) => {
                    return (v.type == "admin")
                })
                existingUsers.user.forEach(v => {
                    $($(".card")[0]).find(".form-label-group").append(createRow(v))
                })

                existingUsers.operator.forEach(v => {
                    $($(".card")[1]).find(".form-label-group").append(createRow(v))
                })

                existingUsers.admin.forEach(v => {
                    $($(".card")[2]).find(".form-label-group").append(createRow(v))
                })
            })
        })

        $("#nuserForm").css("display", "none");
        $("#nuserAddbtn").click(() => {
            $("#nuserForm").css("display", "inline");
        })
        $("#nuserclose").click(() => {
            $("#nuserForm").css("display", "none");
            nuserInputClear();
        })
        $("#nusersave").click(() => {
            const user = {
                username: $("#nusernametxt").val(),
                password:$("#npasswordtxt").val(),
                alias:$("#naliastxt").val(),
            };
            $($(".card")[0]).find(".form-label-group").append(createRow(user));
            nuserInputClear();
            $("#nuserForm").css("display", "none");
        })

        $("#operaForm").css("display", "none");
        $("#operaAddbtn").click(() => {
            $("#operaForm").css("display", "inline");
        })
        $("#operaclose").click(() => {
            $("#operaForm").css("display", "none");
            operaInputClear();
        })
        $("#operasave").click(() => {
            const user = {
                username: $("#ousernametxt").val(),
                password:$("#opasswordtxt").val(),
                alias:$("#oaliastxt").val(),
            };
            $($(".card")[1]).find(".form-label-group").append(createRow(user));
            nuserInputClear();
            $("#nuserForm").css("display", "none");
            operaInputClear();
            $("#operaForm").css("display", "none");
        })

        $("#adminForm").css("display", "none");
        $("#adminAddbtn").click(() => {
            $("#adminForm").css("display", "inline");
        })
        $("#adminclose").click(() => {
            $("#adminForm").css("display", "none");
            adminInputClear();
        })
        $("#adminsave").click(() => {
            const user = {
                username: $("#ausernametxt").val(),
                password:$("#apasswordtxt").val(),
                alias:$("#aaliastxt").val(),
            };
            $($(".card")[2]).find(".form-label-group").append(createRow(user));
            nuserInputClear();
            $("#nuserForm").css("display", "none");
            adminInputClear();
            $("#adminForm").css("display", "none");
        })

        $(".editbtn").click(() => {

        })
    }) //ready

function nuserInputClear() {
    $("#nusernametxt").val("");
    $("#npasswordtxt").val("");
    $("#naliastxt").val("");
}

function operaInputClear() {
    $("#ousernametxt").val("");
    $("#opasswordtxt").val("");
    $("#oaliastxt").val("");
}

function adminInputClear() {
    $("#ausernametxt").val("");
    $("#apasswordtxt").val("");
    $("#aaliastxt").val("");
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("pre", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("pre");
    if ($(ev.target).hasClass("data")) {
        ev.target.parentElement.appendChild(document.getElementById(data));
    } else if ($(ev.target).hasClass("card-body") || $(ev.target).hasClass("card-header")) {
        $(ev.target).parent().find(".form-label-group").append(document.getElementById(data))
    } else {
        ev.target.appendChild(document.getElementById(data));
    }
}