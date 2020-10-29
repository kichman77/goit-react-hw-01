import React from 'react';
import StatisticItem from '../Statistics/StatisticItem';
import './Statistics.css';
import PropTypes from 'prop-types';

const Statistics = ({ statistic }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {statistic.map(elem => (
          <StatisticItem
            key={elem.id}
            label={elem.label}
            percentage={elem.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  statistic: PropTypes.array,
};
