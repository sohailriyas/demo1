const express = require ('express')
const app = express()

app.get ('/test', (req,res) => res.send('2324!!!Hello World/test!!'))
app.listen (4002, () => console.log('Second server ready'))

