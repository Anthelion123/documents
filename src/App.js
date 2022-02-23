import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import DocAppBar from './components/DocAppBar';
import DocDrawer from './components/DocDrawer';
import DocProgress from './components/DocProgress';
import DocPdf from './components/DocPdf';

import useInterval from "./utils/useInterval";

const mdTheme = createTheme();

export default function Documents() {

  const [open, setOpen] = React.useState(false);
  const [pomoState, setPomoState] = React.useState({
    timerRun: false,
    session: null,
    timeRemaining: null,
    pomoCount: 3,
  });

  const focusDuration = 5;
  const breakDuration = 5;

  function toggleDrawer() {
    setOpen(!open);
  };

  function playPause() {
    setPomoState((prevState) => {
      const nextTimerRun = !(prevState.timerRun);
      if (nextTimerRun) {
        if (prevState.session === null) {
          return {
            ...prevState,
            timerRun: nextTimerRun,
            session: 'Focus',
            timeRemaining: focusDuration * 60,
          };
        }
      }
      return {
        ...prevState,
        timerRun: nextTimerRun,
      };
    });
  }

  function stopHandle () {
    setPomoState((prevState) => {
      return{
        ...prevState,
        timerRun: false,
        session: null,
        timeRemaining: null,
      }
    })
  }

  useInterval(() => {
    if (pomoState.timeRemaining === 0) {
      new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
      return setPomoState((prevState) => {
        if (prevState.session === 'Focus') {
          return {
            ...prevState,
            session: 'Break',
            timeRemaining: breakDuration * 60,
            pomoCount: prevState.pomoCount--,
          }
        } else {
          return {
            ...prevState,
            session: 'Focus',
            timeRemaining: focusDuration * 60,
          }
        }
      });
    } else {
      return setPomoState((prevState) => {
        const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
        return {
          ...prevState,
          timeRemaining
        }
      })
    };
  },
    pomoState.timerRun ? 100 : null
  );

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <DocAppBar 
          open={open} 
          toggleDrawer={toggleDrawer}
          playPause={playPause}
          pomoState={pomoState}
          stopHandle={stopHandle}   
        />
        <DocDrawer 
          open={open} 
          toggleDrawer={toggleDrawer}
        />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <DocProgress 
            pomoState={pomoState}
            focusDuration={focusDuration}
            breakDuration={breakDuration}
          />
          <DocPdf />
        </Box>    
      </Box>
    </ThemeProvider>
  );
}
