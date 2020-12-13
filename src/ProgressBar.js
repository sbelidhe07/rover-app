import React from 'react';
import './rover.css';
import Filler from './Filler';

export default class ProgressBar extends React.Component{
 render(){
  console.log(this.props.level);
  return (
      <div className="progressbar">
        <Filler level={this.props.level} />
      </div>
    );
}
}

