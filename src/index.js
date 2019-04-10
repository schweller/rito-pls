const TheGrab = require('./grab')

const grab = new TheGrab({
  token: `RGAPI-08904263-20b9-4b3b-8040-caa93131828b`
})

// grab.getSummoner(`TheSunda`)
//   .then((response) => {
//     console.log(response.data)
//     return response.data
//   })

// grab.getMatchList(`wkNDZXdy8Za2CIR7MHXRk54EVI_V0L6z4EWtYtZ79NQZRL8`)
//   .then((response) => {
//     console.log(response.data)
//     return response.data
//   })

// grab.getMatch(`1600784821`)
//   .then((response) => {
//     console.log(response.data)
//     return response.data
//   })

// grab.getMatchTimeline(`1600784821`)
//   .then((response) => {
//     console.log(response.data)
//     return response.data
//   })

// grab.getLeagueStatus()
//   .then(response => {
//     console.log(response.data)
//     return response.data
//   })