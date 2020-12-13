import React from 'react';
import './rover.css';
import ProductTableRow from './ProductTableRow';

export default class ProductsTable extends React.Component {


  
  renderTableRows(inventory){
    const categoryKeys = Object.keys(inventory.categories);
    const CKLength = categoryKeys.length;
    let listOfProducts = [];
    
    for(let i = 0; i<CKLength; i++){
      let category = categoryKeys[i];
      listOfProducts = listOfProducts.concat(inventory.categories[category]);
    }

    let LOPlength = listOfProducts.length;
    if( LOPlength === 0){
      return <div><p>There are currently no items in the inventory</p></div>
    } else {
      let rows = [
       <tr>
        <th>Name</th>
        <th>Unit</th>
        <th>Priority</th>
        <th>Category</th>
        <th></th>
      </tr>
      ];
      
      for(let i = 0; i<LOPlength; i++){
        rows.push(<ProductTableRow product={listOfProducts[i]}/>);
      }
      
      return rows;
    }
  }
  
  render(){
    return(
      <div className='Products'>
        <h1>Available Products List</h1>
        <table className='productTable'>
          {this.renderTableRows(this.props.inventory)}
        </table>
      </div>
    );
  }
  
}

