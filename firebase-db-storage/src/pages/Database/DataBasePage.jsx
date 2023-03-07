import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { writeBatchTodoList } from '@/todoList/utils';

export default function DataBasePage() {
  writeBatchTodoList([{ todo: 'Firebase 인증 사용하기', isCompleate: true }]);

  return (
    <>
      <StyledContainer>
        <button type="button" onClick={() => {}}>
          버튼
        </button>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  text-align: center;
`;
