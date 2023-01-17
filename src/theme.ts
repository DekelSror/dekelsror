import { amber, grey, deepOrange } from "@mui/material/colors"

const getPalette = (mode: 'light' | 'dark') => ({
    palette: {
        mode,
        ...(mode === 'light' ? {
                // palette values for light mode
                primary: amber,
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
                background: {
                    default: grey[100],
                    paper: grey[50]
                }
            } : {
                // palette values for dark mode
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: grey[900],
                    paper: grey[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
        }),
    },
})


export {getPalette}