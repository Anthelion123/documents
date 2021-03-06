import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import {secondsToDuration} from '../utils/duration';

export default function DocProgress({pomoState, focusDuration, breakDuration}) {

  return (
    <Box sx={{ py: 1, display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1, }}>
        <LinearProgress 
          variant="determinate"
          color={(pomoState.session === 'Focus') ? 'error' : 'info'}
          value={
            100 - (100 * pomoState.timeRemaining / 60) /
            (pomoState.session === "Focus" ? focusDuration : breakDuration)
          } 
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{pr: 1,}}
        >
          {secondsToDuration(pomoState.timeRemaining)}
        </Typography>
      </Box>
    </Box>
  );
}