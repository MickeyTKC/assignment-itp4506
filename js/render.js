// import jQuery before run that script 
const render = {
    site: {
        load: () => {
            $("#nav").load("components/nav.html");
            $("#header").load("components/header.html");
            $("#footer").load("components/footer.html");
        }
    },
    button: {
        create:{
            html:()=>{
                return `<a href="" class="btn btn-primary">button</a>`;
            },
            el:()=>{
                el = $("<a class='btn btn-primary'>");
                $(el).attr("href","#");
                $(el).text("button");
                return el;
            },
        },
        get:{
            all:()=>{
                return $("a.btn");
            },
        },
        set:{
            text:(el,text)=>{
                el.innerText=text;
            },
        }
    },
    card: {
        create:{
            html:()=>{
                return `
                `
            }
        }
    },
    list: {

    },
    slider: {

    },
    table:{

    }
};

const grid = {

}