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

## `const grab = new TheGrab(config)`

Creates a new instance of `TheGrab` with the provided configuration

```javascript
const TheGrab = require('./grab')

const config = {
  token: `...`, //required parameter
  region: `...` //optional - defaults to "br1"
}

const grab = new TheGrab(config)

//or

const grab = new TheGrab({
  token: `...`, //required parameter
  region: `...` //optional - defaults to "br1"
})
```

## `grab.getSummoner(summonerName)`

Retrieve summoner information by summoner name.
Returns a promise.

**summonerName**

Summoner Name as a string.

```javascript
grab.getSummoner(`TheSunda`)
  .then((response) => {
    //...
  })
  .catch((error) => {
    //...
  })
```

# Contributing

TBD

