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
    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null)
    const [bouncyPlay, setBouncyPlay] = useState(false)
    const [spinJumpPlay, setSpinJumpPlay] = useState(false)

    const bouncyPhrase = 'Under_Construction'

    const theme = useMemo(() => createTheme({
        ...getPalette(mode), 
        typography: {
            fontFamily: 'Roboto Mono',
            // define variants (sizes & weights)
            h4: {
                fontweight: 500,
                fontSize: 30,
            },
            h5: {
                fontweight: 500,
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
    }), [mode])



    return <ThemeProvider theme={theme}>
        {/* 
            app bar
            contains the logo, 
            a menu with links - npm, github, linkedIn, CV, (CodePen & StoryBoook)
        */}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='sticky'>
                <Toolbar style={{alignItems: 'center'}} >
                    <IconButton 
                        onClick={e => {
                            setOpen(true)
                            setMenuAnchor(e.currentTarget)
                        }}
                    > 
                        <MenuIcon /> 
                    </IconButton>
                    <Typography variant='h6' textTransform='uppercase'>dekel sror</Typography>
                    <Menu
                        open={open}
                        anchorEl={menuAnchor}
                        onClose={() => setOpen(false)}
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
            sx={{paddingRight: {sm: 0}, paddingLeft: {sm: 0}}}
            paddingLeft={10}
            paddingRight={10}
            bgcolor={theme.palette.background.default} 
            alignItems='center'
            direction='column'
            spacing={3}
        >

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
                                sx={{typography: {xl: 'h4', sm: 'h5'}}}
                                className='bouncy whacky'
                                style={{
                                    animationName: bouncyPlay ? 'bouncy-animation': undefined,
                                    animationDelay: (i * 77) + 'ms'
                                }}
                            >
                                {char}
                        </Typography>)}
                </div>
                <IconButton 
                    onClick={() => {
                        if (spinJumpPlay) return
                        setSpinJumpPlay(true)
                        setTimeout(() => setSpinJumpPlay(false), 1300)
                    }} 
                    className='spinner-jumper'
                    style={{animationName: spinJumpPlay ? 'spinjump' : undefined}}
                    size='large'
                >  
                    <ConstructionRounded fontSize='large' /> 
                </IconButton>
            </MainPageCard>

            <MainPageCard >
                <CardContent>
                    <Typography variant='subtitle1' > About Me </Typography>
                    <Typography variant='body1' sx={{typography: {sm: 'subtitle2'}}}>{ShortBio}</Typography>
                </CardContent>
            </MainPageCard>

        </Stack>
    </ThemeProvider>
}

export default App
