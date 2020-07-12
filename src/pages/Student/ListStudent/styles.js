import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
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

      button {
        height: 40px;
        background: #ee4d64;
        font-weight: bold;
        color: #fff;
        border: 0;
        margin-right: 15px;
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
      }

      .input_icon {
        display: flex;
        align-items: center;
        border-radius: 4px;
        background: #fff;

        padding: 5px 10px;

        input {
          margin-left: 5px;
          border: none;
          ::placeholder {
            color: #999;
          }
        }
      }
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

export const EditButton = styled.a`
  color: #4d85ee;

  margin-right: 10px;

  width: 100%;
  text-align: end;

  cursor: pointer;
`;

export const DelButton = styled.a`
  color: #de3b3b;
  text-align: end;

  cursor: pointer;
`;
