"use client";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import Link from 'next/link'
export default function Header() {
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
                        <ul>
                            <li>
                                <Link href="/">
                                    <SvgIcon>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail text-sm">
                                            <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </SvgIcon>
                                    <span className='text-xs ml-1 hover:text-[red]'>info@example.com</span>
                                </Link>
                            </li>
                            <li>
                                <i className="bi bi-telephone-fill"></i>
                                (032) 436-1890
                            </li>
                        </ul>
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