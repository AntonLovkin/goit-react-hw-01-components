import React from 'react';
import PropTypes from 'prop-types';
import statistics from '../styles/Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <div className={statistics.profile}>
    <section className="statistics">
      {title.length > 0 && <h2 className={statistics.title}>{title}</h2>}
      {/* <h2 className={statistics.title}>{title}</h2> */}
      <ul className={statistics.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={statistics.stats_item} key={id}>
            <span className={statistics.label}>{label}</span>
            <span className={statistics.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

Statistics.defaultProps = {
  name: 'Upload stats',
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
