import styled from "styled-components";
import SignInForm from "../Forms/SignInForm";
import Title from "../UI/Title";
import { UserIcon } from "../../icons/icons";


const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  width: 100%;
  height: 100dvh;
  max-width: 425px;

  margin: 0 auto;
`

const StyledUserIcon = styled(UserIcon)`
  color: var(--accent);

  width: 64px;
  height: 64px;

  margin: 0 auto;
`

const Description = styled.p`
  font-family: var(--font-family);
  font-weight: 100;
  font-size: 18px;

  line-height: 22px;
  
  opacity: .2;

  text-align: center;
`

function SignIn () {
  return (
    <MainStyled>
      <StyledUserIcon />
      <Title>
        Welcome<br/>to WebChat
      </Title>
      <SignInForm />
      <Description>
        By continuing, you agree<br/>with the <a href="#">platform rules</a>
      </Description>
    </MainStyled>
  )
}

export default SignIn