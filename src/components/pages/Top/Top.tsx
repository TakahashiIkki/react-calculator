import styled from 'styled-components';
import { NumberButton } from '../../ui/NumberButton';
import { OperatorButton } from '../../ui/OperatorButton';
import { ClearButton } from '../../ui/ClearButton';

// ページごとの装飾を除いたTopページにおけるメインコンテンツを置く
export const Top = () => {
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

  const ControllBox = styled.div`
    font-weight: bold;
  `;

  const ControllRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 0;
  `;

  return (
    <Container>
      <CalculatorBox>
        <DisplayBox>0</DisplayBox>
        <ControllBox>
          <ControllRow>
            <ClearButton />
            <OperatorButton operator="+/-" />
            <OperatorButton operator="%" />
            <OperatorButton operator="÷" />
          </ControllRow>
          <ControllRow>
            <NumberButton number={7} />
            <NumberButton number={8} />
            <NumberButton number={9} />
            <OperatorButton operator="x" />
          </ControllRow>
          <ControllRow>
            <NumberButton number={4} />
            <NumberButton number={5} />
            <NumberButton number={6} />
            <OperatorButton operator="-" />
          </ControllRow>
          <ControllRow>
            <NumberButton number={1} />
            <NumberButton number={2} />
            <NumberButton number={3} />
            <OperatorButton operator="+" />
          </ControllRow>
          <ControllRow>
            {/* ToDo: flex-glow = 2 とか指定する */}
            <NumberButton number={0} />
            <OperatorButton operator="." />
            <OperatorButton operator="=" />
          </ControllRow>
        </ControllBox>
      </CalculatorBox>
    </Container>
  );
};
