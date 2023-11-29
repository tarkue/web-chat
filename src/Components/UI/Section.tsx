import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

const StyledLink = styled(Link)`
  color: var(--accent);
  text-decoration: none;

  font-size: 16px;
  font-weight: 400;
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