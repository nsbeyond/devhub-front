import React from 'react'
import styled from 'styled-components'
import LoadingSVG from '../SVG/Loading.SVG'

const ButtonContainer = styled.button`
  font-family: ${(props) =>
    props.fontFamily ? `${props.fontFamily}` : 'Maitree, sans-serif'};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '18px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  color: ${(props) => (props.color ? props.color : '#fff')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#8860E9')};
  width: ${(props) => (props.width ? `${props.width}px` : '150px')};
  height: ${(props) => (props.height ? `${props.height}px` : '42px')};
  padding: 5px;
  margin-left: 2.5px;
  margin-right: 2.5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  -webkit-border-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#00abeb),
      to(#fff),
      color-stop(0.5, #fff),
      color-stop(0.5, #66cc00)
    )
    21 30 30 21 repeat repeat;
  border-radius: 20px;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : '#000;')};
  box-sizing: border-box;
  &:hover {
    animation: ${(props) => props.hoverAnimationStyle};
    color: ${(props) => (props.hoverColor ? props.hoverColor : '#fff')};
    background-color: ${(props) =>
      props.hoverBgColor ? props.hoverBgColor : '#04cd8c'};
    border: ${(props) => (props.borderSize ? props.borderSize : '1px')} solid
      ${(props) => (props.borderColor ? props.borderColor : '#000;')};
    transition: all 0.3s ease-out;
  }
  &:active {
    animation: ${(props) => props.hoverAnimationStyle};
    color: ${(props) => (props.hoverColor ? props.hoverColor : '#fff')};
    background-color: ${(props) =>
      props.hoverBgColor ? props.hoverBgColor : '#04cd8c'};
    border: ${(props) => (props.borderSize ? props.borderSize : '1px')} solid
      ${(props) => (props.borderColor ? props.borderColor : '#000;')};
  }
  &:disabled {
    background-color: ${(props) =>
      props.bgColor ? `${props.bgColor}` : '#000;'};
    border: none;
  }
`

const Button = React.forwardRef(
  (
    {
      type = 'button',
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
      borderSize = '1px',
      onClick = () => {},
      isLoading = false,
      disabled = false,
    },
    ref
  ) => {
    return (
      <ButtonContainer
        type={type}
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
        disabled={disabled || !!isLoading}
        ref={ref}
      >
        {isLoading && <LoadingSVG />}
        {!isLoading && children}
      </ButtonContainer>
    )
  }
)

export default Button
