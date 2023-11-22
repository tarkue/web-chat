import styled from "styled-components"
import { InputHTMLAttributes } from "react"


const CustomInput = styled.input`
  box-sizing: border-box;

  width: 100%;
  padding: 12px 18px;

  line-height: 26px;
  font-size: 16px;

  border-radius: 18px;
  border: none;

  text-overflow: ellipsis;

  background-color: var(--secondary);
  color: var(--primary);

  &::placeholder {
    opacity: .5;
  }

  -internal-autofill-selected {
    background-color: var(--secondary);
    color: var(--primary);
  }
`


const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <CustomInput {...props}/>
)

export default Input;