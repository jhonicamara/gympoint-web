import styled from 'styled-components';

export const Container = styled.div`
  label {
    color: #444;
    font-size: 14px;
    font-weight: bold;
  }
  > div {
    margin-top: 10px;
    > div {
      padding: 7px 0;
    }
  }
  span {
    color: #fb6f91;
    align-self: flex-start;
    margin-top: 10px;
    font-weight: bold;
  }
`;
