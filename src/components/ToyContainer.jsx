import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {


  
  render(){
    
    const toyCards = this.props.toys.map(toy => (
        <ToyCard key={toy.id} toy={toy} removeToy={this.props.removeToy}/>
      ))


    return(
      <div id="toy-collection">
        {toyCards}
      </div>
    );
  }
}

export default ToyContainer;
