const express = require('express')
const app = express()


app.set('view engine','pug')




app.get('/', (req,res)=>{
    res.send('Nayap Bni!')
})

app.listen(14000, err=>{
    if(err)console.log(err)

    console.log('Server is running on port 14000')
})