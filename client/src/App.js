import React from 'react';
import {IdeaProvider} from './Context/IdeaContext'
import AddIdea from './components/AddIdea'
import PollIdea from './components/PollIdea'
import ShowPie from './components/ShowPie'
import TestPost from './components/TestPost'
import './App.css';

function App() {
  return (
    <div id="app">
      <IdeaProvider>
          <div id="dataDeal">
            <PollIdea></PollIdea>
             {/* <AddIdea></AddIdea> */}
            

          </div>
          
          <ShowPie></ShowPie>
      </IdeaProvider>
      

    </div>
  );
}

export default App;
