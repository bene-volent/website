
const express = require('express')
const {readFile} = require("fs")

const app = express()
app.use(express.static('./public'))

const port = process.env.PORT||3000

app.get('/', async (req, res) => {
    readFile('./public/html/index.html','utf-8',(err,html)=>{
        if (err) {
            res.status(500).send("Server Error")
            console.log(err,html);
            return
        }
        res.contentType("html").send(html)
    
    })
    
})

app.listen(port, () => console.log(`Port running on https://localhost:${port}`))