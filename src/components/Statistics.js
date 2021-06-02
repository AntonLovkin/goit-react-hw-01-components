import React from 'react';
import PropTypes from 'prop-types';
import statistics from '../styles/Statistics.module.css'

 const Statistics = ({title, stats}) => 
   ( <div className={statistics.profile}>
  <section className="statistics">
  <h2 className={statistics.title}>{title}</h2>
   <ul className={statistics.stat_list}>
    {stats.map(({id, label, percentage}) => (
      <li className={statistics.stats_item} key={id}>
      <span className={statistics.label}>{label}</span>
      <span className={statistics.percentage}>{percentage}%</span>
    </li>
    ))}
        
  </ul>
</section>
</div>)

Statistics.defaultProps = {
    name: "Upload stats",
};
 
Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  // percentage: PropTypes.number.isRequired,
  // label: PropTypes.string.isRequired,
}

export default Statistics;

