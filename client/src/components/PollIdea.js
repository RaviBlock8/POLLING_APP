import React,{useContext} from 'react'
import {IdeaContext} from '../Context/IdeaContext'
import {useFormState} from 'react-use-form-state'
import '../styles/pollidea.css'

function PollIdea() {
    const [formState,{select,label}]=useFormState()
    let [ideas,setIdeas]=useContext(IdeaContext)

    const displayOptions=(e)=>{
        return ideas.map((idea)=>{
            return <option value={idea.name} key={idea.id}>{idea.name}</option>
        })
    }


    const onSubmit=(e)=>{
        e.preventDefault()
        
        const newIdeas=ideas.map((idea)=>{
            if(idea.name===formState.values.ideaC){
                idea.votes+=1;
            }
            return idea
        })
        setIdeas(newIdeas)
    }

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


export default PollIdea
