export const DataToList = (data) => {
  const tmp = []
  data.map((d) => {
    tmp.push(d['名称'] + '-' + d['教师'] + '-' + d['楼'] + '号楼' + '-' + d['房间'])
  })
  return tmp
}
