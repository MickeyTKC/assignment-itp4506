function addEl(t,e){
    const tar = [...document.querySelectorAll(t)];
    for(i=0;i<tar.length;i++){
        tar[i].innerHTML+=e;
    }
}

