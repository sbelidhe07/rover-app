import React from 'react';
import './rover.css';
export default class Sidebar extends React.Component{


 render(){
  return(
    <div id="menu-outer">
    <div class="table">
    <ul id="horizontal-list">
      <li onClick={() => this.props.changeTab(0)}>Add New Item</li>
      <li onClick={() => this.props.changeTab(1)}>Products</li>
    </ul>
  </div>
</div>
  );
}

}
