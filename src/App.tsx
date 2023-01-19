import { CardContent, IconButton, Stack, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import ShortBio from './assets/short_bio'
import { ConstructionRounded } from '@mui/icons-material'
import './bouncy.css'
import StickyBar from './StickyBar'
import { MainPageCard } from './components'

function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light')
    const [bouncyPlay, setBouncyPlay] = useState(false)
    const [spinJumpPlay, setSpinJumpPlay] = useState(false)
    
    const bouncyPhrase = 'Under_Construction'

    const theme = useMemo(() => getTheme(mode), [mode])

    return <ThemeProvider theme={theme} >
        <StickyBar toggleMode={() => setMode(mode === 'dark' ? 'light' : 'dark')} />

        <Stack
            paddingTop={3}
            paddingBottom={3}
            sx={{paddingRight: {xl: 10, sm: 0}, paddingLeft: {xl: 10, sm: 0}}}
            bgcolor={theme.palette.background.default} 
            alignItems='center'
            direction='column'
            spacing={3}
            height='100vh'
        >
            <MainPageCard style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 20}} >
                <div style={{display: 'flex', flexDirection: 'row'}} // bouncing sentence
                    onMouseEnter={() => {
                        if (bouncyPlay) return
                        setBouncyPlay(true)

                        setTimeout(() => {
                            setBouncyPlay(false)
                        }, 77 * (bouncyPhrase.length + 5))
                    }}
                >
                    {bouncyPhrase.split('').map((char, i) => <Typography 
                        key={i}
                        sx={{typography: {xl: 'h4', sm: 'h5'}}}
                        className='bouncy'
                        style={{
                            animationName: bouncyPlay ? 'bouncy-animation': undefined,
                            animationDelay: (i * 40) + 'ms'
                        }}
                    >
                        {char}
                    </Typography>)}
                </div>
                <IconButton // wacky icon
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
                    <Typography variant='body1' > About Me </Typography>
                    <Typography variant='subtitle1' sx={{typography: {xl: 'body1', sm: 'subtitle2'}}}>{ShortBio}</Typography>
                </CardContent>
            </MainPageCard>

        </Stack>
    </ThemeProvider>
}

export default App
