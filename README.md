# Rito pls

![Build Status](https://travis-ci.org/schweller/rito-pls.svg?branch=master)

`Rito pls`<sup>[1](#ritopls)</sup> is a simple and JavaScript wrapper for the Riot Games API.

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

## `const rito = new Rito(config)`

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

# References

<a name="ritopls">1 -</a> <a href="https://www.urbandictionary.com/define.php?term=Rito">What does **"Rito, please"** means?</a>
