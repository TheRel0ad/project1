const ThemeReducer = (state = 'dark', action) => {
  switch(action.type) {
    case 'CHANGE_THEME':
      return state === 'dark' ? 'light' : 'dark'
    default: 
      return state 
  }
}

export default ThemeReducer