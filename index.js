const express = require('express')
const app = express()
const port = 1516
let counter = 0

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello Clare!'))

app.get('/counter', function (req, res) {
	counter = counter + 1;
  res.send("counter " + counter);
})

app.get('/date', function (req, res) {
	let d = new Date();
	console.log(d);
  res.send("Date " + d);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
