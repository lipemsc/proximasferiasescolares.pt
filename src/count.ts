export const count = (dateString): Array<number> => {
  let countDownDate: number = new Date(dateString).getTime();
  let out: Array<number> = []
  let now: number = new Date().getTime()
  let distance: number = countDownDate - now

  out['days'] = Math.floor(distance / (1000 * 60 * 60 * 24))
  out['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  out['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  out['seconds'] = Math.floor((distance % (1000 * 60)) / 1000)
  
  if(out['hours'] < 10 && out['hours'] >= 0)
    out['hours']="0" + out['hours'];
  
  if(out['minutes'] < 10 && out['minutes'] >= 0)
    out['minutes']="0" + out['minutes'];
  
  if(out['seconds'] < 10 && out['seconds'] >= 0)
    out['seconds']="0" + out['seconds'];

  return out
}
