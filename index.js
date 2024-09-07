const express = require('express')
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const { getAccessToken } = require('./common');
dotenv.config()
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send('Firebase token app')
})
app.post('/token',async (req,res)=>{
    try {
        console.log(req.body)
        const token = await getAccessToken(req.body.clientEmail,req.body.privateKey)
        res.status(200).json({token})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})

app.listen(PORT,()=>{
    console.log(`app running on PORT: ${PORT}`)
})