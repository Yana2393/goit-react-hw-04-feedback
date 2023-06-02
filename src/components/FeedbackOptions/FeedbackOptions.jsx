import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.wrapp}>
      <div className={css.feedbackOptions}>
        {options.map(option => {
          return (
            <button className={css.button}
              key={option}
              onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};