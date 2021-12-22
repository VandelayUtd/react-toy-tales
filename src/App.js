import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  
  componentDidMount(){
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(toyData => {
        this.setState({toys: toyData})
      })
  }

  removeToy = (id) => {
  console.log(id)
    const newToys = this.state.toys.filter( toy => toy.id !== id )
    this.setState({toys: newToys})
  }
  
  addToy = (toy) => {
    console.log(toy)
    this.setState({
      ...this.state,
      toys: [...this.state.toys, toy]
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }



  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} removeToy={this.removeToy}/>
      </>
    );
  }

}

export default App;
