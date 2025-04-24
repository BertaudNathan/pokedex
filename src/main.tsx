import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme , ThemeProvider} from '@mui/material/styles';
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff3636',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: '#3b3b3b',
    },
  },
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}> 
    <App />
    </ThemeProvider>
  </StrictMode>,
)
