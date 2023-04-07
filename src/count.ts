export const count = (dateString: string): Map<string, any> => {
  let countDownDate: number = new Date(dateString).getTime();
  let out: Map<string, any> = new Map<string, any>()
  let now: number = new Date().getTime()
  let distance: number = countDownDate - now

  out.set('days', Math.floor(distance / (1000 * 60 * 60 * 24)))
  out.set('hours', Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  out.set('minutes', Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
  out.set('seconds', Math.floor((distance % (1000 * 60)) / 1000))
  
  if(out.get('hours') < 10 && out.get('hours') >= 0)
    out.set('hours', "0" + out.get('hours'));
  
  if(out.get('minutes') < 10 && out.get('minutes') >= 0)
    out.set('minutes', "0" + out.get('minutes'));
  
  if(out.get('seconds') < 10 && out.get('seconds') >= 0)
    out.set('seconds', "0" + out.get('seconds'));

  return out
}
