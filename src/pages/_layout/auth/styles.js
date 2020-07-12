import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  min-height: 100%;
  height: auto;
  overflow: hidden;

  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 340px;
  text-align: center;

  padding: 10px;

  img {
    padding-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;

    p {
      align-self: flex-start;
      font-weight: bold;
      margin: 5px 0;
      color: #444;
    }

    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #999999;
      margin: 0 0 10px;

      border: 1px solid #ddd;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      color: #fb6f91;
      align-self: center;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #ee4d64;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#EE4D64')};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
