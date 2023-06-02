import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Statistics} from './Statistics/Statistics';
import {Section} from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css'

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  function onLeaveFeedback(reviewPoint) {
    setState(oldState => {
      const pointValue = oldState[reviewPoint] + 1;
      return { ...oldState, [reviewPoint]: pointValue };
    });
  }

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((state.good * 100) / countTotalFeedback());
  };

    return (
      <div className={css.AppComponent}>
        <div className={css.AppName}>
          <div className={css.sectionReviews}>
            <Section title="Reviews Widget">
              <FeedbackOptions
                options={options}
                onLeaveFeedback={onLeaveFeedback}
              />
            </Section>
          </div>
          <div className={css.sectionStatistics} >
            <Section title="Statistics">
              {countTotalFeedback() === 0 ? (
                <Notification message="There is no feedback" />
              ) : (
                <Statistics
                  good={state.good}
                  neutral={state.neutral}
                  bad={state.bad}
                  total={countTotalFeedback()}
                  positivePercentage={countPositiveFeedbackPercentage()}
                />
              )}
            </Section>
          </div>
        </div>
      </div>
    );
  
}

App.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
