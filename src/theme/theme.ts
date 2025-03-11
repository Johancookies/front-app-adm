// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    shape: {
        borderRadius: 8,
    },
    palette: {
        primary: {
            light: "#1A857F",
            main: "#1A857F",
            dark: "#1A857F",
        },
        secondary: {
            light: "#B1D6C3",
            main: "#B1D6C3",
            dark: "#B1D6C3",
        },
    },
    typography: {
        fontFamily: '"Be Vietnam Pro", sans-serif',
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: "small",
                fullWidth: true,
            },
        },
        MuiButton: {
            defaultProps: {
                color: "primary",
                variant: "contained",
                size: "small"
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    }
});

export default theme;