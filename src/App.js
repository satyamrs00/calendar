import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Calendar from './pages/Calendar';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#5364FF',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Calendar />
    </ThemeProvider>
  );
}

export default App;
