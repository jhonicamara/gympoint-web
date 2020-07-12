import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo_header.svg';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile, LogoutButton } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />

          <div className="students">
            <ul>
              <li>
                <NavLink activeClassName="active" to="/students">
                  ALUNOS
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/plans">
                  PLANOS
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/enrolls">
                  MATRÍCULAS
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/helpOrders">
                  PEDIDOS DE AUXÍLIO
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <LogoutButton onClick={handleSignOut}>
                <span>sair do sistema</span>
              </LogoutButton>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
