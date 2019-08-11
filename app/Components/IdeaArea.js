import React from 'react';
import Idea from './Idea';

function IdeaArea() {

  const style = {
    color: 'red',
    fontSize: 21
  }

  return (
    <div>
      <h2 style={style} >idea area text</h2>
      <Idea />
    </div>
  )
}

export default IdeaArea;