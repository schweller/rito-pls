# The Grab

A Node.JS wrapper for the Riot Games API.

# Installing
```
npm install the-grab
```

# Usage 
```javascript
const TheGrab = require('./grab')

const grab = new TheGrab({
  token: `...`,
  region: `...` //optional - defaults to "br1"
})

grab
  .getSummoner(`TheSunda`)
  .then(({data}) => {
    console.log(data)
  })
```

# API

TBD

# Contributing

TBD

