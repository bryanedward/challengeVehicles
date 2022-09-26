import { ListCard } from "./ListCard/ListCard";
import { ContainerPrincipal, Filter, Main } from "./Style";
export const Principal = () => {
  return (
    <ContainerPrincipal>
      <Filter>
        <h3>APP VEHICLES </h3>
      </Filter>
      <Main>
        <ListCard />
      </Main>
    </ContainerPrincipal>
  );
};
