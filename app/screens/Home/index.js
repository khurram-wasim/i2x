import React, {Component, PropTypes} from 'react';
import RecordsList from './components/RecordsList'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  handleFilterUpdate = (filter) => {
    this.setState({filter})
  }

  logout() {
    sessionStorage.clear();
    this.context.router.push({pathname: '/'});
  }

  render() {
    return (
      <span>
        <div className="logout">
          <button onClick={this.logout} className="btn-primary">Log out</button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <RecordsList />
            </div>
          </div>
        </div>
      </span>
    );
  }
}

Home.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string,
  }),
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
