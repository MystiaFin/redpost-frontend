import LeftNavbar from '../components/LeftNavbar'
import { useState, useEffect } from 'react'
import Main from '../components/Main'
import RightNavBar from '../components/RightNavBar'

function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='bg-black min-h-screen text-white'>
      <div className="flex max-w-screen-lg mx-auto">
        <LeftNavbar />
        <div className="flex-grow">
          <header className={`sticky top-0 z-10 transition-colors duration-200 rounded-b-xl ${
            isScrolled ? 'bg-gray-900 bg-opacity-70 backdrop-blur-md' : 'bg-black'
          }`}>
            <nav className="flex">
              <a className="flex-1 py-2 text-center font-bold">Following</a>
              <a className="flex-1 py-2 text-center font-bold">Group Posts</a>
            </nav>
          </header>
          <Main />
        </div>
        <div className="hidden lg:block lg:w-80">
          <RightNavBar />
        </div>
      </div>
    </div>
  )
}

export default Home