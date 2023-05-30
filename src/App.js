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
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: ({ownerState, theme}) => ({
            width: '2rem',
            height: '2rem',
            aspectRatio: '1/1',
            color: '#000',
            ...(ownerState.func === 'repeat' && {
              backgroundColor: '#DCDCDC',
              '&:hover': {
                backgroundColor: '#DCDCDC',
              },
              '&.Mui-selected': {
                backgroundColor: '#5364FF',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#5364FF',
                  color: '#fff',
                },
              },  
            }),
            ...(ownerState.func === 'color' && {
              border: 'none',
              backgroundColor: `${ownerState.value}2A`,
              color: 'transparent',
              '&:hover': {
                backgroundColor: `${ownerState.value}2A`,
                color: 'transparent',
              },
              '&.Mui-selected': {
                backgroundColor: `${ownerState.value}2A`,
                '&>img': {
                  display: 'block',
                },
                '&:hover': {
                  backgroundColor: `${ownerState.value}2A`,
                },
              },
            }),
          }),
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            display: 'flex',
            gap: '0.5rem',
          },
          grouped: ({ownerState, theme}) => ({
            '&:not(:first-of-type)': {
              marginLeft: 0,
              borderRadius: 999,
              borderLeft: ownerState.func === 'color' ? 'none' : '1px solid rgba(0, 0, 0, 0.12)',
            },
            '&:not(:last-of-type)': {
              borderRadius: 999,
            },
          }),
        },
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
