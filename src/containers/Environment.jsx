import React, { Component } from "react";

/* Import Components */
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import {reactLocalStorage} from 'reactjs-localstorage';


class Environment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEnv: {
        temperature: "",
        humidity: "",
        solarflare: "",
        storm: "",
        shielded:"",
        terrain: ""
      },

      solarflareOptions: ["True", "False"],
      stormOptions: ["True", "False"],
      shieldedOptions: ["True", "False"],
      terrainOptions: ["dirt", "water", "rock", "sand"],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    reactLocalStorage.set(name, value);

    this.setState(
      prevState => ({
        newEnv: {
          ...prevState.newEnv,
          [name]: value
        }
      }),
      () => console.log(this.state.newEnv)
    );
  }



  handleFormSubmit(e) {
     reactLocalStorage.set(e.target.name, e.target.value);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newEnv: {
        temperature: "",
        humidity: "",
        solarflare: "",
        storm: "",
        shielded:"",
        terrain: ""
      }
    });
  }

  render() {
    return (
     <div className="col-md-6">
      <br/>
      <h1>Environment Setting</h1>
      <br/>
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"number"}
          title={"Temperature"}
          name={"temperature"}
          value={this.state.newEnv.temperature}
          placeholder={"Enter Temperature"}
          handleChange={this.handleInput}
        />{" "}
        {/* Temperature */}
        <Input
          inputType={"number"}
          name={"humidity"}
          title={"Humidity"}
          value={this.state.newEnv.humidity}
          placeholder={"Enter Humidity"}
          handleChange={this.handleInput}
        />{" "}
        {/* Humidity */}
        <Select
          title={"Solar Flare"}
          name={"solarflare"}
          options={this.state.solarflareOptions}
          value={this.state.newEnv.solarflare}
          placeholder={"Select Solar Flare"}
          handleChange={this.handleInput}
        />{" "}
        {/* Solar Flare */}
        <Select
          title={"Storm"}
          name={"storm"}
          options={this.state.stormOptions}
          value={this.state.newEnv.storm}
          placeholder={"Select Storm"}
          handleChange={this.handleInput}
        />{" "}
        {/* Storm */}
        <Select
          title={"Shielded"}
          name={"shielded"}
          options={this.state.shieldedOptions}
          value={this.state.newEnv.shielded}
          placeholder={"Select Shielded"}
          handleChange={this.handleInput}
        />{" "}
        {/* Shielded */}
        <Select
          title={"Terrain"}
          name={"terrain"}
          options={this.state.terrainOptions}
          value={this.state.newEnv.terrain}
          placeholder={"Select Terrain"}
          handleChange={this.handleInput}
        />{" "}
        {/* Terrain */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default Environment;

