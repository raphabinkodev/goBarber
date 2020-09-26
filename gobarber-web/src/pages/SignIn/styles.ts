import styled from 'styled-components';
import { shade } from 'polished';
import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 1034px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      height: 56px;
      padding: 16px;
      background: #232129;
      color: #f4ede8;
      font-weight: 500;
      border: 2px solid #232129;
      border-radius: 10px;

      & + input {
        margin-top: 8px;
      }
    }

    button {
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
    }

    a {
      display: block;
      text-decoration: none;
      color: #f4ede8;
      line-height: 21.1px;
      margin-top: 24px;
      transition: color 0.6s;

      &:hover {
        color: ${shade(0.3, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    color: #FF9000;
    text-decoration: none;
    align-items: center;
    transition: color 0.6s;

    svg {
      margin-right: 18px;
    }

    &:hover {
        color: ${shade(0.3, '#FF9000')};
      }
  }
`;

export const BackgroundContent = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
