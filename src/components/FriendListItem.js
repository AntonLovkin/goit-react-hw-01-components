import React from 'react';
import PropTypes from 'prop-types';
import friendlist from '../styles/FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={isOnline ? friendlist.item : friendlist.disabled} key={id}>
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  name: 'Friend Name',
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
