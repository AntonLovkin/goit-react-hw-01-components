import React from 'react';
import PropTypes from 'prop-types';
import profile from '../styles/Profile.module.css'
console.log(profile);

 const Profile = ({name, avatar, tag, location, followers, views, likes}) => 
 ( <div className={profile.profile}>
  <div className={profile.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={profile.avatar}
    />
    <p className={profile.name}>{name}</p>
    <p className={profile.tag}>@{tag}</p>
    <p className={profile.location}>{location}</p>
  </div>

  <ul className={profile.stats}>
    <li className={profile.stats_item}>
      <span className={profile.label}>Followers</span>
      <span className={profile.quantity}>{followers}</span>
    </li>
    <li className={profile.stats_item}>
      <span className={profile.label}>Views</span>
      <span className={profile.quantity}>{views}</span>
    </li>
    <li className={profile.stats_item}>
      <span className={profile.label}>Likes</span>
      <span className={profile.quantity}>{likes}</span>
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