const Rito = require('../src/rito')

describe('RitoPls', () => {
  describe('constructor', () => {
    test('new instance of Rito', () => {
      const rito = new Rito({
        token: `mock_token`
      })
      
      expect(typeof rito).toBe('object')
      expect(typeof rito.getSummoner).toBe('function')
      expect(typeof rito.getAPIRoot).toBe('function')
    })
  })

  describe('config', () => {
    test('throws when not passing token', () => {
      const rito = () => {
        new Rito({})
      }

      expect(rito).toThrow(Error);
    })

    test('throws when typeof token is not a string', () => {
      const rito = () => {
        new Rito({
          token: 1
        })
      }
      
      expect(rito).toThrow(TypeError);
    })
  })
})