import { assert } from 'chai'
import { getLengthOfMissingArray } from '../../src/algoritmizacia/simpleArrays'


describe("Get length of missing array", () => {

  let result: number

  it("should return 0 if first is missing", () => {
    result = getLengthOfMissingArray([
      [1, 2],
      [4, 5, 1, 1],
      [5, 6, 7, 8, 9]
    ])
    assert.strictEqual(result, 0)
  })

  it("should return 0 if no length", () => {
    result = getLengthOfMissingArray([
      []
    ])
    assert.strictEqual(result, 0)
  })

  it("should return 0 if contains null", () => {
    result = getLengthOfMissingArray([
      [1, 2],
      null,
      [4, 5, 1, 1],
      [5, 6, 7, 8, 9]
    ])
    assert.strictEqual(result, 0)
  })

  it("should return length of missing array", () => {
    result = getLengthOfMissingArray([
      [1, 2],
      [4, 5, 1, 1],
      [1],
      [5, 6, 7, 8, 9]
    ])
    assert.strictEqual(result, 3)
  })

  it("should return length of missing array", () => {
    result = getLengthOfMissingArray([
      [1, 2],
      [4, 5, 1, 1],
      [1],
      [5, 6, 7, 8, 9]
    ])
    assert.strictEqual(result, 3)
  })

  it("should return length of missing array", () => {
    result = getLengthOfMissingArray([
      [5, 2, 9],
      [4, 5, 1, 1],
      [1],
      [5, 6, 7, 8, 9]
    ])
    assert.strictEqual(result, 2)
  })

  it("should return length of missing array", () => {
    result = getLengthOfMissingArray([
      [null], [null, null, null]
    ])
    assert.strictEqual(result, 2)
  })

  it("should return length of missing array", () => {
    result = getLengthOfMissingArray([
      ['a', 'a', 'a'],
      ['a', 'a'],
      ['a', 'a', 'a', 'a'],
      ['a'],
      ['a', 'a', 'a', 'a', 'a', 'a']
    ])
    assert.strictEqual(result, 5)
  })
})