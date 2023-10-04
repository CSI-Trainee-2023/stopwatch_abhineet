var h=0;
var m=0;
var s=0;
var c=0;
var button = document.getElementById("start"),
  count = 0;
button.onclick = function() {
  count += 1;
  if(count%2 !=0){
    start();
  }
  else{
    stop();
  }
}
var temp=false;
function start(){
    temp=true;
    document.getElementById("start").innerHTML="Stop";
    stopwatch();
       
}
function lap(){

}
function stop(){
    temp=false;
    document.getElementById("start").innerHTML="Start";

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
