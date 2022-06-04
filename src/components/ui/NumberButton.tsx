import styled from 'styled-components';

type NumberButtonProps = {
  number: number;
};

const StyledButton = styled.button`
  display: flex;
  width: 56px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #5f5f66;
  color: #e8e8e8;
`;

export const NumberButton = (props: NumberButtonProps) => {
  return <StyledButton>{props.number}</StyledButton>;
};
