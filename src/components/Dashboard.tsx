import React from 'react'
import styled from 'styled-components'
import { Card } from '../styled.card'
import Table from './Table'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <Container>
      <Header>header</Header>
      <Table></Table>
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
  grid-column: 2 / 3;
`

const Header = styled(Card)`
  margin-top: 1rem;
  min-height: 5rem;
`
