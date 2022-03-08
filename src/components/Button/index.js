import styled from 'styled-components'

const Button = styled.button`
  font-family: ${props => props.fontFamily ? `${props.fontFamily}` : 'Maitree, sans-serif'};
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '18px' };
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal' };
  color: ${props => props.color ? props.color : '#fff' };
  background-color: ${props => props.bgColor ? props.bgColor : '#8860E9' };
  width: ${props => props.width ? `${props.width}px` : '150px' };
  height: ${props => props.height ? `${props.height}px` : '42px' };
  padding: 5px;
  margin: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  -webkit-border-image: -webkit-gradient(linear, left top, left bottom, from(#00abeb), to(#fff), color-stop(0.5, #fff), color-stop(0.5, #66cc00)) 21 30 30 21 repeat repeat;
  border-radius: 20px;
  border: 2px solid ${props => props.borderColor ? props.borderColor : '#000;'};
  transition: all 0.2s ease-out;
  box-sizing: border-box;
  &:hover {
    animation: ${props => props.hoverAnimationStyle};
    color: ${props => props.hoverColor ? props.hoverColor : '#fff' };
    background-color: ${props => props.hoverBgColor ? props.hoverBgColor : '#04cd8c' };
    border: ${props => props.borderSize ? props.borderSize : '2px' } solid ${props => props.borderColor ? props.borderColor : '#000;' };
  }
  &:active {
    animation: ${props => props.hoverAnimationStyle};
    color: ${props => props.hoverColor ? props.hoverColor : '#fff' };
    background-color: ${props => props.hoverBgColor ? props.hoverBgColor : '#04cd8c' };
    border: ${props => props.borderSize ? props.borderSize : '2px' } solid ${props => props.borderColor ? props.borderColor : '#000;' };
  }
  @keyframes shakeX {
    0%{
      transform: translateX(0)
    }
    25%{
      transform: translateX(1px);
    }
    50%{
      transform: translateX(-1px);
    }
    100%{
      transform: translateX(0px);
    }
  }
  
  @keyframes shakeY {
    0%{
      transform: translateY(0)
    }
    25%{
      transform: translateY(3px);
    }
    50%{
      transform: translateY(-3px);
    }
    100%{
      transform: translateY(0px);
    }
  }
`

const template = ({
  icon = null,
  children,
  fontFamily,
  fontSize,
  fontWeight,
  color,
  bgColor,
  width,
  height,
  hoverColor,
  hoverBgColor,
  hoverAnimationStyle = 'none',
  borderColor,
  borderSize = '2px',
  onClick = () => {},
}) => {
  return (
    <Button
      fontFamily={fontFamily} 
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      bgColor={bgColor}
      hoverColor={hoverColor}
      hoverBgColor={hoverBgColor}
      borderColor={borderColor}
      borderSize={borderSize}
      width={width}
      height={height}
      onClick={onClick}
      hoverAnimationStyle={hoverAnimationStyle}
    >
      {children}
    </Button>
  )
}

export default template;