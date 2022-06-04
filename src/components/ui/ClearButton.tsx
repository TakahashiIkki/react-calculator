import styled from 'styled-components';

type ClearButtonProps = {
  displayText?: string;
  handleClearButton: () => void;
};

const StyledButton = styled.button`
  display: flex;
  width: 56px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #404047;
  color: #e8e8e8;
`;

export const ClearButton = (props: ClearButtonProps) => {
  return (
    <StyledButton onClick={() => props.handleClearButton()}>
      {props.displayText ?? 'AC'}
    </StyledButton>
  );
};
