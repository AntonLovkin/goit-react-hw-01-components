import React from 'react';
import PropTypes from 'prop-types'

 const Profile = (props) => 
 ( <div className="profile">
  <div class="description">
    <img
      src={props.avatar}
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">{props.name}</p>
    <p class="tag">{props.tag}</p>
    <p class="location">{props.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{props.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{props.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{props.stats.likes}</span>
    </li>
  </ul>
</div>)
// name, avatar, tag, location, followers, views, likes

Profile.defaultProps = {
    name: "User Name",
};
 
Profile.propTypes = {
    name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  
}

export default Profile;