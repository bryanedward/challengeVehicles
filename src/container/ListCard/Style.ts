import styled from "styled-components";

export const ListCards = styled.div`
  overflow: scroll;
  height: 100%;
`;

export const ButtonAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 5rem;
  height: 5rem;
  right: 0;
  bottom: 0;
  margin: 0 1rem 4rem 0;
  border-radius: 50%;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
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

  @media (min-width: 769px) {
    margin: 0 1.2rem 1.2rem 0;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 2%;
  width: 100%;
  justify-content: center;
  display: flex;
`;
