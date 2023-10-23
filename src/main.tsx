import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './themeContext.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>

)
