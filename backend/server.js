const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const port = 4000

app.post("/data" , (req , res) => {
    let formdata = req.body
    console.log(formdata);
    
    res.send(formdata)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


