import React,{useContext}from 'react'
import {IdeaContext} from '../Context/IdeaContext'
import PieChart from 'react-minimal-pie-chart'
import IdeaDiv from './IdeaDiv'
import '../styles/showpie.css'

function ShowPie() {
    let [ideas,setIdeas]=useContext(IdeaContext)

    let data=ideas.map((idea)=>{
        return {title:idea.name,value:idea.votes,color:idea.hex}
    })

    const displayList=()=>{
        return ideas.map((idea)=>{
            return <IdeaDiv idea={idea}></IdeaDiv>
        })
    }

    return (
        <div id="pietab">
            <div id="piechart">
                <PieChart
                    data={data}
                    style={{
                        height:'45vh'
                    }}
                    label={true}
                    labelPosition={60}
                    labelStyle={{
                        fontFamily: 'sans-serif',
                        fontSize: '5px',
                        fill: '#121212'
                      }}
                      
                      animate={true}
                      animationDuration={500}

                />
                
            </div>
            <div id="idealist">
                      <h2>All the ideas</h2><br/>
                      <ul>
                        {displayList()}
                      </ul>
            </div>
            
        </div>
    )
}


export default ShowPie
