import React from 'react';
import './rover.css';
import RoverAppRouter from './RoverAppRouter';
import Sidebar from './Sidebar';

export default class InventoryManagement extends React.Component{
  constructor(){
    super();
    this.state = {
      activeTab:-1,
      inventory: {
        categories:{
          water:[],
          rock:[],
          storm:[]
        }
      },
      newItemForm: {
        category: '',
        name: '',
        unit: '',
        priority: ''
      }
    };
  }



  changeActiveTab(index){
    this.setState({activeTab: index});
  }
  
  changeNewItemForm(formData){
    this.setState({newItemForm: formData});
  }
  
  addNewProduct(product){
    
    this.setState({newItemForm: {category: '',name: '',unit: '',priority: ''}});
    
    const decapitalize = (string) => {
      return string.charAt(0).toLowerCase() + string.slice(1);
    }

    product.category = decapitalize(product.category);
    let inventory = this.state.inventory;
    inventory.categories[product.category].push(product);
   
    

    this.setState({inventory:inventory});
  }
  
  render(){
    return(
      <div className='InventoryManagement'>
       <center>
        <h2 className='header'><i className="icon-th-list"></i> Inventory Management</h2>
        <div className='app-body'>
         <Sidebar activeTab={this.state.activeTab} changeTab={this.changeActiveTab.bind(this)}/>
          <RoverAppRouter 
            activeTab={this.state.activeTab} 
            inventory={this.state.inventory}
            newItemFormData={this.state.newItemForm}
            changeNewItemForm={this.changeNewItemForm.bind(this)}
            addNewProduct={this.addNewProduct.bind(this)}
            />
        </div>
        </center>
      </div>
    );
  }
}

