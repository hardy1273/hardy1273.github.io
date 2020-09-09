var i=0;
var images=[];
var time=3000;

images[0]=
images[1]=
images[2]=

function changeImage(){
    document.slide.src=images[i]
    if(i<images.length-1){
        i++

    }else {
        i=0
    }
    setTimeout("changeImage()",time);
}

window.onload=changeImage;