const express = require('express')
const app = express()


app.set('view engine','pug')


app.use('/static', express.static('public'))


// local host
app.get('/', (req,res)=>{
    res.render('home')
})

app.listen(14000, err=>{
    if(err)console.log(err)

    console.log('Server is running on port 14000')
})