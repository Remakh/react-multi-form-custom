import styled, { css } from 'styled-components'

const Line = styled.div`
  height: 7px;
  background-color: #f2f0ed;
  flex: 1;
  transition: all 0.4s;

  ${props => props.complete && css`
    background-color: ${props => props.accentColor || '#70b88f'};
    height: ${props => props.lineHeight || '10px'};
  `}
`

export default Line
