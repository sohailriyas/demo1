const express = require ('express')
const app = express()

app.get ('/test', (req,res) => res.send('!!Hello World/test!!'))
app.listen (4001, () => console.log('Second server ready'))

