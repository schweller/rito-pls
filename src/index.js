const TheGrab = require('./grab')

const grab = new TheGrab({
  token: `RGAPI-92eeba52-888d-41c4-a959-942c538a92e5`
})

// grab.getSummoner(`TheSunda`)
//   .then((response) => {
//     console.log(response.data)
//     return response.data
//   })

grab.getMatchList(`wkNDZXdy8Za2CIR7MHXRk54EVI_V0L6z4EWtYtZ79NQZRL8`)
  .then((response) => {
    console.log(response.data)
    return response.data
  })