import React, { Dispatch, SetStateAction } from 'react';
import { darkModeAssests, lightModeAssests, modes } from './mode'

export const ThemeContext = React.createContext({
  themeType: 'dark-mode',
  theme: modes['dark-mode'],
});

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState('dark-mode');
  console.log('current theme', currentTheme)
  console.log('current theme', modes[currentTheme])

  return (
    <ThemeContext.Provider value={{
      themeType: currentTheme,
      theme: modes[currentTheme],
      setCurrentTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext);