import { createTheme } from "@mui/material"
import { amber, grey, deepOrange } from "@mui/material/colors"

const getPalette = (mode: 'light' | 'dark') => ({
    palette: {
        // mode,
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
    }
})

const getTheme = (mode: 'light' | 'dark') => {
    return createTheme({
        ...getPalette(mode),
        typography: {
            fontFamily: 'Roboto Mono',
            h4: {
                fontWeight: 500,
                fontSize: 30,
            },
            h5: {
                fontWeight: 500,
                fontSize: 25,
            },
            h6: {
                fontWeight: 500,
                fontSize: 20,
            },
            subtitle1: {
                fontWeight: 300,
                fontSize: 15,
            },
            subtitle2: {
                fontWeight: 200,
                fontSize: 12,
            },
            body1: {
                fontWeight: 400,
                fontSize: 15,
            }
        }
    })
}


export default getTheme