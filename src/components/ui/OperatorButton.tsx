import styled from 'styled-components';

type OperatorButtonProps = {
  operator: string;
  handleClickButton?: () => void;
};

const StyledButton = styled.button`
  display: flex;
  width: 56px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #ff9f0b;
  color: #e8e8e8;
`;

export const OperatorButton = (props: OperatorButtonProps) => {
  return (
    <StyledButton
      onClick={() => {
        if (props.handleClickButton) {
          props.handleClickButton();
        }
      }}
    >
      {props.operator}
    </StyledButton>
  );
};
