import styled from 'styled-components';
import { lighten } from 'polished';

export const Main = styled.div``;

export const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  padding: 0 50px;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 20px;
    }
  }

  table {
    margin-top: 20px;
    padding: 20px;

    background: #fff;
    border-radius: 4px;
  }

  table thead th {
    font-size: 14px;
    font-weight: bold;
    text-align: start;
  }

  table tbody td {
    font-size: 14px;
    text-align: start;
    padding: 15px 0;
  }

  tbody tr {
    & + tr {
      td {
        border-top: 1px solid #eee;
      }
    }
  }

  table tbody tr {
  }

  table td span {
    color: #999;
    font-weight: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AnswerButton = styled.a`
  color: #4d85ee;

  margin-right: 10px;

  width: 100%;
  text-align: end;

  cursor: pointer;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const ContainerInfo = styled.div`
  border-radius: 4px;
  background: #fff;
  min-width: 500px;
  padding: 30px 0;

  form {
    margin-top: 10px;
    padding-left: 30px;
    padding-right: 30px;

    strong {
      font-size: 14px;
    }

    textarea {
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 150px;
      min-height: 150px;
      width: 100%;
      min-width: 100%;
      max-width: 400px;
      line-height: 20px;
      align-self: center;
      font-size: 14px;
    }
  }
`;

export const Question = styled.div`
  padding: 0 30px 0 30px;

  strong {
    font-size: 14px;
  }

  p {
    font-size: 14px;
    line-height: 30px;
    color: #444;
  }
`;

export const ButtonAnswer = styled.button`
  margin-top: 15px;
  height: 40px;
  width: 100%;
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
`;

export const CloseButton = styled.button`
  border: 0;
  background: none;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
`;
