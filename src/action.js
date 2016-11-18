import moment from 'moment'

export const DataToList = (data) => {
  const tmp = []
  data.map((d) => {
    tmp.push(d['名称'] + '-' + d['教师'] + '-' + d['楼'] + '号楼' + '-' + d['房间'])
  })
  return tmp
}

export const isDate = () => {
  const hours = moment().hour()
  var jie = 0
  if (hours < 10) jie = 1
  if (hours >= 10 && hours <= 12) jie = 2
  if (hours > 12 && hours < 15) jie = 3
  if (hours >= 15 && hours < 17) jie = 4
  if (hours >= 17 && hours < 20) jie = 5
  if (hours >= 20) jie = 6
  return jie.toString()
}

export const week = () => {
  return moment().format('YYYY-MM-DD')
}
export const xinqi = () => {
  return moment().day() === 0 ? '7' : moment().day().toString()
}
export const zhou = () => {
  return Math.ceil((moment().dayOfYear() - moment('2016-9-4').dayOfYear()) / 7)
}
