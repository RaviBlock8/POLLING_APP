const express=require('express')
const app=express()
const requestip=require('request-ip')
const Web3=require('web3')
const bodyparser=require('body-parser')
const cors=require('cors')
const abi=require('./abi')
const web3=new Web3((new Web3.providers.HttpProvider("http://127.0.0.1:7545")))

let contractAddress="0xe30A3d7ABF80EdC58753cdDA18B9e6feed1e08b7"

const contract=new web3.eth.Contract(abi,contractAddress)

app.use(requestip.mw())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

app.get('/',(req,res)=>{
    console.log(req.clientIp)
    res.send('hello')
})

app.post('/vote',(req,res)=>{
    console.log('receiving request')
    // res.send('working')
    console.log(req.body.name)
    console.log(req.body.vote)
    let idea=req.body.name
    
    
    contract.methods.giveVote(idea).send({from:"0x1829EF922942198C25cC1013981033Cd70DFA8a1"}).then(
        (err,res)=>{
            if(err){
                console.log(err)
            }else{
                console.log(res)
                res.send('added')
            }
        }
    )
    
    // res.redirect('/')
})

const port=process.env.PORT||5001

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`port:${port}`)
    }
})

