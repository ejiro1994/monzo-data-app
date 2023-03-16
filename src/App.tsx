import Dashboard from './Dashboard'

type Props = {}

const App = (props: Props) => {
  return (
    <>
      <header>header</header>
      <div className='left-sidebar'>Left Sidebar</div>
      <Dashboard></Dashboard>
      <div className='right-sidebar'>Right Sidebar</div>
      <footer>Footer</footer>
    </>
  )
}

export default App


