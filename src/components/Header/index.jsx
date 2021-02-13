import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../actions/'
import Logo from '../Logo'
import { ReactComponent as MenuArrow } from './arrowDown.svg'
import { ReactComponent as SunIcon } from './sun.svg'
import { ReactComponent as MoonIcon } from './moon.svg'
import './index.sass'

const Header = () => {
  const theme = useSelector(state => state.theme)

  return (  
    <div className={`Header ${theme}`}>
      <div className="container">
        <Logo />
        <NavBar>
          <NavItem icon={ <MenuArrow /> }>
            <DropdownMenu />
          </NavItem>
        </NavBar>
      </div>
    </div>
  )
}

const NavBar = ({ children }) => {
  return (
    <nav className='NavBar'>
      <ul className='NavBar-nav'>
        { children }
      </ul>
    </nav>
  )
}

const NavItem = ({ icon, children }) => {
  const [open, setOpen] = useState(false)
  const navItem_ref = useRef(null)

  useEffect(() => {
    document.addEventListener("mousedown", event => {
      if (navItem_ref.current && !navItem_ref.current.contains(event.target)) 
        setOpen(false)
    })

    return () => {
      document.removeEventListener("mousedown", event => {
        if (navItem_ref.current && !navItem_ref.current.contains(event.target)) 
          setOpen(false)
      })
    }
}, [navItem_ref])

  return (
    <li className="NavItem" ref={navItem_ref}>
      <button 
        className={open ? 'NavItem-button active' : 'NavItem-button'} 
        onClick={() => setOpen(!open)}
      >
        { icon }
      </button>

      {open && children}
    </li>
  )
}

const DropdownMenu = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)

  return (
    <div className="DropdownMenu">
      <button className='DropdownMenu-item' onClick={() => dispatch(changeTheme())}>
        Сменить тему
        <span className="icon-right">
          {theme === 'light' && <SunIcon/>}
          {theme === 'dark' && <MoonIcon/>}
        </span>
      </button>
    </div>
  )
}
 
export default Header