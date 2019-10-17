$(document).ready(function() {
    var restId;
    $.getJSON("data/user.json", function(data) {
        for (var i in data) {
            console.log(data[i].username);
            if (data[i].username == "operator") {
                restId = data[i].restaurant;
            }
        }
    });
    $.getJSON("data/restaurant.json", function(data) {
        console.log(restId);
        for (var i in data) {
            if (data[i].id == restId) {
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
            })
        })

    });


});