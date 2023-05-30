import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Box, TextField } from '@mui/material';
import React from 'react';

const CustomDateRangePicker = ({value, setValue}) => {

    return (
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: '', end: '' }}
        >
          <DateRangePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}

          />
        </LocalizationProvider>
      );
}

export default CustomDateRangePicker;