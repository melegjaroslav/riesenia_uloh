export const upperCaseIfNotStartsWithNumber = (object: any): any => {

  let result: any = {}

  Object.keys(object).map(key => {
  
    result[key] = !+object[key].substr(0, 1) ? object[key].toUpperCase()
      : object[key]
  })

  return result
};