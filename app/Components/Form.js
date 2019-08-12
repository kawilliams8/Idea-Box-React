import React, {Component} from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      title: "",
      body: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event) {
    this.setState({
      id: Date.now(),
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={this.handleChange}/>
          <label htmlFor="body">Body</label>
          <textarea type="text" name="body" id="body" onChange={this.handleChange}></textarea>
          <button type="button">Save</button>
          <input type="text" id="searchbar" placeholder="Search ideas"/>
        </form>
      </div>
    )
  }
}

export default Form;