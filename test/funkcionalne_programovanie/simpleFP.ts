import { assert } from 'chai'
import { divideSmallestNumber } from '../../src/funkcionalne_programovanie/simpleFP'

describe("Divide smallest number", () => {

  let result: string

  it("should divide smallest number", () => {
    result = divideSmallestNumber([4, 10, 23, 53, 80, 75])
    assert.strictEqual(result, '02')
  })

  it("should divide smallest number", () => {
    result = divideSmallestNumber([30, 36, 48, 53, 80, 75])
    assert.strictEqual(result, '15')
  })

})