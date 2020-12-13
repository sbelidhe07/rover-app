import React from 'react';
import './rover.css';
import NewItem from './NewItem';
import ProductsTable from './ProductsTable';

export default class RoverAppRouter extends React.Component {
  
  route(active){
    switch(active){
      case 0:
        return <NewItem 
                 inventory={this.props.inventory}
                 formData={this.props.newItemFormData}
                 changeForm={this.props.changeNewItemForm}
                 addNewProduct={this.props.addNewProduct}
                 />;
      case 1:
        return <ProductsTable inventory={this.props.inventory}/>;
      default:
	return <div></div>;
    }
  }
  
  render(){
    return(
      <div className='MyRouter'>
        {this.route(this.props.activeTab)}
      </div>
    );
  }
}

