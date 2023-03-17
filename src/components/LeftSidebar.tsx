import styled from 'styled-components'
import { Card } from '../styled.card'

type Props = {}

const LeftSidebar = (props: Props) => {
  return <Left>LeftSidebar</Left>
}

export default LeftSidebar

const Left = styled(Card)`
  grid-column: 1 / 2;
  margin: 1rem;
`
