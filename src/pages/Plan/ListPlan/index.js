import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Buttons, EditButton, DelButton } from './styles';

export default function ListPlan() {
  const [plans, setPlans] = useState([]);

  async function loadPlans() {
    const response = await api.get('plans');
    setPlans(response.data);
  }

  useEffect(() => {
    loadPlans();
  }, []);

  async function handleDelete(id) {
    try {
      // eslint-disable-next-line no-alert
      const result = window.confirm(
        'Tem certeza que deseja apagar este plano?'
      );
      console.tron.log(result);
      if (result === true) {
        await api.delete(`/plans/${id}`);
        toast.success('Plano deletado com sucesso');
        loadPlans();
      }
    } catch (error) {
      toast.error('Não foi possível realizar a operação');
    }
  }

  return (
    <Container>
      <header>
        <strong>Gerenciamento Planos</strong>
        <aside>
          <button type="button" onClick={() => history.push('/newPlan')}>
            <MdAdd size={20} />
            <p>CADASTRAR</p>
          </button>
        </aside>
      </header>

      <table>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(item => (
            <tr>
              <td>
                <span>{item.title}</span>
              </td>
              <td>
                <span>
                  {item.duration} {item.duration === 1 ? 'mês' : 'meses'}
                </span>
              </td>
              <td>
                <span>R${item.price},00</span>
              </td>
              <td>
                <Buttons>
                  <EditButton
                    onClick={() => {
                      history.push(`plans/${item.id}/edit`);
                    }}
                  >
                    editar
                  </EditButton>
                  <DelButton
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    apagar
                  </DelButton>
                </Buttons>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
