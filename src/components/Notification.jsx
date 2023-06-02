import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: '#f8d7da',
        color: '#721c24',
        padding: '10px 20px',
        borderRadius: '4px',
        marginBottom: '20px',
      }}
    >
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
