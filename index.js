const express = require('express')

const app = express()

app.get('/', (req, res) => res.json('Root call successful!'))

app.listen(5001, ()=> { console.log('This seems to be up & running!') })