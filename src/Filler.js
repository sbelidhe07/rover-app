import React from 'react';
import './rover.css';

export default class Filler extends React.Component
{
render(){
  console.log(this.props.level);
  return (<div className="filler" style={{ width: `${this.props.level}%` }} />);
}

}
