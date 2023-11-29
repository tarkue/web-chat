import styled from "styled-components";
import Section from "../UI/Section";


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
      <Section 
        title="Histories"
        linkText="add new"
        href="#"
      >
        
      </Section>

      <Section 
        title="Messages"
        linkText="write now"
        href="#"
      >

      </Section>
    </MainStyled>
  )
}

export default Main