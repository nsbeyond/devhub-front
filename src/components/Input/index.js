import styled from 'styled-components'

const Input = styled.input`
  font-family: ${props => props.fontFamily ? `${props.fontFamily}` : 'Maitree, sans-serif'};
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '18px' };
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal' };
  color: ${props => props.color ? props.color : '#000' };
  background-color: ${props => props.bgColor ? props.bgColor : '#8860E9' };
  width: ${props => props.width ? `${props.width}px` : '100%' };
  height: ${props => props.height ? `${props.height}px` : '40px' };
  padding: 15px;
  margin-bottom: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  -webkit-border-image: -webkit-gradient(linear, left top, left bottom, from(#00abeb), to(#fff), color-stop(0.5, #fff), color-stop(0.5, #66cc00)) 21 30 30 21 repeat repeat;
  border-radius: 3px;
  border: 1px solid ${props => props.borderColor ? props.borderColor : '#0480c7;'};
  transition: all 0.2s ease-out;
  box-sizing: border-box;
  outline: none;
  &:focus {
    outline: none;
    animation: ${props => props.hoverAnimationStyle};
    color: ${props => props.hoverColor ? props.hoverColor : '#000' };
    background-color: ${props => props.hoverBgColor ? props.hoverBgColor : '#d6f3f9' };
    border: ${props => props.borderSize ? props.borderSize : '1px' } solid ${props => props.borderColor ? props.borderColor : 'red;' } !important;
  }
`

const template = ({
  icon = null,
  value,
  fontFamily,
  fontSize,
  fontWeight,
  color = "#000",
  bgColor,
  width,
  height,
  hoverColor,
  hoverBgColor,
  borderColor,
  borderSize = "1px",
  placeholder = "",
  type = "text",
  disabled,
  hidden,
  autocomplete = "off",
}) => {
  return (
    <Input
      type={type ? type : 'text'}
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
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      hidden={hidden}
      autoComplete={autocomplete}
    />
  )
}

export default template;