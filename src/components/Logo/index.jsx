import { useSelector } from "react-redux"
import './index.sass'

const Logo = () => {
  const theme = useSelector(state => state.theme)

  return (  
    <h1 className={`Logo ${theme}`}>Data Analyze</h1>
  )
}
 
export default Logo