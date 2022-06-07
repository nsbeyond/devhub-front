import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #000;
`
const Footer = React.forwardRef(({ href }, ref) => {
  return (
    <div>
      Copyright{' '}
      <a href={href} ref={ref}>
        devhub.in.th
      </a>
    </div>
  )
})

export default Footer
