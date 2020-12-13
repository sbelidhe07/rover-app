import React from 'react';
import './rover.css';
export default class ProductTableRow extends React.Component{
 render(){
  console.log()
  return (
    <tr>
      <td>{this.props.product.name}</td>
      <td>{this.props.product.unit}</td>
      <td>{this.props.product.priority}</td>
      <td>{this.props.product.category}</td>
      <td className='editButton'>edit</td>
    </tr>
  );
}

}
