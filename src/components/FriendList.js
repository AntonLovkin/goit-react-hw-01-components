import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'

const FriendList = ({friends}) => (
    <ul class="friend-list">
        {friends.map(friend => (
            <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                id={friend.id} />
    ))}
    </ul>)
    
FriendList.defaultProps = {
    
};
 
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}

export default FriendList      
