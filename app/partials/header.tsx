"use client";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
export default function Header(){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <header>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid xs={3}></Grid>
                    <Grid xs={5}>
                        <Item>xs=5</Item>
                    </Grid>
                    <Grid xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid xs={3}>
                        <Item>xs=3</Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>xs=6</Item>
                    </Grid>
                    <Grid xs={3}>
                        <Item>xs=3</Item>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}