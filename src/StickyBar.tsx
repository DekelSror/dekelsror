import { Box, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Switch, useTheme } from "@mui/material"
import { useState } from "react"
import { Menu as MenuIcon } from '@mui/icons-material'

const StickyBar = (props: {toggleMode: () => void}) => {
    
    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null)
    const menuOpen = Boolean(menuAnchor)

    const theme = useTheme()
    
    return <Box style={{backgroundColor: theme.palette.primary.main}} sx={{ flexGrow: 1 }}>
        <AppBar position='sticky'>
            <Toolbar style={{alignItems: 'center'}} >
                <IconButton onClick={e => setMenuAnchor(e.currentTarget)}> 
                    <MenuIcon /> 
                </IconButton>
                <Typography variant='h6' textTransform='uppercase'>dekel sror</Typography>
                <Menu
                    open={menuOpen}
                    anchorEl={menuAnchor}
                    onClose={() => setMenuAnchor(null)}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                >
                    <MenuItem onClick={() => window.open('https://www.linkedin.com/in/dekel-sror-a36a56167/')}>LinkedIn</MenuItem>
                    <MenuItem onClick={() => window.open('https://github.com/DekelSror')} >GitHub</MenuItem>
                    <MenuItem 
                        onClick={() => {
                            const newTab = window.open(process.env.PUBLIC_URL + '/cv.pdf')

                            // wonky
                            setTimeout(() => {
                                if (newTab) {
                                    newTab.document.title = 'Dekel Sror CV'
                                } else {
                                    console.log('no new tab')
                                }
                            }, 1500)
                        }} 
                    >
                        CV PDF
                    </MenuItem>
                    <MenuItem> 
                        <Switch onChange={props.toggleMode} />  
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    </Box>
}

export default StickyBar