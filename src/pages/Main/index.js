import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { MainContainer, Form, FormInput, FormButton } from "./styles";
import api from "../../services/api";

function Main({ history }) {
  const [boxName, setBoxName] = useState("");

  const handleChange = event => {
    setBoxName(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const response = await api.post("boxes", { title: boxName });

    history.push(`box/${response.data._id}`);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="RocketBox" />
        <FormInput
          placeholder="Criar um box"
          value={boxName}
          onChange={handleChange}
        />
        <FormButton type="submit">Criar</FormButton>
      </Form>
    </MainContainer>
  );
}

export default Main;
