import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  padding: 0 0.5rem;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
`;

export const MainCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.div`
  color: rebeccapurple;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bolder;
  & small {
    font-weight: 500;
  }
`;

export const CardStyle = styled.div`
  margin: 1rem;
  border-radius: 1rem;
  position: relative;
  height: 12rem;
  width: 20rem;
  &:hover .body {
    cursor: pointer;
    transform: rotateY(-180deg);
  }
`;

export const CarBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 700ms ease;
  transform-style: preserve-3d;
`;

export const CardFront = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: #c1a8da;
  backface-visibility: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
`;

export const CardBack = styled.div`
  height: 100%;
  position: absolute;
  border-radius: 1rem;
  width: 100%;
  background-color: antiquewhite;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CardDate = styled.div`
  text-align: center;
`;

export const ActionsButton = styled.div`
  background-color: antiquewhite;
  position: absolute;
  bottom: -4%;
  right: -3%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;

export const GroupButton = styled.div`
  display: flex;
  gap: 1rem;

  & div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ActionButtonEdit = styled.div`
  background: #11998e;
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);
  background: linear-gradient(to right, #38ef7d, #11998e);
`;

export const ActionsButtonDelete = styled.div`
  background: #ed213a;
  background: -webkit-linear-gradient(to right, #93291e, #ed213a);
  background: linear-gradient(to right, #93291e, #ed213a);
`;
