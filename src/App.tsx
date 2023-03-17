import styled from 'styled-components'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import { GlobalStyles } from './styled.index'

type Props = {}

const App = (props: Props) => {
  return (
    <Container>
      <Header />
      <LeftSidebar />
      <Dashboard />
      <RightSidebar />
      <Footer />
    </Container>
  )
}

export default App

const Container = styled(GlobalStyles)`
  display: grid;
  max-height: 100vh;
  grid-template: auto 1fr auto / auto 1fr auto;
  background-color: #b6c1c9;
`
