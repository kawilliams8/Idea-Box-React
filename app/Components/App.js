import React from 'react';
import Idea from './Idea';
import Sidebar from './Sidebar';
import Form from './Form';
import IdeaArea from './IdeaArea';

function App() {

  return (
    <div>
      <h1>IdeaBox Redux</h1>
      <Sidebar />
      <Form />
      <IdeaArea />
    </div>
  )
}

export default App;