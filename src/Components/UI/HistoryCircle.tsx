import styled from "styled-components";

const StyledCircle = styled.div<{$borderColor?: string, $icon?: string}>`
  border-radius: 50%;

  background: url($icon);

  width: 64px;
  height: 64px;

  border: 2px solid ${props => props.$borderColor || null};
`

export default StyledCircle