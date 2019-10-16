// import jQuery before run that script 
const render = {
    site: {
        load: () => {
            $("#nav").load("components/nav.html");
            $("#footer").load("components/footer.html");
        }
    },
    button: {
        create:{
            html:()=>{
                return `<a href="" class="btn btn-primary">button</a>`;
            },
            el:()=>{
                const el = $("<a class='btn btn-primary'>");
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
        create:{
            html:()=>{
                return `
                <div class="slider">
                <img class="slide" src="image/error.jpg"/>
                <a class="prev btn btn-primary">‹</a>
                <a class="next btn btn-primary">›</a>
                </div>
                `
            },
            el:()=>{
                const el = $("<div class='slider'>");
                el.html(`<img class="slide" src="image/error.jpg"/><a class="prev btn btn-primary">‹</a><a class="next btn btn-primary" >›</a>`);
                return el;
            }
        },
        slides:{
            cur:0,
            src:["image/error.jpg"],
        },
        get:{
            all:()=>{
                return $(".slider");
            }
        },
        set:{
            images:function(el,slides){
                let slider = [...$(el)][0];
                slider.current = 0;
                slider.slides = slides;
                const prev= $(el).find(".prev");
                const next= $(el).find(".next");
                prev.click(function(){
                    const slide = $(this).parent().find(".slide");
                    slider.current--;
                    if(slider.current<0){
                        slider.current = slider.slides.length-1
                    }
                    slide.attr("src",slider.slides[slider.current])
                })
                next.click(function(){
                    const slide = $(this).parent().find(".slide");
                    slider.current++;
                    if(slider.current>=slider.slides.length){
                        slider.current = 0
                    }
                    slide.attr("src",slider.slides[slider.current])
                })
            }
        }
    },
    table:{

    }
};

const grid = {

}