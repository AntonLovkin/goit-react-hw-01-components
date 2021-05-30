import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline, id}) => (
    <li class="item" key={id}>
    <span class="status">{isOnline}</span>
   <img class="avatar" src={avatar} alt={name} width="48" />
   <p class="name">{name}</p>
 </li>
)

FriendListItem.defaultProps = {
    name: "Friend Name",
};
 
FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired, 
}

export default FriendListItem