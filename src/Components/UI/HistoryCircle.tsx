import styled from "styled-components";

const StyledCircle = styled.div<{$borderColor?: string, $icon?: string}>`
  border-radius: 50%;

  background: url(${props => props.$icon || null});
  background-size: cover;

  width: 64px;
  height: 64px;

  border: 2px solid ${props => props.$borderColor || "transparent"};
`

export default StyledCircle