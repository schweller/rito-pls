# Rito pls

![Build Status](https://travis-ci.org/schweller/the-grab.svg?branch=master)

A JavaScript wrapper for the Riot Games API.

# Installing
```
npm install rito-please
```

# Usage 
```javascript
const Rito = require('rito')

const rito = new Rito({
  token: `...`,
  region: `...` //optional - defaults to "br1"
})

rito
  .getSummoner(`TheSunda`)
  .then(({data}) => {
    console.log(data)
  })
```

# API

## `const grab = new Rito(config)`

Creates a new instance of `Rito` with the provided configuration

```javascript
const Rito = require('rito')

const config = {
  token: `...`, //required parameter
  region: `...` //optional - defaults to "br1"
}

const rito = new Rito(config)

//or

const rito = new Rito({
  token: `...`, //required parameter
  region: `...` //optional - defaults to "br1"
})
```

## `rito.getSummoner(summonerName)`

Retrieve summoner information by summoner name.
Returns a promise.

**summonerName**

Summoner Name as a string.

```javascript
rito.getSummoner(`TheSunda`)
  .then((response) => {
    //...
  })
  .catch((error) => {
    //...
  })
```

# Contributing

TBD

