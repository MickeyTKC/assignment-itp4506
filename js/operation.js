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
                for (var j in data[i].menu) {
                    $("#meunsTable tbody").append("<tr><td>" + data[i].menu[j].name +
                        "</td><td>" + data[i].menu[j].type +
                        "</td><td>" + data[i].menu[j].date.start +
                        "</td><td>" + data[i].menu[j].date.end +
                        "</td><td>" + data[i].menu[j].takeaway +
                        "</td></tr>");
                }
                break;
            }
        }
        $("tbody tr:nth-child(even)").addClass("table-success");
        $("tbody tr:nth-child(odd)").addClass("table-warning");
        $(".meuntable-th").addClass("table-light");
    });

});