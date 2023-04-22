import PropTypes from 'prop-types';

import { capitalize } from 'utilites/capitalize';
import { BtnList, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(option => (
        <li key={option}>
          <FeedbackBtn type="button" onClick={() => onLeaveFeedback(option)}>
            {capitalize(option)}
          </FeedbackBtn>
        </li>
      ))}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
