import { assert } from 'chai'
import { decipherThis } from '../../src/algoritmizacia/simpleStrings'

describe("Decipher string", () => {

  let result: string

  it("Should return deciphered string", () => {
    result = decipherThis("72olle 103doo 100ya")
    assert.strictEqual(result, "Hello good day")
  })

  it("Should return deciphered string", () => {
    result = decipherThis("82yade 115te 103o")
    assert.strictEqual(result, "Ready set go")
  })

  it("Should return unchanged string", () => {
    result = decipherThis("Y")
    assert.strictEqual(result, "Y")
  })
})