import React from "react";
import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {

  const login = () => {
    const globalObjetc = {
      nome: props.nome,
      foto: props.fotoPerfil
    }
    props.setDados(globalObjetc)
    props.setPageFlow(2);
  };

  const onChangeNome = (event) => {
    props.setNome(event.target.value)
  };

  const onChangeFoto = (event) => {
    props.setFoto(event.target.value)
  };

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} />
          <Input type={"text"} onChange={onChangeNome} value={props.nome} /> {/* */}
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} />
          <Input type={"text"} onChange={onChangeFoto} value={props.foto} /> {/**/}
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
