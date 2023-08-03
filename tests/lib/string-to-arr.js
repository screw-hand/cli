const assert = require('assert')
const stringToArr = require('../../lib/string-to-arr')
const ncp = require('copy-paste')

describe('stringToArr', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should split the string using the specified character', async () => {
    jest
      .spyOn(ncp, 'copy')
      .mockImplementation((arr, callback) => callback(null))

    const input = 'Hello World'
    const character = ' '
    const expected = ['Hello', 'World']
    const result = await stringToArr(input, character)
    assert.deepStrictEqual(result, expected)
  })

  it('should split the string using the default character when not specified', async () => {
    jest
      .spyOn(ncp, 'copy')
      .mockImplementation((arr, callback) => callback(null))

    const input = 'Hello,World'
    const expected = ['Hello,World']
    const result = await stringToArr(input)
    assert.deepStrictEqual(result, expected)
  })

  it('should not copy the resulting array to clipboard when isCopy is false', async () => {
    const input = 'Hello World'
    const character = ' '
    const isCopy = false
    const expected = ['Hello', 'World']
    const result = await stringToArr(input, character, isCopy)
    assert.deepStrictEqual(result, expected)
  })

  it('should handle error when copying to clipboard', async () => {
    jest
      .spyOn(ncp, 'copy')
      .mockImplementation((arr, callback) => callback(new Error('Test error')))

    const input = 'Hello World'
    const character = ' '
    try {
      await stringToArr(input, character)
      assert.fail('Expected error to be thrown')
    } catch (err) {
      assert.strictEqual(err.message, 'Test error')
    }
  })
})
