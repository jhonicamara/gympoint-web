import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Buttons, EditButton, DelButton } from './styles';

function ListStudent() {
  const [students, setStudents] = useState([]);
  const [searchStudent, setSearchStudent] = useState('');

  async function loadStudents() {
    const response = await api.get('students');
    setStudents(response.data);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  useEffect(() => {
    async function loadStudentsSearch() {
      const response = await api.get('students', {
        params: {
          search: searchStudent,
        },
      });
      setStudents(response.data);
    }
    loadStudentsSearch();
  }, [searchStudent]);

  async function handleDelete(id) {
    try {
      // eslint-disable-next-line no-alert
      const result = window.confirm(
        'Tem certeza que deseja apagar esse aluno?'
      );
      console.tron.log(result);
      if (result === true) {
        await api.delete(`/students/${id}`);
        toast.success('Usuário deletado com sucesso');
        loadStudents();
      }
    } catch (error) {
      toast.error('Não foi possível realizar a operação');
    }
  }

  return (
    <Container>
      <header>
        <strong>Gerenciamento Alunos</strong>
        <aside>
          <button type="button" onClick={() => history.push('/newStudent')}>
            <MdAdd size={20} />
            <p>CADASTRAR</p>
          </button>
          <div className="input_icon">
            <MdSearch size={25} color="#999" />
            <input
              type="text"
              onChange={e => setSearchStudent(e.target.value)}
              placeholder="Buscar aluno"
            />
          </div>
        </aside>
      </header>

      <table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>EMAIL</th>
            <th>IDADE</th>
          </tr>
        </thead>
        <tbody>
          {students.map(item => (
            <tr>
              <td>
                <span>{item.name}</span>
              </td>
              <td>
                <span>{item.email}</span>
              </td>
              <td>
                <span>{item.age}</span>
              </td>
              <td>
                <Buttons>
                  <EditButton
                    onClick={() => {
                      history.push(`students/${item.id}/edit`);
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

export default ListStudent;
