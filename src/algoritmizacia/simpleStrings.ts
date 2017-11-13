import { List, fromJS } from 'immutable'

const decipher = (list: List<string>, key: number, result: List<string> = fromJS([])): any => {

  //NOTE: if key is greater than last key 
  if (key === list.count()) return result.join(' ')

  //NOTE: if only one word
  if (list.get(key).length === 1) {
    result = result.push(list.get(key))
    return decipher(list, key + 1, result)
  }

  //NOTE: strip number from string
  const firstLetter: number = parseInt(list.get(key).replace(/[^0-9\.]/g, ''), 10)
  //NOTE: get length of number in string
  const lengthOfFirstLetter: number = firstLetter.toString().length

  //NOTE: get middle part of string
  //NOTE: if words has more than 2 chars
  const middle: string = (list.get(key).length - lengthOfFirstLetter) > 2 ?
    list.get(key).substring(lengthOfFirstLetter + 1, list.get(key).length - 1)
    : ''

  //NOTE: get second letter  
  //NOTE: if words has more than 1 chars
  const secondLetter: string = (list.get(key).length - lengthOfFirstLetter) >= 1 ?
    list.get(key).substring(list.get(key).length - 1)
    : ''

  //NOTE: get last letter
  //NOTE: if words has more than 1 chars
  const lastLetter: string = (list.get(key).length - lengthOfFirstLetter) > 1 ?
    list.get(key).substr(lengthOfFirstLetter, 1)
    : ''

  const decipheredString = `${String.fromCharCode(firstLetter)}${secondLetter}${middle}${lastLetter}`
  //NOTE: add deciphered string to result List
  result = result.push(decipheredString)

  //NOTE: decioher next
  return decipher(list, key + 1, result)
}

export const decipherThis = (str: string): string => {

  let stringList: List<string> = fromJS(str.split(' '))

  return decipher(stringList, 0)
}