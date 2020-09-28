import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  background-color: #FF9000;
  border: none;
  border-radius: 10px;
  color: #312e38;
  font-weight: 500;
  margin-top: 24px;
  transition: background-color .6s;

  &:hover {
    background-color: ${shade(0.2, '#FF9000')}
  }
`;
