import './index.sass'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ReactComponent as IconArrowRight } from './arrowRight.svg'
import { ReactComponent as IconArrowLeft } from './arrowLeft.svg'

const DataItem = ({ 
  children,
  state,
  handleClick,
  hasArrowRight=false,
  hasArrowLeft=false,
  type
}) => {
  const classList = ['DateFilter__item']
  if (state)
    classList.push('active') 
  if (hasArrowRight) 
    classList.push('right-arrow')

  return (
    <div className="button_wrap">
      <button
        onClick={() => handleClick(children, type)}
        className={classList.join(' ')}>
        { hasArrowLeft && 
          <IconArrowLeft/>
        }
        {children}
      </button>
      { hasArrowRight && 
        <button className="icon-right">
          {<IconArrowRight/>}
        </button>
      }
    </div>
  )
}

const DateFilter = () => {

  const theme = useSelector(state => state.theme)

  const [data, setData] = useState({
    state: true,
    name: 'За все время',
    years: [
      { 
        state: false,
        name: '2017',
        months: [ 
          { 
            state: false,
            name: '01',
            weeks: [{state: false, name: '1'}, {state: false, name: '7'}, {state: false, name: '14'}, {state: false, name: '21'}, {state: false, name: '28'}] 
          }, 
          { 
            state: false,
            name: '02',
            weeks: [{state: false, name: '1'}, {state: false, name: '7'}, {state: false, name: '14'}, {state: false, name: '21'}, {state: false, name: '28'}] 
          }, 
          { 
            state: false,
            name: '03',
            weeks: [{state: false, name: '1'}, {state: false, name: '7'}, {state: false, name: '14'}, {state: false, name: '21'}, {state: false, name: '28'}] 
          }, 
        ]
      },
      { 
        state: false,
        name: '2018',
        months: [ 
          { 
            state: false,
            name: '01',
            weeks: [{state: false, name: '1'}, {state: false, name: '7'}, {state: false, name: '14'}, {state: false, name: '21'}, {state: false, name: '28'}] 
          }, 
          { 
            state: false,
            name: '02',
            weeks: [{state: false, name: '1'}, {state: false, name: '7'}, {state: false, name: '14'}, {state: false, name: '21'}, {state: false, name: '28'}] 
          }, 
          { 
            state: false,
            name: '03',
            weeks: [{state: false, name: '1'}, {state: false, name: '7'}, {state: false, name: '14'}, {state: false, name: '21'}, {state: false, name: '28'}] 
          }, 
        ]
      },
      { 
        state: false,
        name: '2019',
        months: [ 
          { 
            state: false,
            name: '01',
            weeks: [{state: false, name: '1'}, {state: false, name: '7'}, {state: false, name: '14'}, {state: false, name: '21'}, {state: false, name: '28'}] 
          }, 
          { 
            state: false,
            name: '02',
            weeks: [{state: false, name: '1'}, {state: false, name: '7'}, {state: false, name: '14'}, {state: false, name: '21'}, {state: false, name: '28'}] 
          }, 
          { 
            state: false,
            name: '03',
            weeks: [{state: false, name: '1'}, {state: false, name: '7'}, {state: false, name: '14'}, {state: false, name: '21'}, {state: false, name: '28'}] 
          }, 
        ]
      },
    ]
  })

  function changeSelect(value, type) {
    setData(prev => {
      prev.state = false

      prev.years.forEach(year => {
        year.state = false
        year.months.forEach(month => {
          month.state = false
          month.weeks.forEach(week => week.state = false)
        })
      })

      return prev
    })
  }

  return (
    <div className={`${theme} DateFilter`}>
      <DataItem state={data.state} type='all' handleClick={(children, type) => changeSelect(children, type)}>
        {data.name}
      </DataItem>
      { 
        data.years.map((year, key) => {
          return (
            <DataItem 
              handleClick={(children, type) => changeSelect(children, type)}
              type='year'
              key={key} 
              state={year.state} 
              hasArrowRight>
              {year.name}
            </DataItem>
          )
        })
      }
    </div>
  )
}
 
export default DateFilter