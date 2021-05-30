import React from 'react';
import PropTypes from 'prop-types'

 const Statistics = ({title, stats}) => 
   ( <div className="profile">
  <section class="statistics">
  <h2 class="title">{title}</h2>
   <ul class="stat-list">
    {stats.map(({id, label, percentage}) => (
      <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
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

