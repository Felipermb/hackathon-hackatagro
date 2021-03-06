// Theme material-ui
import { createMuiTheme } from '@material-ui/core';

const primary = '#296356';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: primary,
      },
    },
    MuiPickersClock: {
      pin: {
        backgroundColor: primary,
      },
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: primary,
      },
      thumb: {
        borderColor: primary,
      },
    },
    MuiButton: {
      label: {
        color: primary,
      },
    },
    MuiInputLabel: {
      formControl: {
        width: 'max-content',
      },
    },
    MuiInputBase: {
      root: {
        color: primary,
      },
    },
  },
});
