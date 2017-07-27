import React, {PropTypes} from 'react';
import moment from 'moment';

export default RecordsListItem;

function RecordsListItem({result}) {
  const timeUpdated = moment(result.created).fromNow();
  const duration = moment.utc(result.duration*1000).format('HH:mm:ss');
  return (
    <li className="border-bottom">
      <div className="pull-right">
        <strong>&#9734; {result.rating}</strong>
      </div>
      <h4><a href={result.url}>{result.name}</a></h4>
      <h6>{duration}</h6>
      <p>{result.description}</p>
      <time>Updated {timeUpdated}</time>
    </li>
  );
}

RecordsListItem.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    created: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    rating: PropTypes.number,
  }),
};
