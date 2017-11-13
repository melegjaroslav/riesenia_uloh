import { fromJS, List, Iterable } from 'immutable'

const findMissing = (sortedList: Iterable<number, List<any>>, key: number): number => {

  //NOTE: if list has only one element
  if (key + 1 === sortedList.count()) return 0;

  //NOTE: set current
  let current = sortedList.get(key);

  //NOTE: if length of next is greater than one, compared to current
  if (sortedList.get(key + 1).count() - current.count() !== 1) {
    //NOTE: return length of missing list
    return current.count() + 1
  }
  //NOTE: test next value
  return findMissing(sortedList, key + 1);
}

export const getLengthOfMissingArray = (arrayOfArrays: any[]): number => {

  //NOTE: return list of lists from array of arrays
  const listOfLists: List<any> = fromJS(arrayOfArrays)

  // //NOTE: if list contains null as element
  const hasNull: boolean = !!listOfLists.filter(x => x === null).count()
  if(hasNull) return 0

  //NOTE: sort the list
  const sortedList: Iterable<number, List<any>> = listOfLists.sort((a: List<any>, b: List<any>) => {
    return a.count() - b.count()
  })

  // //NOTE: if list in list with length of 1 is missing
  if (sortedList.get(0).count() !== 1)return 0

  //NOTE: find missing list length
  const result = findMissing(sortedList, 0)

  return result
}

