import React from 'react';
import './Profile.css';
import StatsItem from './StatsItem';
import PropTypes from 'prop-types'

const Profile = ({ user }) => {
  console.log(user);
  return (
    <div className="profile">
      <div className="description">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <p className="name">{user.name}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>
      <ul className="stats">
        {Object.entries(user.stats).map(stat => (
          <StatsItem key={user.stats[stat[0]]} stat={stat} />
        ))}
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    teg: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object
  }),
};