import React from 'react';
import './rover.css';

export default class NewItem extends React.Component {
  constructor() {
    super();
    this.state = {
      formErrors: {
        category: false,
        name: false,
        unit: false,
	priority: false
      }
    }
  }
  
  checkForm(){
    let category = document.getElementById('newItemForm-category').value;
    let name = document.getElementById('newItemForm-name').value;
    let unit = document.getElementById('newItemForm-unit').value;
    let priority = document.getElementById('newItemForm-priority').value;
    let product = {category: category,name: name, unit: unit, priority: priority};
    let errors = this.state.formErrors;
    category.length === 0 ? errors.category = true : errors.category = false;
    name.length === 0 ? errors.name = true : errors.name = false;
    priority.length === 0 ? errors.priority = true : errors.priority = false;
    unit.length === 0 ? errors.unit = true : errors.unit = false;

    if(errors.length > 0) {
      this.finalizeForm(true, product);
    }
    else{ 
      this.finalizeForm(false, product);
    }
    this.setState({formErrors: errors});
  }

 finalizeForm(isError, product){
    
    if(isError === true){
      let errors = this.state.formErrors;
      this.setState({formErrors: errors});
    } else {
      this.props.addNewProduct(product);
    }
  }
  
  
 renderCategorySelections(inventory){
    const categoryKeys = Object.keys(inventory.categories);
    const CKLength = categoryKeys.length;
    let options = [];
    
    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    for(let i = 0; i<CKLength; i++){
      options.push(<option>{capitalize(categoryKeys[i])}</option>);
    }
    return options;
  }
 
  
  
  updateForm(){
    let category = document.getElementById('newItemForm-category').value;
    let name = document.getElementById('newItemForm-name').value;
    let unit = document.getElementById('newItemForm-unit').value;
    let priority = document.getElementById('newItemForm-priority').value;
    let errors = this.state.formErrors;
    if(this.props.formData.category !== category){
      errors.category = false;
    }
    if(this.props.formData.name !== name){
      errors.name = false;
    }
    if(this.props.formData.priority !== priority){
      errors.priority = false;
    }
    if(this.props.formData.unit !== unit){
      errors.unit= false;
    }
    this.setState({formErrors: errors});
    
    this.props.changeForm({category: category, name: name,unit: unit,priority: priority});
  }
  
  render(){
    return(
      <div className='NewItem'>
        <div className='newItem-input'>
          <h1>Add A New Item</h1>
         <p>
            <label>Category</label>
            <select className={this.state.formErrors.category === true ? 'formCheck-err' : ''} id='newItemForm-category' value={this.props.formData.category} onChange={() => this.updateForm()}>
              <option></option>{this.renderCategorySelections(this.props.inventory)}
            </select>
          </p>
          <p>
            <label>Name</label>
            <input className={this.state.formErrors.name === true ? 'formCheck-err' : ''} type='text' required id='newItemForm-name' value={this.props.formData.name} onChange={() => this.updateForm()}></input>
          </p>
          <p>
            <label>Unit</label>
            <input className={this.state.formErrors.unit === true ? 'formCheck-err' : ''} type='number' required id='newItemForm-unit' value={this.props.formData.unit} onChange={() => this.updateForm()}></input>
          </p>
          <p>
            <label>Priority</label>
            <input className={this.state.formErrors.priority === true ? 'formCheck-err' : ''} type='text' required id='newItemForm-priority' value={this.props.formData.priority} onChange={() => this.updateForm()}></input>
          </p>
          <button onClick={() => this.checkForm()}>Add Product</button>
        </div>
      </div>
    );
  }
}

