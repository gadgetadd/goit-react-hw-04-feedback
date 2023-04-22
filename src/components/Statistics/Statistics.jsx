import PropTypes from 'prop-types';

import { StatsList, Stats, StatsValue } from './Statistics.styled';

export const Statistics = ({
  bad,
  good,
  neutral,
  positivePercentage,
  total,
}) => {
  return (
    <StatsList>
      <li>
        <Stats>
          Good: <StatsValue>{good}</StatsValue>
        </Stats>
      </li>
      <li>
        <Stats>
          Neutral: <StatsValue>{neutral}</StatsValue>
        </Stats>
      </li>
      <li>
        <Stats>
          Bad: <StatsValue>{bad}</StatsValue>
        </Stats>
      </li>
      <li>
        <Stats>
          Total: <StatsValue>{total}</StatsValue>
        </Stats>
      </li>
      <li>
        <Stats>
          Positive feedback: <StatsValue>{positivePercentage}%</StatsValue>
        </Stats>
      </li>
    </StatsList>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
