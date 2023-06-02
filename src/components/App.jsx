import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onLeaveFeedback(reviewPoint) {
    this.setState(prevState => {
      const pointValue = prevState[reviewPoint] + 1;
      return { [reviewPoint]: pointValue };
    });
  }

  render() {
    const options = ['good', 'neutral', 'bad'];
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total === 0 ? 0 : Math.round((good * 100) / total);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 36,
          color: '#010101',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              width: '100%',
              padding: 20,
              backgroundColor: '#202123',
              color: '#FFFFFF',
            }}
          >
            <Section title="Reviews Widget">
              <FeedbackOptions
                options={options}
                onLeaveFeedback={this.onLeaveFeedback.bind(this)}
              />
            </Section>
          </div>
          <div
            style={{
              width: '100%',
              padding: 20,
              backgroundColor: '#343541',
              color: '#FFFFFF',
            }}
          >
            <Section title="Statistics">
              {total === 0 ? (
                <Notification message="There is no feedback" />
              ) : (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positivePercentage}
                />
              )}
            </Section>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
