import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import { createTheme , ThemeProvider} from '@mui/material/styles';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import { store } from './store/store.ts'
import MyRouter from './router/MyRouter.tsx';
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
    <Provider store={store}>
    <ThemeProvider theme={theme}> 

      <MyRouter />

    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
