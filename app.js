const express = require('express')

const app = express()

var port = process.env.PORT || 5001;

app.get('/', (req, res) => res.json('Root call successful!'))

app.listen(port, ()=> { console.log('This seems to be up & running!') })