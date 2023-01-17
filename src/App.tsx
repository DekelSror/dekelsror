import { AppBar, Box, Card, CardContent, IconButton, Menu, MenuItem, Stack, Switch, Toolbar, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { getPalette } from './theme'
import ShortBio from './assets/short_bio'
import { ConstructionRounded, Menu as MenuIcon } from '@mui/icons-material'
import {styled} from '@mui/system'
import './bouncy.css'

const MainPageCard = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    width: '80%'
}))


function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light')
    const [open, setOpen] = useState(false)
    const [bouncyPlay, setBouncyPlay] = useState(false)

    const bouncyPhrase = 'Under_Construction'

    const theme = useMemo(() => createTheme({
        ...getPalette(mode), 
        typography: {
            fontFamily: 'Roboto Mono'
            // define variants (sizes & weights)
        }
    }), [mode])


    return <ThemeProvider theme={theme}>
        {/* 
            app bar
            contains the logo, 
            a menu with links - npm, github, linkedIn, CV, (CodePen & StoryBoook)
        */}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar style={{alignItems: 'center'}} >
                    <Typography variant='h6' textTransform='uppercase'>dekel sror</Typography>
                    <IconButton onClick={() => {setOpen(true)}}> 
                        <MenuIcon /> 
                    </IconButton>
                    <Menu
                        open={open}
                        onClose={() => setOpen(false)}
                        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                    >
                        <MenuItem>LinkedIn</MenuItem>
                        <MenuItem>GitHub</MenuItem>
                        <MenuItem>NPM</MenuItem>
                        <MenuItem>CV PDF</MenuItem>
                        <MenuItem> 
                            <Switch onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')} />  
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
        
        {/*
            home page body 
            contains short bio
        */}
        <Stack
            paddingTop={3}
            paddingBottom={3}
            paddingLeft={10}
            paddingRight={10}
            bgcolor={theme.palette.background.default} 
            justifyContent='center'
            direction='column'
            spacing={3}
        >
            <MainPageCard >
                <CardContent>
                    <Typography variant='subtitle1' > About Me </Typography>
                    <Typography variant='body1'>{ShortBio}</Typography>
                </CardContent>
            </MainPageCard>

            <MainPageCard >
                <div style={{display: 'flex', flexDirection: 'row', paddingTop: 31, paddingBottom: 5, alignItems:'end', justifyContent: 'center'}} 
                    onMouseEnter={() => {
                        if (bouncyPlay) return
                        setBouncyPlay(true)

                        setTimeout(() => {
                            setBouncyPlay(false)
                        }, 77 * (bouncyPhrase.length + 5))
                    }}
                >
                    {bouncyPhrase.split('')
                        .map((char, i) => <Typography 
                                key={i}
                                variant='h4' 
                                className='bouncy whacky'
                                style={{
                                    animationName: bouncyPlay ? 'bouncy-animation': undefined,
                                    animationDelay: (i * 77) + 'ms'
                                }}
                            >
                                {char}
                        </Typography>)}
                </div>
                <IconButton className='spinner-jumper' size='large'>  <ConstructionRounded fontSize='large' /> </IconButton>
            </MainPageCard>

        </Stack>
    </ThemeProvider>
}

export default App
