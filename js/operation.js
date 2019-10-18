let operator = {};
$(document).ready(function() {
    const restId = Object.keys(localStorage["user"]).length ? JSON.parse(localStorage["user"]).restaurant : "0";

    $.getJSON("data/restaurant.json", function(data) {
        console.log(restId);
        for (var i in data) {
            if (data[i].id == restId) {
                $("#rTitle").html(data[i].name + `<label class="labelUserType">- OPERATOR</label>`);
                $("#name").val(data[i].name);
                $("#foodType").val(data[i].type);
                $("#introduction").val(data[i].introduction);
                for (var j in data[i].menu) {
                    $("#meunsTable tbody").append("<tr><td>" + data[i].menu[j].name +
                        "</td><td>" + data[i].menu[j].type +
                        "</td><td>" + data[i].menu[j].takeaway +
                        "</td><td>" + data[i].menu[j].date.start +
                        "</td><td>" + data[i].menu[j].date.end +
                        "</td><td><button class='chgbtn'><strong>+</strong></button>&nbsp;<button class='delbtn'><strong>x</strong></button></td></tr>");
                }
                break;
            }
        }
        $("tbody tr:nth-child(even)").addClass("table-success");
        $("tbody tr:nth-child(odd)").addClass("table-warning");
        $(".meuntable-th").addClass("table-light");

        $("#msave").css("display", "none");
        $("#mreset").css("display", "none");
        $("#menuForm").css("display", "none");

        $("#reset").click(function() {
            $("#name").val(data[i].name);
            $("#foodType").val(data[i].foodType);
            $("#introduction").val(data[i].introduction);
        });

        $("#madd").click(function() {
            $("#menuForm").css("display", "inline");
            $("#madd").css("display", "none");
            $("#msave").css("display", "inline");
            $("#mreset").css("display", "inline");
            $("#mname").val("");
            $("#menuType").val("");
            document.getElementById("takeAway").checked = false;
            $("#start").val("");
            $("#end").val("");
        });

        $("#mreset").click(function() {
            $("#madd").css("display", "inline");
            $("#msave").css("display", "none");
            $("#mreset").css("display", "none");
            $("#menuForm").css("display", "none");
        });

        $(".chgbtn").click(function() {
            $("#menuForm").css("display", "inline");
            $("#madd").css("display", "none");
            $("#msave").css("display", "inline");
            $("#mreset").css("display", "inline");
            const row = [...$(this).parent().parent().find("td")];
            var input = [...$("#menuForm").find("input")];
            input.splice(1, 0, $("#menuForm").find("select"));
            for (i = 0; i < row.length - 1; i++) {
                if (i == 2) {
                    input[i].checked = $(row[i]).text() == "true" ? true : false;
                } else {
                    $(input[i]).val($(row[i]).text());
                }

            }
        });

        $(".delbtn").click(function() {
            $("tbody tr:nth-child(even)").removeClass("table-success");
            $("tbody tr:nth-child(odd)").removeClass("table-warning");
            $(this).parent().parent().remove();
            $("tbody tr:nth-child(even)").addClass("table-success");
            $("tbody tr:nth-child(odd)").addClass("table-warning");
        })

        $("#msave").click(function() {
            $("tbody tr:nth-child(even)").removeClass("table-success");
            $("tbody tr:nth-child(odd)").removeClass("table-warning");
            const row = $("<tr>")

            var input = [...$("#menuForm").find("input")];
            input.splice(1, 0, $("#menuForm").find("select"));
            for (i = 0; i < 5; i++) {
                const item = $("<td>");
                if (i == 2) {
                    item.text(input[i].checked)
                } else {
                    item.text($(input[i]).val())
                }
                row.append(item)
            }
            const action = $("<td>").html("<button class='chgbtn'><strong>+</strong></button>&nbsp;<button class='delbtn'><strong>x</strong></button>")
            row.append(action)
            $("tbody").append(row);
            $("tbody tr:nth-child(even)").addClass("table-success");
            $("tbody tr:nth-child(odd)").addClass("table-warning");

            $(".chgbtn").last().click(function() {
                $("#menuForm").css("display", "inline");
                $("#madd").css("display", "none");
                $("#msave").css("display", "inline");
                $("#mreset").css("display", "inline");
                const row = [...$(this).parent().parent().find("td")];
                var input = [...$("#menuForm").find("input")];
                input.splice(1, 0, $("#menuForm").find("select"));
                for (i = 0; i < row.length - 1; i++) {
                    if (i == 2) {
                        input[i].checked = $(row[i]).text() == "true" ? true : false;
                    } else {
                        $(input[i]).val($(row[i]).text());
                    }

                }
            });

            $(".delbtn").last().click(function() {
                $("tbody tr:nth-child(even)").removeClass("table-success");
                $("tbody tr:nth-child(odd)").removeClass("table-warning");
                $(this).parent().parent().remove();
                $("tbody tr:nth-child(even)").addClass("table-success");
                $("tbody tr:nth-child(odd)").addClass("table-warning");
            });
        });

        for (var i in data) {
            if (data[i].id == restId) {
                for (var j in data[i].branch) {
                    $("#bbody").append("<fieldset id='bbranch" + j + "' class='form-label-group'>" +
                        "<legend>" + data[i].branch[j].location.locat + "</legend>" +
                        "<p>" + data[i].branch[j].location.string + " | " + data[i].branch[j].location.tel + "</p>" +
                        "<p>" + data[i].branch[j].location.howToGo + "</p>" +
                        "<p class='inputlbl'>\tMap Link: " + data[i].branch[j].location.map + "</p>" +
                        "</fieldset>");
                }

                $("#branchesBody fieldset").click(function() {
                    console.log("click")
                    $("#bForm").css("display", "inline");
                    $("#badd").css("display", "none");
                    $("#bsave").css("display", "inline");
                    $("#breset").css("display", "inline");
                    $("#bdel").css("display", "inline");
                    const j = $(this).index();
                    operator.branch = j;
                    console.log(operator)
                    $("#blocat").val(data[i].branch[j].location.locat);
                    $("#btel").val(data[i].branch[j].location.tel);
                    $("#bstring").val(data[i].branch[j].location.string);
                    $("#bhowToGo").val(data[i].branch[j].location.howToGo);
                    $("#bmap").val(data[i].branch[j].location.map);
                });
            }
            break;
        }
    })

    $("#bsave").click(function() {
        $("#bbody").append("<fieldset class='form-label-group'>" +
            "<legend>" + $("#blocat").val() + "</legend>" +
            "<p>" + $("#bstring").val() + " | " + $("#btel").val() + "</p>" +
            "<p>" + $("#bhowToGo").val() + "</p>" +
            "<p class='inputlbl'>\tMap Link: " + $("#bmap").val() + "</p>" +
            "</fieldset>");
    })


    $("#bForm").css("display", "none");
    $("#badd").css("display", "inline");
    $("#bsave").css("display", "none");
    $("#breset").css("display", "none");
    $("#bdel").css("display", "none");

    $("#badd").click(function() {
        $("#bForm").css("display", "inline");
        $("#badd").css("display", "none");
        $("#bsave").css("display", "inline");
        $("#breset").css("display", "inline");
        $("#bdel").css("display", "inline");
        $("#blocat").val("");
        $("#btel").val("");
        $("#bstring").val("");
        $("#bhowToGo").val("");
        $("#bmap").val("");
    })

    $("#breset").click(function() {
        $("#bForm").css("display", "none");
        $("#badd").css("display", "inline");
        $("#bsave").css("display", "none");
        $("#breset").css("display", "none");
        $("#bdel").css("display", "none");
    })

    $("#bdel").click(function() {
        $($("#bbody").find("fieldset")[operator.branch]).remove()
    })

});