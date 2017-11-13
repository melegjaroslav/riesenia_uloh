import { assert } from 'chai'
import { getGenderByOrderType } from '../../src/funkcionalne_programovanie/noifs'

describe("Get gender by order type", () => {

  let result: string

  it("should return gender", () => {
    result = getGenderByOrderType({type: 'vacation', gender: 'F'})
    assert.strictEqual(result, "WOMAN")
  })
  it("should return gender", () => {
    result = getGenderByOrderType({type: 'vacation', gender: 'M'})
    assert.strictEqual(result, "MAN")
  })
  it("should return gender", () => {
    result = getGenderByOrderType({type: 'flight', gender: 'F'})
    assert.strictEqual(result, "FEMALE")
  })
  it("should return gender", () => {
    result = getGenderByOrderType({type: 'flight', gender: 'M'})
    assert.strictEqual(result, "MALE")
  })
  it("should return empty string", () => {
    result = getGenderByOrderType({type: 'flight', gender: ''})
    assert.strictEqual(result, "")
  })
})