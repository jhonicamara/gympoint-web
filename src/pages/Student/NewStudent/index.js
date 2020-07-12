import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import { Content, BackButton, SaveButton, Container } from './styles';
import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  age: Yup.number().required('A idade é obrigatória'),
  weight: Yup.number().required('O peso é obrigatório'),
  height: Yup.number().required('A altura é obrigatória'),
});

export default function NewStudent() {
  async function handleSubmit({ name, email, age, weight, height }) {
    try {
      await api.post('students', {
        name,
        email,
        age,
        weight,
        height,
      });
      toast.success('Aluno cadastrado com sucesso');
    } catch (error) {
      toast.error('Aluno cadastrado com sucesso');
    }
  }

  return (
    <Content>
      <header>
        <strong>Cadastro de Aluno</strong>
        <aside>
          <BackButton type="button" onClick={() => history.push('/students')}>
            <MdKeyboardArrowLeft size={20} />
            <p>VOLTAR</p>
          </BackButton>
          <SaveButton type="submit" form="formstudent">
            <MdCheck size={20} />
            <p>SALVAR</p>
          </SaveButton>
        </aside>
      </header>

      <Container>
        <Form autoComplete="off"id="formstudent" schema={schema} onSubmit={handleSubmit}>
          <p>NOME COMPLETO</p>
          <Input name="name" placeholder="John Doe" />

          <p>ENDEREÇO DE E-MAIL</p>
          <Input name="email" type="email" placeholder="exemplo@gmail.com" />

          <div>
            <div className="row">
              <p>IDADE</p>
              <Input name="age" />
            </div>

            <div className="row">
              <p>PESO (em kg)</p>
              <Input name="weight" />
            </div>
            <div className="row">
              <p>ALTURA</p>
              <Input name="height" />
            </div>
          </div>
        </Form>
      </Container>
    </Content>
  );
}
