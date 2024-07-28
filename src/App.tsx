import LeftNavbar from './components/LeftNavbar'
import Main from './components/Main'
import RightNavBar from './components/RightNavBar'

function App() {
  return (
    <div className='bg-black'>
      <div className="flex max-w-screen-xl mx-auto">
        <LeftNavbar />
        <div className="flex-grow overflow-hidden">
          <Main />
        </div>
        <div className="hidden lg:block w-80">
          <RightNavBar />
        </div>
      </div>
    </div>
  )
}


export default App


