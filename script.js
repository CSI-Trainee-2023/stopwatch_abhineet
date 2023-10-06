var h=0;
const x = document.getElementById("audio1");
const x1 = document.getElementById("audio2");
const img=document.getElementById("screen");
var clear=document.getElementById("clear");
var m=0;
var s=0;
var c=0;
var hl=0;
var ml=0;
var sl=0;
var cl=0;
// function supportLocalStorage(){
//     return typeof(storage)!=='undefined';
// }
var button = document.getElementById("start"),
count = 0;
button.onclick = function() {
  count += 1;
  if(count%2 !=0){
    start();
  }
  else{
    stop();
    document.getElementById("lap").innerHTML="Reset";
  }

}
var temp=false;

var button1 = document.getElementById("lap");
button1.onclick = function() {
  if(temp==true){
    lap();
  }
  else{
    reset();
  } 
clear.onclick=function(){
    clear1();
  }

}
function start(){
    temp=true;
    audio();
    document.getElementById("start").innerHTML="Stop";
    stopwatch();

       
}

function lap(){
    
    
    let list1=document.getElementById("lapCount");
    let item=document.createElement("li");
    item.textContent=h +":"+ m+":"+ s+":" + c;

    list1.appendChild(item);   
    
    // localStorage
//   localStorage.setItem('item',JSON.stringify(item.innerHTML));

}




function clear1(){
    document.getElementById("lapCount").innerHTML="";
}


function stop(){
    temp=false;
    document.getElementById("start").innerHTML="Resume";
    

}

function reset(){
    temp=false;
    h=0;
    m=0;
    s=0;
    c=0;
    document.getElementById("msec").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    document.getElementById("lap").innerHTML="Lap";
    audio1()
    document.getElementById("start").innerHTML="Start";

}
function audio(){
    x.currentTime=0;
    x.play();
}
function audio1(){
    x1.currentTime=0;
    x1.play();
}

function stopwatch(){
    
    if(temp==true){
        c+=1;
        if(c>99){
            s+=1;
            c=0;
        }
        if(s>60){
            m+=1;
            s=0;
            c=0;
        }
        if(m>60){
            h+=1;
            s=0;
            m=0;
            c=0;
        }
        var hstring=h;
        var mstring=m;
        var sstring=s;
        var cstring=c;
        if(h<10){
            hstring="0"+ hstring;
        }
        if(m<10){
            mstring="0"+ mstring;
        }
        if(s<10){
            sstring="0"+ sstring;
        }
        if(c<10){
            cstring="0"+ cstring;
        }
        document.getElementById("msec").innerHTML=cstring;
        document.getElementById("sec").innerHTML=sstring;
        document.getElementById("min").innerHTML=mstring;
        document.getElementById("hr").innerHTML=hstring;
    
        setTimeout("stopwatch()",10)
    }
    

}
document.addEventListener('keydown',(event)=>{
    event.preventDefault();
    if(event.ctrlKey){
        if(event.key=== 's') start();
        if(event.key=== 'x') stop();
        if(event.key=== 'r') reset();
        if(event.key=== 'l') lap();

    }
});

