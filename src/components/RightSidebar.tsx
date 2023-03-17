import styled from 'styled-components'
import { Card } from '../styled.card'

type Props = {}

const RightSidebar = (props: Props) => {
  return <Right>RightSidebar</Right>
}

export default RightSidebar

const Right = styled(Card)`
  grid-column: 3 / 4;
  margin: 1rem;
`
