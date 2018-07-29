// https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BRL,USD,EUR
var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send({
    brl: 30700,
    usd: 8202.48,
    eur: 7028.28,
  })
})

app.listen(3000)
console.log('Receiving requests on 3000')