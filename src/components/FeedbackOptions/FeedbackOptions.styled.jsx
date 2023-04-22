import styled from '@emotion/styled';

export const BtnList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const FeedbackBtn = styled.button`
  position: relative;
  background-color: whitesmoke;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
  outline: none;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;
  box-shadow: rgba(129, 129, 129, 0.1) 0px 0px 8px;
  transition: box-shadow 100ms ease;

  :hover,
  :focus {
    box-shadow: rgba(129, 129, 129, 0.15) 0px 4px 16px,
      rgba(129, 129, 129, 0.15) 0px 4px 16px,
      rgba(129, 129, 129, 0.15) 0px 8px 16px;
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 5px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: box-shadow 100ms ease;
  }

  :active:after {
    ${({ children }) => {
      switch (children) {
        case 'Good':
          return 'box-shadow: 0 0 20px 5px green;';
        case 'Neutral':
          return 'box-shadow: 0 0 20px 5px yellow;';
        case 'Bad':
          return 'box-shadow: 0 0 20px 5px red;';
        default:
          return 'box-shadow: 0 0 20px 5px black;';
      }
    }}

    position: absolute;
    border-radius: 5px;
    opacity: 0.7;
  }
`;
