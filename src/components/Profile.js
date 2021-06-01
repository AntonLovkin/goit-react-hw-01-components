import React from 'react';
import PropTypes from 'prop-types';
import profile from '../styles/Profile.module.css'
console.log(profile);

 const Profile = ({name, avatar, tag, location, followers, views, likes}) => 
 ( <div className="profile">
  <div class="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      class="avatar"
    />
    <p className={profile.profile}>{name}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </li>
  </ul>
</div>)


Profile.defaultProps = {
    name: "User Name",
};
 
Profile.propTypes = {
    name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}

export default Profile;