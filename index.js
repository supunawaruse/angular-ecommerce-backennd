const express = require('express')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin: '*',
    methods: ['POST', 'GET', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders:
      'Content-Type ,Authorization, Origin ,X-Requested-With, Accept',
  })
)

app.use(express.json())

app.listen(3000, function () {
  console.log('Started application on port %d', 3000)
})
