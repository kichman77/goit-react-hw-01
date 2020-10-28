import React from 'react';
import PropTypes from 'prop-types';

const FriendsItem = (  {name, avatar, status}) => {

  const styles = {
    backgroundColor: status ? 'green' : 'red',
    width: '30px',
    height: '30px',
    display: 'block',
    borderRadius: '50%',
  };
  // console.log(props);
  return (
    <li className="item">
      <span style={styles}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendsItem;

FriendsItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  status: PropTypes.bool
}
