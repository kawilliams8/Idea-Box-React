import React from 'react';
import Idea from './Idea';
import Sidebar from './Sidebar';
import Form from './Form';
import IdeaArea from './IdeaArea';

function App() {
const style={
  color: 'red'
}

  return (
    <div>
      <h1 style={style}>Hello World!</h1>
      <Sidebar />
      <Form />
      <IdeaArea />
    </div>
  )
}

export default App;