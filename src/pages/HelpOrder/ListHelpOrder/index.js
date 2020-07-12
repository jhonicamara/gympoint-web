import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  Main,
  Container,
  Buttons,
  AnswerButton,
  Background,
  ContainerInfo,
  Question,
  ButtonAnswer,
  CloseButton,
} from './styles';

const schema = Yup.object().shape({
  answer: Yup.string().required('A resposta é obrigatória'),
});

export default function ListHelpOrder() {
  const [helpOrders, setHelpOrders] = useState([]);
  const [visible, setVisible] = useState(false);
  const [userId, setUserId] = useState(null);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('help-orders');
      setHelpOrders(response.data);
    }
    loadHelpOrders();
  }, []);

  async function handleSubmit({ answer }) {
    try {
      await api.put(`/help-orders/${userId}/answer`, { answer });
      toast.success('Resposta enviada com sucesso');
    } catch (error) {
      console.tron.log(error);
      toast.error('Não foi possível realizar a operação');
    }
  }

  return (
    <Main>
      <Container>
        <header>
          <strong>Pedidos de auxílio</strong>
        </header>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
            </tr>
          </thead>
          <tbody>
            {helpOrders.map(item => (
              <tr>
                <td>
                  <span>{item.student.name}</span>
                </td>
                <td>
                  <Buttons>
                    <AnswerButton
                      onClick={() => {
                        setUserId(item.id);
                        setQuestion(item.question);
                        setVisible(true);
                      }}
                    >
                      responder
                    </AnswerButton>
                  </Buttons>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

      {visible && (
        <Background>
          <ContainerInfo onClick={() => {}}>
            <Question>
              <strong>PERGUNTA DO ALUNO</strong>
              <p>{question}</p>
            </Question>
            <Form schema={schema} autoComplete="off" onSubmit={handleSubmit}>
              <strong>SUA RESPOSTA</strong>
              <Textarea name="answer" />

              <ButtonAnswer type="submit">Responder aluno</ButtonAnswer>
            </Form>
          </ContainerInfo>
          <CloseButton
            type="button"
            onClick={() => {
              setUserId(null);
              setQuestion('');
              setVisible(false);
            }}
          >
            Fechar
          </CloseButton>
        </Background>
      )}
    </Main>
  );
}
