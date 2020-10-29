import React from 'react';
import FriendsItem from './FriendsItem';
import './FriendList.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendsItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
