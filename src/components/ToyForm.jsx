import React, { Component } from 'react';

class ToyForm extends Component {

  state = { 
    name: "",
    image: "",
    likes: 0
  }

  handleChange = (e) => {
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => { 
    e.preventDefault() 
    const newToy = this.state
    this.props.addToy(newToy)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.handleChange} value={this.state.name} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.handleChange} value={this.state.image} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
