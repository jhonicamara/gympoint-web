import React, { useState, useEffect, useMemo } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { format, addMonths, parseISO } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import Select from '~/components/Select';

import { Content, Container, BackButton, SaveButton } from './styles';

const schema = Yup.object().shape({
  student_id: Yup.number('Estudante inválido')
    .required('Campo obrigatório')
    .typeError('Estudante inválido'),
  plan_id: Yup.number('Plano inválido')
    .required('Campo obrigatório')
    .typeError('Plano inválido'),
  start_date: Yup.date('Data inválida').required('Campo obrigatório'),
});

export default function NewEnroll() {
  const [plans, setPlans] = useState([]);
  const [planSelected, setPlanSelected] = useState(null);
  const [students, setStudents] = useState([]);
  const [studentSelected, setStudentSelected] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const enrollment = {
    student_id: 2,
    plan_id: 2,
    start_date: '2020-02-23',
  };

  useEffect(() => {
    async function loadStudents(search) {
      const response = await api.get('students', {
        params: {
          search,
        },
      });
      setStudents(response.data);
    }

    async function loadPlans() {
      const response = await api.get('plans');
      setPlans(response.data);
    }

    loadStudents();
    loadPlans();
  }, []);

  const totalPrice = useMemo(() => {
    if (planSelected) {
      return planSelected.duration * planSelected.price;
    }
    return '';
  }, [planSelected]);

  const end_date = useMemo(() => {
    if (startDate && planSelected) {
      return format(addMonths(startDate, planSelected.duration), 'dd/MM/yyyy');
    }
    return '';
  }, [planSelected, startDate]);

  async function handleSubmit({ student_id, plan_id, start_date }) {
    try {
      await api.post('enrollments', {
        student_id,
        plan_id,
        start_date,
      });
      toast.success('Matrícula cadastrada com sucesso');
    } catch (error) {
      toast.error('Ocorreu um erro, tente novamente');
      console.log(error.response.data);
    }
  }

  return (
    <Content>
      <header>
        <strong>Cadastro de Matrícula</strong>
        <aside>
          <BackButton type="button" onClick={() => history.push('/enrolls')}>
            <MdKeyboardArrowLeft size={20} />
            <p>VOLTAR</p>
          </BackButton>
          <SaveButton type="submit" form="formplans">
            <MdCheck size={20} />
            <p>SALVAR</p>
          </SaveButton>
        </aside>
      </header>

      <Container>
        <Form
          id="formplans"
          schema={schema}
          autoComplete="off"
          initialData={enrollment}
          onSubmit={handleSubmit}
        >
          <p>ALUNO</p>
          <Select
            name="student_id"
            options={students}
            value={studentSelected}
            onChange={e => setStudentSelected(e)}
            getOptionValue={option => option.id}
            getOptionLabel={option => option.name}
          />
          <div className="rowTable">
            <div className="row">
              <p>PLANO</p>
              <Select
                name="plan_id"
                options={plans}
                value={planSelected}
                getOptionLabel={option => option.title}
                onChange={e => setPlanSelected(e)}
              />
            </div>
            <div className="row">
              <p>DATA DE INÍCIO</p>
              <Input
                name="start_date"
                type="date"
                onChange={e => setStartDate(parseISO(e.target.value))}
              />
            </div>
            <div className="row">
              <p>DATA DE TERMINO</p>
              <Input
                className="date"
                type="text"
                readOnly="readonly"
                name="end_date"
                value={end_date}
              />
            </div>
            <div className="row">
              <p>PREÇO TOTAL</p>
              <Input
                className="price"
                type="text"
                readOnly="readonly"
                name="total_price"
                value={totalPrice}
              />
            </div>
          </div>
        </Form>
      </Container>
    </Content>
  );
}
