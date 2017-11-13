import { assert } from 'chai'
import { upperCaseIfNotStartsWithNumber } from '../../src/funkcionalne_programovanie/objectMap'

describe("Upper case if not starts with number", () => {

  let result

  const person: object = {
    'firstName': 'John',
    'lastName': 'Doe',
    'height': '185 cm',
    'kids': '2 sons',
    'from': 'Philadelphia'
  }

  it("should return remapped object with modified values", () => {

    result = upperCaseIfNotStartsWithNumber(person)
    assert.deepEqual(result, {
      'firstName': 'JOHN',
      'lastName': 'DOE',
      'height': '185 cm',
      'kids': '2 sons',
      'from': 'PHILADELPHIA'
    })
  })

  it("should not mutate input object", () => {
    result = upperCaseIfNotStartsWithNumber(person)
    assert.notDeepEqual(result, person)
  })
})