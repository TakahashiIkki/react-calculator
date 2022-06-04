import styled from 'styled-components';
import { NumberButton } from '../../ui/NumberButton';
import { OperatorButton } from '../../ui/OperatorButton';
import { ClearButton } from '../../ui/ClearButton';
import { useState } from 'react';

// ページごとの装飾を除いたTopページにおけるメインコンテンツを置く
export const Top = () => {
  const [number, setNumber] = useState<number>(0);

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  `;

  const CalculatorBox = styled.div`
    background-color: #282837;
  `;

  const DisplayBox = styled.div`
    display: flex;
    height: 60px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0 10px;
    color: #e8e8e8;
  `;

  const ControlBox = styled.div`
    font-weight: bold;
  `;

  const ControlRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 0;
  `;

  const handleClickButton = (i: number) => {
    setNumber(Number(`${number}` + i));
  };

  return (
    <Container>
      <CalculatorBox>
        <DisplayBox>{number}</DisplayBox>
        <ControlBox>
          <ControlRow>
            <ClearButton handleClearButton={() => setNumber(0)} />
            <OperatorButton operator="+/-" />
            <OperatorButton operator="%" />
            <OperatorButton operator="÷" />
          </ControlRow>
          <ControlRow>
            <NumberButton number={7} handleClickButton={handleClickButton} />
            <NumberButton number={8} handleClickButton={handleClickButton} />
            <NumberButton number={9} handleClickButton={handleClickButton} />
            <OperatorButton operator="x" />
          </ControlRow>
          <ControlRow>
            <NumberButton number={4} handleClickButton={handleClickButton} />
            <NumberButton number={5} handleClickButton={handleClickButton} />
            <NumberButton number={6} handleClickButton={handleClickButton} />
            <OperatorButton operator="-" />
          </ControlRow>
          <ControlRow>
            <NumberButton number={1} handleClickButton={handleClickButton} />
            <NumberButton number={2} handleClickButton={handleClickButton} />
            <NumberButton number={3} handleClickButton={handleClickButton} />
            <OperatorButton operator="+" />
          </ControlRow>
          <ControlRow>
            {/* ToDo: flex-glow = 2 とか指定する */}
            <NumberButton number={0} handleClickButton={handleClickButton} />
            <OperatorButton operator="." />
            <OperatorButton operator="=" />
          </ControlRow>
        </ControlBox>
      </CalculatorBox>
    </Container>
  );
};
