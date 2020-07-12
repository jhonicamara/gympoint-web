import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 5px 20px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      padding-right: 20px;
      margin-right: 20px;
      border-right: 1px solid #ddd;
    }
  }

  .students {
    ul {
      display: flex;
      flex-direction: row;
    }

    li {
      font-weight: bold;
      a {
        margin-right: 20px;
        font-size: 15px;
        color: #999;
      }

      a.active {
        color: #444;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 20px;

    strong {
      display: block;
      color: #444;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #ddd;
    }
  }
`;

export const LogoutButton = styled.a`
  span {
    color: #ee4d64;
  }
  cursor: pointer;
`;
