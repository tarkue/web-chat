import styled from "styled-components";
import SectionTitle from "../UI/SectionTitle";



const MainStyled = styled.main`
  display: flex;
  flex-direction: column;

  gap: 20px;

  width: 100%;
  height: 100dvh;
  max-width: 425px;

  margin: 0 auto;
`

function Main() {
  return (
    <MainStyled>
      <section>
        <SectionTitle>
          Histories
        </SectionTitle>
      </section>
      <section>
        <SectionTitle>
          Messages 
        </SectionTitle>
      </section>
    </MainStyled>
  )
}

export default Main