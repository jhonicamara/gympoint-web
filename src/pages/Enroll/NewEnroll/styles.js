import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Content = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 20px;
    }

    aside {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const BackButton = styled.button`
  height: 40px;
  background: #ccc;
  font-weight: bold;
  color: #fff;
  border: 0;
  margin-right: 15px;
  border-radius: 4px;
  font-size: 14px;
  transition: background 0.2s;

  padding: 5px 10px;

  &:hover {
    background: ${darken(0.04, '#ccc')};
  }

  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
  }
`;

export const SaveButton = styled.button`
  height: 40px;
  background: #ee4d64;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  transition: background 0.2s;

  padding: 5px 10px;

  &:hover {
    background: ${lighten(0.04, '#ee4d64')};
  }

  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
  }
`;

export const Container = styled.div`
  margin-top: 18px;
  background: #fff;
  border-radius: 4px;

  padding: 25px;

  form {
    span {
      color: #ee4d64;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      font-weight: bold;
      text-align: start;

      margin-bottom: 10px;
    }

    .select {
      display: flex;
      width: 100%;
      height: 60px;
    }

    input {
      padding: 10px;
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 20px;
    }

    .date {
      background: #ccc;
      cursor: default;
    }

    .price {
      background: #ccc;
      cursor: default;
    }

    .rowTable {
      display: flex;
      flex-direction: row;

      margin-top: 20px;
    }

    .row {
      flex-direction: column;

      width: 100%;
    }

    .row:nth-child(2) {
      padding-left: 10px;
      padding-right: 5px;
    }

    .row:nth-child(3) {
      padding-right: 10px;
      padding-left: 5px;
    }
  }
`;
