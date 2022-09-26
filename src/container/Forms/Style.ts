import styled from "styled-components";

export const Form = styled.form`
  box-sizing: content-box;
  display: flex;
  width: 18rem;
  flex-direction: column;
  gap: 0.5rem;
  & div {
    width: 100%;
    margin: 0.6rem 0;
  }
`;

export const InputForm = styled.input`
  display: block;
  border: 0;
  border-radius: 0.6rem;
`;

export const ButtonForm = styled.button`
  outline: none;
  border: none;
  padding: 0.5rem;
  width: 100%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: #fff;
  background-color: #2e7d32;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;
