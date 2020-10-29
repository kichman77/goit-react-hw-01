import React from 'react';
import PropTypes from 'prop-types';

const StatsItem = ({ stats }) => {
  return (
    <ul className="stats">
      {Object.keys(stats).map((key, i) => {
        return (
          <li className="profile-item" key={i}>
            <span className="label">{key}</span>
            <span className="quantity">{stats[key]}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default StatsItem;

StatsItem.propTypes = {
  key: PropTypes.string,
  'stats[key]': PropTypes.number,
};
