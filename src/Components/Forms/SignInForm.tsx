import { Form } from "react-router-dom"

import Button from "../UI/Button"
import Input from "../UI/Input"
import styled from "styled-components"

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  
  gap: 20px;
  margin: 0 20px;
`

function SignInForm() {
  return (
    <FormStyled method="GET" action="/">
      <Input 
        type="text" placeholder="Your username..." 
        aria-label="Your username..." aria-disabled="false"
        autoCapitalize="none" dir="ltr" autoComplete="username"
        tabIndex={0} spellCheck id="username"
      />
      <Input 
        type="password" placeholder="Your password..." 
        aria-label="Your password..." aria-disabled="false"
        autoCapitalize="none" dir="ltr" autoComplete="password"
        tabIndex={0} spellCheck id="password"
      />
      <Button 
        $backgroundColor="var(--accent)" 
        $fontColor="var(--primary)"
      >
        Log in
      </Button>
    </FormStyled>
  )
}

export default SignInForm