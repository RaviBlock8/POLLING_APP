const express=require('express')
const app=express()
// const web=require('web3')
const bodyparser=require('body-parser')
const cors=require('cors')


app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello')
})

app.post('/vote',(req,res)=>{
    console.log('receiving request')
    // res.send('working')
    console.log(req.body.name)
    console.log(req.body.vote)
    res.redirect('/')
})

const port=process.env.PORT||5001

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`port:${port}`)
    }
})

