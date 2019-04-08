const axios = require('axios')

class TheGrab {
  constructor(options) {
    this._token = options.token
    this._region = options.region || `br1`
    this.apiRoot = `https://${this._region}.api.riotgames.com`
  }

  setToken() {
    this._token = token
  }

  getToken() {
    return this._token
  }

  setRegion(region) {
    this._region = region
  }

  getRegion(region) {
    return this._region
  }

  /**
   * Get a summoner by a summoner name
   * @param {string} summonerName 
   */
  getSummoner(summonerName) {
    return this.makeRequest(`/lol/summoner/v4/summoners/by-name/${summonerName}`)
  }

  makeRequest(url) {
    return axios({
      method: `get`,
      url: `${this.apiRoot}${url}`,
      headers: {
        "X-Riot-Token": this._token 
      }
    })
  }
}

module.exports = TheGrab
