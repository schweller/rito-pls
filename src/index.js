const TheGrab = require('./grab')

const grab = new TheGrab({
  token: `RGAPI-92eeba52-888d-41c4-a959-942c538a92e5`
})

grab.getSummoner(`TheSunda`)
  .then((response) => {
    console.log(response.data)
    return response.data
  })