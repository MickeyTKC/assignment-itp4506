const login = {
    username: () => {
        return $("#username").val();
    },
    password: () => {
        return $("#password").val();
    },
    default: () => {
        const value = Object.keys(localStorage).filter(v=>(v=="remember")).length?localStorage["remember"]:",";
        console.log(value);
        $("#username").val(value.split(",")[0]);
        $("#password").val(value.split(",")[1]);
    },
    remember: () => {
        localStorage["remember"] = login.username() + "," + login.password();
    },
    signin: () => {
        $.getJSON("data/user.json", data => {
            for (i = 0; i < data.length; i++) {
                if (data[i].username == login.username()) {
                    if (data[i].password == login.password()) {
                        login.message("success", "Sign in success !")
                        localStorage["user"] = JSON.stringify(data[i]);
                        if(document.getElementById("cbRemember").checked){
                            login.remember();
                        }
                        location="index.html"
                    } else {
                        login.message("danger", "Incorrect password !")
                    }
                    break;
                } else {
                    login.message("danger", "Incorrect username !")
                }
            }
        })
    },
    message: (type, text) => {
        const mb = $("<div class=\"animate-fading alert alert-" + type + "\" role=\"alert\" style='position: absolute;width:100%;'>");
        mb.text(text);
        $("form").append(mb)
        setTimeout(() => { $(".alert").remove() }, 10000);
    }
}