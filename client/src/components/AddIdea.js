import React,{useContext} from 'react'
import {IdeaContext} from '../Context/IdeaContext'
import {useFormState} from 'react-use-form-state'


function AddIdea() {
    let [ideas,setIdeas]=useContext(IdeaContext)
    const [formState,{text,label}]=useFormState()
    console.log(ideas)
    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(formState.values.ideaName)
        let idea={
            name:formState.values.ideaName,
            votes:0
        }
        setIdeas([...ideas,idea])
        e.target.reset()
    }
    return (
        <div id="addform">
            <form onSubmit={onSubmit}>
                <label {...label('ideaName')}>Idea:</label>
                <input {...text('ideaName')}/><br/>
                <button type="submit">+</button>
                 
            </form>
        </div>
    )
}

export default AddIdea
