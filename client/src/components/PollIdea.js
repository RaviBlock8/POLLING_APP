import React,{useContext,useState} from 'react'
import {IdeaContext} from '../Context/IdeaContext'
import {useFormState} from 'react-use-form-state'
import useFetch from 'use-http'
import '../styles/pollidea.css'

function PollIdea() {
    
    let [done,setDone]=useState(false)
    console.log(`done :${done}`)
    const [formState,{select}]=useFormState()
    let [ideas,setIdeas]=useContext(IdeaContext)
    const [req,res]=useFetch('http://localhost:5001')

    const displayOptions=(e)=>{
        return ideas.map((idea)=>{
            return <option value={idea.name} key={idea.id}>{idea.name}</option>
        })
    }


    const onSubmit=(e)=>{
        e.preventDefault()

        //doing validation if wrong option is selected
        if(formState.values.ideaC!=''){
            const newIdeas=ideas.map((idea)=>{
                if(idea.name===formState.values.ideaC){
                    idea.votes+=1;
    
                    //sending request to backend to tell which idea i'am voting for
                    req.post('/vote',{
                        name:formState.values.ideaC,
                        vote:idea.votes
                    }).then((resp)=>{
                        //we want to set values after transaction is processed in blockchain
                        
                    })
                    setIdeas(newIdeas)
                    setDone(true)
                    
                }
                return idea
            })
            
            
        }else{
            e.target.reset()
        }
        
        
       
    }

    if(done){
        return (
            <div id="pollidea">
                <h1>Thankss!!!</h1>
            </div>
        )
    }else{
        return (
            <div id="pollidea">
                <form onSubmit={onSubmit}>
                    <select {...select('ideaC')}>
                        <option value={''} key='select idea'>Select Idea</option>
                        {displayOptions()}
                    </select><br/>
                    <button type="submit">Vote</button>
                </form>
                
            </div>
        )

    }

    
}


export default PollIdea
