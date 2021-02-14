import Header from "../../components/Header"
import './index.sass'
import { useSelector } from 'react-redux'
import DateFilter from "../../components/DateFilter"
import { useEffect, useState } from "react"

const App = () => {
  const theme = useSelector(state => state.theme)
  const [dataLoading, setDataLoading] = useState(true)

  return (
    <div className={`App ${theme}`}>
      <Header />

      <div className="center">
        <DateFilter />
      </div>

    </div>
  )
}

export default App