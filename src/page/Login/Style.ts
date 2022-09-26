import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Form = styled.div`
  background: #ee9ca7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffdde1,
    #ee9ca7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffdde1,
    #ee9ca7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 66%;
  border-radius: 0.5rem;
  padding: 3rem 1rem;

  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  & div {
    display: block;
  }

  & button {
    background-color: #ffdde1;
    width: 100%;
    margin-top: 1rem;
  }

  @media (min-width: 769px) {
    width: 20rem;
  }
`;
