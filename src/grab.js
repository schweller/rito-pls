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

  getRegion() {
    return this._region
  }

  getAPIRoot() {
    return `https://${this._region}.api.riotgames.com`
  }

  /**
   * Get a summoner by a summoner name
   * @param {string} summonerName Summoner Name 
   */
  getSummoner(summonerName) {
    return this.makeRequest(`/lol/summoner/v4/summoners/by-name/${summonerName}`)
  }

  /**
   * Get matchlist for games played on a given account ID 
   * @param {string} id Encrypted account ID 
   */
  getMatchList(id) {
    return this.makeRequest(`/lol/match/v4/matchlists/by-account/${id}`)
  } 

  /**
   * Get match by match ID
   * @param {string} id match ID
   */
  getMatch(id) {
    return this.makeRequest(`/lol/match/v4/matches/${id}`)
  }

  /**
   * Get match timeline by match ID
   * @param {string} id match ID 
   */
  getMatchTimeline(id) {
    return this.makeRequest(`/lol/match/v4/timelines/by-match/${id}`)
  }

  /**
   * Get League of Legends servers status for any `this._region`
   */
  getLeagueStatus() {
    return this.makeRequest(`/lol/status/v3/shard-data`)
  }

  makeRequest(url) {
    const root = this.getAPIRoot()
    return axios({
      method: `get`,
      url: `${root}${url}`,
      headers: {
        "X-Riot-Token": this._token 
      }
    })
  }
}

module.exports = TheGrab
