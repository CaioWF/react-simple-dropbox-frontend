import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
`;
export const FormInput = styled.input`
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 20px;
  margin-top: 30px;
`;
export const FormButton = styled.button`
  height: 48px;
  background-color: #7159c1;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 20px;
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    opacity: 0.8;
  }
`;
