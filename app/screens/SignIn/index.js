import React, {Component} from 'react';
import {login} from '../../utils/i2x-api';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = { error: '' };
  }

  componentWillMount() {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      this.context.router.push({pathname: '/home'});
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    login(this.username.value, this.password.value)
      .then((result) => {
        if (result.error) {
          this.setState({error: "Username or password is incorrect"});
        } else {
          sessionStorage.setItem('accessToken', result.data.token);
          this.context.router.push({pathname: '/home'});
        }
      })
  }

  render() {
    const {
      state: {
        error,
      },
    } = this;
    return (
      <section className="container home">
        <form
          role="form"
          onSubmit={this.handleSubmit}
        >
          <div className="mb20" style={{ "background": "#000" }}>
            <img src="https://i2x.ai/img/i2x-logo.png" alt="logo" />
          </div>
          {
            error &&
            <div className="alert alert-danger" >{error}</div>
          }
          <div className="form-group mb20">
            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                ref={ref => (this.username = ref)}
              />
            </div>
          </div>
          <div className="form-group mb20">
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                ref={ref => (this.password = ref)}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </section>
    );
  }
}

SignIn.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
