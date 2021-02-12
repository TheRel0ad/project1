import { useSelector } from 'react-redux'
import Logo from '../Logo'
import './index.sass'

const Header = () => {
  const theme = useSelector(state => state.theme)

  return (  
    <div className={`Header ${theme}`}>
      <div className="container">
        <Logo />
      </div>
    </div>
  )
}
 
export default Header