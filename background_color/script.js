let  i=0;

function changecolor(){
    var color =["red","green","blue","yellow","purple","black"];
    document.getElementsByTagName("body")[0].style.background = color[i++]
    if(i>color.length-1){
        i=0;
    }
}
