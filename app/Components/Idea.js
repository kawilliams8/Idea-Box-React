import React, {Component} from 'react';

const style = {
  color: 'red',
  fontSize: 21
}

class Idea extends React.Component {
  constructor() {
    super()
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

  }

  render() {
    return (
      <div>
        <h4>IDEA</h4>
        {/* <div class="card" data-id="${ideaInstance.id}">
          <section class="cards__top card--section">
            <div class="cards__top--left" alt="star-rating"></div>
            <div class="cards__top--right" alt="delete-X"></div>
          </section>
          <section class="cards__middle card--section">
            <h3 class="cards__middle--title" id="editable-title" contenteditable="true">${ideaInstance.title}</h3>
            <p class="cards__middle--text" id="editable-body" contenteditable="true">${ideaInstance.body}</p>
          </section>
          <section class="cards__bottom card--section">
            <img class="cards__bottom--left" src="images/upvote.svg">
              <p class="cards__bottom--text">Quality: ${ideaInstance.quality}</p>
              <img class="cards__bottom--right" src="images/downvote.svg">
        </section>
      </div> */}
      </div>
    )
  }
}

export default Idea