import { Component } from 'react';
import FeedbackList from './components/Feedback/FeedbackList';
import Section from './components/Section';
import Statistics from './components/Statistics';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

handleCount = e => {
  const name = e.currentTarget.name;
  this.setState(prevState => ({
    [name]: prevState[name] + 1,
  }));
};
countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};
countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  return parseInt((good / this.countTotalFeedback()) * 100);
};

  render() {
    const { good, neutral, bad } = this.state;
  return (
    <>
    <Section title="Please leave feedback">
      <FeedbackList
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={this.handleCount}
      />
    </Section>
    <Section title="Statistics">
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      />
    </Section>
  </>
  );
    }
}
export default App

