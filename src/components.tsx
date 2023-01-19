import { Card, styled } from "@mui/material"

const MainPageCard = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    width: '80%',
    boxShadow: theme.palette.mode === 'light' ? '0px 2px 1px -1px rgb(0 0 0 / 20%)' : '10px -12px 1px -1px rgb(200 0 0 / 20%)',
    [theme.breakpoints.down('sm')]: {
        width: '95%'
    },

}))


export {MainPageCard}