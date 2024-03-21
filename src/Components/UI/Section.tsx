import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 40px);
  
  margin: 0 auto;
  margin-bottom: 20px;
`

const StyledLink = styled(Link)`
  color: var(--accent);
  text-decoration: none;

  font-size: 16px;
  font-weight: 399;
`

interface LayoutProps  { 
  children: React.ReactNode,
  title: string,
  linkText: string,
  href: string

}

function Section(props: LayoutProps) {
  return (
    <section>
      <Wrapper>
        <SectionTitle>
          { props.title }
        </SectionTitle>
        <StyledLink to={props.href}>{ props.linkText }</StyledLink>
      </Wrapper>
      { props.children }
    </section>
  )
}

export default Section