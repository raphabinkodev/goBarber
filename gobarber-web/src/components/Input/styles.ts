import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 16px;
  background: #232129;
  font-weight: 500;
  border: 2px solid #232129;
  border-radius: 10px;

    & + div {
      margin-top: 8px;
    }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    color: #666360;
  }
`;
