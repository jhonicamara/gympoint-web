import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import { MdAdd, MdCheckCircle } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Buttons, EditButton, DelButton } from './styles';

export default function ListEnroll() {
  const [enrolls, setEnrolls] = useState([]);

  async function loadEnrolls() {
    const response = await api.get('enrollments');
    const data = response.data.map(enroll => ({
      ...enroll,
      startDate: format(parseISO(enroll.start_date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
      endDate: format(parseISO(enroll.end_date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    }));
    setEnrolls(data);
  }

  useEffect(() => {
    loadEnrolls();
  }, []);

  async function handleDelete(id) {
    try {
      // eslint-disable-next-line no-alert
      const result = window.confirm(
        'Tem certeza que deseja apagar essa matrícula?'
      );
      console.tron.log(result);
      if (result === true) {
        await api.delete(`/enrollments/${id}`);
        toast.success('Matrícula deletada com sucesso');
        loadEnrolls();
      }
    } catch (error) {
      toast.error('Não foi possível realizar a operação');
    }
  }

  return (
    <Container>
      <header>
        <strong>Gerenciamento Matrículas</strong>
        <aside>
          <button type="button" onClick={() => history.push('/newEnroll')}>
            <MdAdd size={20} />
            <p>CADASTRAR</p>
          </button>
        </aside>
      </header>

      <table>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INÍCIO</th>
            <th>TÉRMINO</th>
            <th>ATIVA</th>
          </tr>
        </thead>
        <tbody>
          {enrolls.map(item => (
            <tr>
              <td>
                <span>{item.student.name}</span>
              </td>
              <td>
                <span>{item.plan.title}</span>
              </td>
              <td>
                <span>{item.startDate}</span>
              </td>
              <td>
                <span>{item.endDate}</span>
              </td>
              <td>
                {' '}
                {item.active ? (
                  <MdCheckCircle size={20} color="#42CB59" />
                ) : (
                  <MdCheckCircle size={20} color="#ddd" />
                )}{' '}
              </td>
              <td>
                <Buttons>
                  <EditButton
                    onClick={() => {
                      history.push(`enrolls/${item.id}/edit`);
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
