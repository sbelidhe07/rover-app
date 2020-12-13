import React from 'react';
import './rover.css';
import ProgressBar from './ProgressBar';
import {reactLocalStorage} from 'reactjs-localstorage';

export default class Battery extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      level: 100,
      disabled: true,
      isDischargeFull: false, 
      isAutoEnabled: false,
      isCheckboxDisabled: false
    }
    
    this.charge = this.charge.bind(this)
    this.discharge = this.discharge.bind(this)

  
  }

 componentWillMount() {
    let storm = reactLocalStorage.get('storm',true);
    let solarflare = reactLocalStorage.get('solarflare',true);
    let shielded = reactLocalStorage.get('shielded',true);

    console.log(storm);
    console.log(shielded);
    if (storm === "True" && shielded === "False")
    {
	this.setState({isAutoEnabled: false, isCheckboxDisabled: true, isDischargeFull: true, disabled: true, level: 0 })	
    }
  
    if (solarflare === "True" && storm === "True" && shielded === "True")  
    {
	this.setState({isAutoEnabled: false, isCheckboxDisabled: true, isDischargeFull: false, disabled: true, level: 100 })	
    }
 }
componentWillUnmount(){
reactLocalStorage.clear();
}

  
  charge() {
    if(this.state.level === 100){ 
	this.setState({disabled: true})	
	return 
   }
    this.setState(prevState => ({isDischargeFull: true, disabled: false, level: prevState.level + 20 }))
  }

  autoDischarge(){
	this.setState({isAutoEnabled: true, isCheckboxDisabled: true})	
  }

  discharge() {
    if(this.state.level === 0){ 
	this.setState({isDischargeFull: true,disabled: true, isCheckboxDisabled: true})	
	alert('you are dead')
	return 
   }
   console.log(this.state.level);
    if(this.state.level <= 10 && this.state.isAutoEnabled){
        this.setState(prevState => ({isDischargeFull: false, disabled: true, isCheckboxDisabled: true , level: prevState.level + 90 }))
    }
    else {
         this.setState(prevState => ({ isDischargeFull: false, disabled:false, isCheckboxDisabled: false, level: prevState.level - 10 }))
    }
  }
  
  render() {
    return (
      <div>
        <br/>
        <center>
        <ProgressBar level={this.state.level}/>
        <div style={{ marginTop: '20px' }}>  
          <button disabled={this.state.disabled} 
            onClick={this.charge}
           >
            Charge
          </button>  
          <button disabled={this.state.isDischargeFull} 
            onClick={this.discharge}
           >
            Move
          </button>  
        </div>   
	<input type="checkbox" onclick={this.autoRecharge} disabled={this.state.isCheckboxDisabled}/><span>AutoRecharge</span>
	</center>
      </div>
    )
  }  
}

