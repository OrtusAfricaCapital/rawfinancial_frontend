import React, { useEffect, useState, createContext, useContext } from 'react'

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        // checks for a previous user preference in localStorage, and uses the browser's color scheme as a backup:
        const storedPref = window.localStorage.getItem('color-theme')
        if (typeof storedPref === 'string') {
            return storedPref
        }

        const userMedia = window.matchMedia('prefers-color-scheme:dark')
        if (userMedia.matches) {
            return 'dark'
        }
        return 'light' // light theme as the default;
    }
}
export const ThemeContext = createContext()

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme);
    const [screenSize, setScreenSize] = useState(undefined);

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement
        const isDark = rawTheme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(rawTheme)
        localStorage.setItem('color-theme', rawTheme)
    }

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme,screenSize, setScreenSize }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext);