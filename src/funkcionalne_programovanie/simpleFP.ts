export const divideSmallestNumber = (numbers: number[]): string => {

  //NOTE: sort array
  numbers = numbers.sort((a, b) => a - b)

  //NOTE: filter event numbers
  numbers = numbers.filter((num) => num % 2 === 0)

  //NOTE: divide smallest even number with 2
  const dividedNumber = numbers[0] / 2

  return dividedNumber < 10 ? `0${dividedNumber}`: `${dividedNumber}`
}