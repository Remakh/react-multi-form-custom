import styled, { css } from 'styled-components';

const Pill = styled.div`
  position: relative;
  
  width: ${props => props.pillSize}px;
  height: ${props => props.pillSize}px;
  border-radius: ${props => props.pillSize}px;
  background-color: ${props => props.inactiveColor};
  color: #FFFFFF;
  transition: all 0.4s;

  ${props => props.label && css`
  
    &:before {
      position: absolute;
      content: '${props.label}';
      width: 10px;
      text-transform: uppercase;
      font-size: 15px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}

  ${props => props.active && css`
  
    width: ${props => props.pillSize}px;
    height: ${props => props.pillSize}px;
    background-color: ${props.accentColor || '#70b88f'};
    color: #FFF;

  `}

  ${props => props.complete && css`
    width: 20px;
    height: 20px;
    background-color: ${props.accentColor || '#70b88f'};
    
    &:before {
      position: absolute;
      content: '✓';
      color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`

export default Pill;
