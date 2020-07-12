import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import { Content, BackButton, SaveButton, Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O nome é obrigatório'),
  duration: Yup.number().required('A duração é obrigatória'),
  price: Yup.number().required('O preço é obrigatório'),
});

export default function EditPlan({ match }) {
  const { id } = match.params;
  const [plan, setPlan] = useState({});
  const [durationInput, setDurationInput] = useState(0);
  const [priceInput, setPriceInput] = useState(0);

  useEffect(() => {
    async function loadPlan() {
      const response = await api.get(`/plans/${id}`);
      setPlan(response.data);
      setDurationInput(response.data.duration);
      setPriceInput(response.data.price);
    }

    loadPlan();
  }, [id]);

  const totalPrice = useMemo(() => durationInput * priceInput, [
    durationInput,
    priceInput,
  ]);

  async function handleSubmit(data) {
    try {
      await api.put(`/plans/${id}`, data);
      toast.info('Plano atualizado com sucesso');
    } catch (error) {
      toast.error('Ocorreu um erro tente novamente');
    }
  }

  return (
    <Content>
      <header>
        <strong>Cadastro de Plano</strong>
        <aside>
          <BackButton type="button" onClick={() => history.push('/plans')}>
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
          initialData={plan}
          schema={schema}
          onSubmit={handleSubmit}
        >
          <p>TÍTULO DO PLANO</p>
          <Input name="title" />

          <div>
            <div className="row">
              <p>DURAÇÃO (em meses)</p>
              <Input
                onChange={e => setDurationInput(e.target.value)}
                name="duration"
              />
            </div>
            <div className="row">
              <p>PREÇO MENSAL</p>
              <Input
                onChange={e => setPriceInput(e.target.value)}
                name="price"
              />
            </div>
            <div className="row">
              <p>PREÇO TOTAL</p>
              <Input
                className="price"
                type="text"
                readonly="readonly"
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

EditPlan.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
