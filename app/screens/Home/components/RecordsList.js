import React, {Component, PropTypes} from 'react';
import RecordsListItem from './RecordsListItem';
import {getData} from '../../../utils/i2x-api'

export default class RecordsList extends Component {
  constructor() {
    super()
    this.state = {data: {}}
  }

  componentWillMount() {
    getData()
      .then((response) => {
        this.setState({ data: response.data });
      })
  }

  render() {
    const {data} = this.state;
    const list= [];
    if(data.count) {
      for(let i=1; i<=data.count; i++) {
        const result = {};
        result.name=`Recording #${i}`;
        result.url = data.results[i-1].url;
        result.description = data.results[i-1].final_script;
        result.rating = data.results[i-1].rating;
        result.created = data.results[i-1].created;
        result.duration = data.results[i-1].duration;
        list.push(<RecordsListItem key={i} result={result} />);
      }
    }
    return (
      <ul className="list-unstyled">
        {list}
      </ul>
    );
  }
}

RecordsList.propTypes = {
  getData: PropTypes.func,
};
