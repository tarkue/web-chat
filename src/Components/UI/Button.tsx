import styled from "styled-components"

const Button = styled.button<{$backgroundColor?: string, $fontColor?: string}>`
  display: block;

  width: 100%;
  padding: 12px 0;
  text-align: center; 
  line-height: 26px;

  color: ${props => props.$fontColor || null};
  background: ${props => props.$backgroundColor || null};
`

export default Button;