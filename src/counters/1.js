const count = (dateString) => {
  // console.log(dateString)
  var countDownDate1 = new Date(dateString).getTime();
  var out = []
    var now = new Date().getTime()
    var distance = countDownDate1 - now
    out['days'] = Math.floor(distance / (1000 * 60 * 60 * 24))
    out['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    out['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    out['seconds'] = Math.floor((distance % (1000 * 60)) / 1000)
    
    if(out['hours'] < 10 && out['hours'] > 0)
      out['hours']="0" + out['hours'];
    
    if(out['minutes'] < 10 && out['minutes'] > 0)
      out['minutes']="0" + out['minutes'];
    
    if(out['seconds'] < 10 && out['seconds'] > 0)
      out['seconds']="0" + out['seconds'];

    return out
}

/* const countEachSecond = () => {
  var x = setInterval(function() {
    count()
  }, 1000);
} */

export default count