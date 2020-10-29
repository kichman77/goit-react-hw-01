import React from 'react';
import PropTypes from 'prop-types';

const FriendsItem = ({ friend }) => {
  const styles = {
    backgroundColor: friend.isOnline ? 'green' : 'red',
    width: '10px',
    height: '10px',
    display: 'block',
    borderRadius: '50%',
  };
  return (
    <li className="item">
      <span style={styles}></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};

export default FriendsItem;

FriendsItem.propTypes = {
  'friend.name': PropTypes.string,
  'friend.avatar': PropTypes.string,
  'friend.isOnline': PropTypes.bool,
};
