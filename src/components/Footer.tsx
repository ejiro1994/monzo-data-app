import React from 'react'
import styled from 'styled-components'

type Props = {}

const Footer = (props: Props) => {
  return <Container>Footer</Container>
}

export default Footer

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  grid-column: 1 / 4;
  border: 1px solid #000;
`
