// import jQuery before run that script 
const render = {
    site: {
        load: () => {
            $("body").prepend($("<div id='nav'>"))
            $("body").append($("<div id='footer'>"))
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
                <div class="card">
                <div class="card-body">
                <h4 class="card-title">Card-Title</h4>
                <p class="card-text">Card-Content</p>
                </div>
                <div class="card-footer">
                <a href="#" class="btn btn-primary">Card-Button</a>
                </div>
                </div>
                `;
            },
            el:()=>{
                const el = $("<div class='card'>");
                el.html(`<div class="card-body"><h4 class="card-title">Card-Title</h4><p class="card-text">Card-Content</p></div><div class="card-footer"><a href="#" class="btn btn-primary">Card-Button</a></div>`);
                return el;
            }
        },
        get:{
            all:()=>{
                return $(".card");
            }
        },
        set:{
            title:(el,content)=>{
                const title = $(el).find(".card-title");
                title.html(content);
            },
            content:(el,content)=>{
                const body = $(el).find(".card-text");
                body.html(content);
            },
            footer:(el,content)=>{
                const footer = $(el).find(".card-footer");
                footer.html(content);
            },
            pattern:(el,patterns)=>{
                const card = $(el);
                card.attr("class",patterns);
            },
        }

    },
    list: {
        create:{
            html:()=>{
                return `
                <div class="list-group">
                <a class="list-group-item">List Item 1</a>
                <a class="list-group-item">List Item 2</a>
                </div>
                `;
            },
            el:()=>{
                const el = $("<div class=\"list-group\">");
                el.html(`<a class="list-group-item">List Item 1</a>`);
                return el;
            }
        },
        get:{
            all:()=>{
                return $(".list-group");
            }
        },
        set:{
            item:(el,items)=>{
                const list = $(el);
                list.html(items.map(v=>"<a class=\"list-group-item\">"+v+"</a>").join(""))
            }
        }
    },
    slider: {
        create:{
            html:()=>{
                return `
                <div class="slider">
                <img class="slide" src="image/error.jpg"/>
                <a class="prev btn btn-secondary">‹</a>
                <a class="next btn btn-secondary">›</a>
                </div>
                `
            },
            el:()=>{
                const el = $("<div class='slider'>");
                el.html(`<img class="slide" src="image/error.jpg"/><a class="prev btn btn-secondary">‹</a><a class="next btn btn-secondary" >›</a>`);
                return el;
            }
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
                $(el).find(".slide").attr("src",slider.slides[0]);
            }
        }
    },
    table:{
        create:{
            html:()=>{
                return `
                <table class="table">
                <thead>
                <tr>
                <th>Title-1</th>
                <th>Title-2</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>item-1</td>
		        <td>item-2</td>
	            </tr>
                <tr>
                <td>item-1</td>
		        <td>item-2</td>
	            </tr>
                </tbody>
                </table>
                `
            },
            el:()=>{
                const el = $("<table class=\"table\">");
                el.html(`<thead><tr><th>Title-1</th><th>Title-2</th></tr></thead><tbody><tr><td>item-1</td><td>item-2</td></tr><tr><td>item-1</td><td>item-2</td></tr></tbody>`);
                return el;
            }
        },
        get:{
            all:()=>{
                return $(".table");
            }
        },
        set:{
            title:(el,titles)=>{
                const th = $(el).find("thead");
                th.html(titles.map(v=>"<th>"+v+"</th>"))
            },
            content:(el,contents)=>{
                const tb = $(el).find("tbody");
                tb.html(contents.map((v)=>"<tr>"+v.map((v)=>"<td>"+v+"</td>")+"</tr>"))
            }
        }
    }
};
