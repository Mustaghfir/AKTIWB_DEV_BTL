const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Mustaghfir Hussain Najaf')
  // res.send('Mustaghfir is learning Web Development Full Stack Course from AKTI')
});

app.get('/learn', (req, res) => {
  // res.send('Mustaghfir Hussain Najaf')
  res.send('Mustaghfir is learning Web Development Full Stack Course from AKTI')
})

app.listen(port, () => {
  console.log(`Example app listening on ports ${port}`)
  
})
