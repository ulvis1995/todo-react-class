export function getLocalDate (str) {
  return new Date(str).toLocaleDateString()
}

export function getLocalTime (str) {
  return new Date(str).toLocaleTimeString('ru-arab', 
      {hour: '2-digit', minute: '2-digit'})
}

export function getTimeCreate (str) {
  return `${getLocalDate(str)} ${getLocalTime(str)}`
}

export function inputTest (date) {
  let min = new Date ().valueOf()
  let inputtest = new Date (date).valueOf()
  let max = new Date ('2030-12-31').valueOf()
  if ((inputtest < min) || (inputtest > max)) {
      return new Date ().toISOString().split('T')[0]
  } else {
      return date
  }
}