import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import friendlist from '../styles/FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={friendlist.friend_list}>
    {/* <p className={friendlist.title}>Friend List</p> */}
    {friends.map(friend => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        id={friend.id}
      />
    ))}
  </ul>
);

FriendList.defaultProps = {};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
