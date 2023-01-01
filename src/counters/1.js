const count = () => {
  var countDownDate1 = new Date("Jan 1, 2023 01:30:00").getTime();
  var out = []
    var now = new Date().getTime()
    var distance = countDownDate1 - now
    out['days'] = Math.floor(distance / (1000 * 60 * 60 * 24))
    out['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    out['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    out['seconds'] = Math.floor((distance % (1000 * 60)) / 1000)
    
    if(out['hours']<10)
      out['hours']="0" + out['hours'];
    
    if(out['minutes']<10)
      out['minutes']="0" + out['minutes'];
    
    if(out['seconds']<10)
      out['seconds']="0" + out['seconds'];
    
      /* if(out['days']===1)
      out['day'] = out['days'] + " dia";
    else
      out['day'] = out['days'] + " dias";
    //document.getElementById("horas1").innerHTML = out['hours'] + ":" + out['minutes'] + ":" + out['seconds'];
    if (distance < 0) {
      clearInterval(x);
      out['day'] = "FÉRIAS!!!!";
      //document.getElementById("horas1").innerHTML = "";
    } */

    return out
}

/* const countEachSecond = () => {
  var x = setInterval(function() {
    count()
  }, 1000);
} */

export default count