const TheGrab = require('../src/grab')

describe('TheGrab', () => {
  describe('constructor', () => {
    test('new instance of TheGrab', () => {
      const grab = new TheGrab({
        token: `mock_token`
      })
      
      expect(typeof grab).toBe('object')
      expect(typeof grab.getSummoner).toBe('function')
      expect(typeof grab.getAPIRoot).toBe('function')
    })
  })

  describe('config', () => {
    test('throws when not passing token', () => {
      const grab = () => {
        new TheGrab({})
      }

      expect(grab).toThrow(Error);
    })

    test('throws when typeof token is not a string', () => {
      const grab = () => {
        new TheGrab({
          token: 1
        })
      }
      
      expect(grab).toThrow(TypeError);
    })
  })
})