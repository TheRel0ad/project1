import Header from "../../components/Header"
import './index.sass'
import { useSelector } from 'react-redux'

const App = () => {
  const theme = useSelector(state => state.theme)
  
  return (
    <div className={`App ${theme}`}>
      <Header />
    </div>
  )
}

export default App