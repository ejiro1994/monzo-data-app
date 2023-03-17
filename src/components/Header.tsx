import React from 'react'
import styled from 'styled-components'

type Props = {}

const Header = (props: Props) => {
  return (
    <Container>Header</Container>
  )
}

export default Header

const Container = styled.div`
      background: lightpink;
  grid-column: 1 / 4;
`