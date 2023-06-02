import React from 'react';
import PropTypes from 'prop-types';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
    <>
        <div>
            <p>Good: {good} </p>
            <p>Neutral: {neutral}</p> 
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback: {positivePercentage}%</p>
        </div>
    </>
    );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};