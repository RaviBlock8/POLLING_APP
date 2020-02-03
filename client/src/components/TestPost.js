import React from 'react'
import useFetch from 'use-http'

function TestPost() {
    let [req,res]=useFetch('http://localhost:5001')

    const onSubmit=async (e)=>{
        e.preventDefault()
        let name=req.post('/vote',{
            name:"ravi"
        })
        console.log('made request')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <button type="submit">Make request</button>
            </form>
        </div>
    )
}


export default TestPost
