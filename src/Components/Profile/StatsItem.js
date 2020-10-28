// import { object } from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';

const StatsItem = ({ stat: [key, value] }) => {
  return (
    <li className="profile-item">
      <span className="label">{key}</span>
      <span className="quantity">{value}</span>
    </li>
  );
};

export default StatsItem;

StatsItem.propTypes = {
  key: PropTypes.string,
  value: PropTypes.number
}