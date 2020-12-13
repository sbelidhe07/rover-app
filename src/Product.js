import React from 'react';
import './rover.css';

export default class Product extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: props.product.category,
      name: props.product.name,
      unit: props.product.unit,
      priority: props.product.priority,
    }
  }
  
  componentWillReceiveProps(nextProps){

   if(nextProps.product.category !== this.state.category){
      this.setState({category: nextProps.product.category});
    }

    if(nextProps.product.name !== this.state.name){
      this.setState({name: nextProps.product.name});
    }
    if(nextProps.product.unit !== this.state.unit){
      this.setState({unit: nextProps.product.unit});
    }
    if(nextProps.product.priority !== this.state.priority){
      this.setState({priority: nextProps.product.priority});
    }
  }
  
  render(){
    return(
      <div className='Product'>
        <p className='name'>{this.state.name}</p>
        <p className='unit'>{this.state.unit}</p>
        <p className='priority'>{this.state.priority}</p>
        <p className='category'>Products &#187; {this.state.category}</p>
      </div>
    );
  }
} 

