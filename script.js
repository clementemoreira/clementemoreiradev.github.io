var id = null;
var back = false;
var back1 = false;
var pause = true;
var pos = 0;
var pos1 = 0;
function myMove() {
  console.log(pause);
  if(pause==true){
    pause=false;
  }else{
    pause=true;
  }

  var elem = document.getElementById("myAnimation");

  if(!pause){
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (pos >= 350) {
        back = true;
      }
      if (pos <= 0){
        back = false;
      }

      if (pos1 >= 350) {
        back1 = true;
      }
      if (pos1 <= 0){
        back1 = false;
      }
      
      if(back){
        pos=pos-(60*Math.random());
        if(pos<0){
          pos=0;
        }
        console.log(pos);
        elem.style.top = pos + 'px';
      }else{
        pos=pos+(60*Math.random());
        elem.style.top = pos + 'px';
        if(pos>350){
          pos=350;
        }
      }

      if(back1){
        pos1=pos1-(60*Math.random());
        if(pos1<0){
          pos1=0;
        }
        elem.style.left = pos1 + 'px';
        
      }else{
        pos1=pos1+(60*Math.random());
        if(pos1>350){
          pos1=350;
        }
        elem.style.left = pos1 + 'px';
        
      }


    }
  }else{
    clearInterval(id);
  }
 
}
