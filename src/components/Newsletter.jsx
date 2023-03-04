import React from "react";
import swal from 'sweetalert';

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
          
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
          
  handleChange(event) {
    this.setState({value: event.target.value});
  }
          
  handleSubmit(event) {
    swal('E-mail ' + this.state.value + ' cadastrado!');
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="news">
        <div id="content">
          <h3>Cadastre-se e fique por dentro das novidades e promoções</h3>
          <form onSubmit={this.handleSubmit}  id="form">
            <input className="input" type="email" value={this.state.value} onChange={this.handleChange} required/>
            <input className="button-home"  type="submit" value="ENVIAR" />
          </form>
        </div>
      </div>
    );
  }
}