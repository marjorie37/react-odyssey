import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "test@test.com"
    };
    this.handleSubmit = this.updateEmailField.bind(this);
  }

  updateEmailField(e) {
    e.prenventDefault();
    this.setState({
      email: this.state.email
    });
  }

  render() {
    return (
      <div>
        {this.state.email != "test@test.com" ? (
          <h3>Votre email est : {this.state.email}</h3>
        ) : (
          <h3>Exemple d'email : {this.state.email}</h3>
        )}

        <form onSubmit={this.updateEmailField}>
          <label htmlFor="email">Entrez votre email :</label>
          <input
            onChange={e => this.setState({ email: e.target.value })}
            type="email"
            name="email"
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
