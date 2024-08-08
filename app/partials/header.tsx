"use client";
import React from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import Link from 'next/link'
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import imgProduct from "../imgs/img3_productHomeListProducts.png";

export default function Header() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
//     const Navbar = () => {
//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
//     const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event.currentTarget);
//     };
  
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
// }
    
    return (
        <header>
            <div className='header-top-menu-area'>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid xs={3}></Grid>
                        <Grid xs={5}>
                            <ul>
                                <li className='inline-block mr-36'>
                                    <Link href="/">
                                        <SvgIcon>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail text-base header-top-menu">
                                                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </svg>
                                        </SvgIcon>
                                        <span className='text-sm ml-1 text-white'>info@example.com</span>
                                    </Link>
                                </li>
                                <li className='text-white text-sm inline-block'>
                                    <SvgIcon>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone text-base mr-1 header-top-menu">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                        </svg>
                                    </SvgIcon>                                
                                    (032) 436-1890
                                </li>
                            </ul>                    
                        </Grid>
                        <Grid xs={4}>
                            <div className='header-top-menu-socila-icon text-right'>
                                <ul>
                                <li className='inline-block'>
                                    <Link href="/">
                                        <SvgIcon>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook text-white text-sm">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                            </svg>
                                        </SvgIcon>
                                    </Link>
                                </li>
                                <li className='inline-block ml-5'>
                                    <Link href="/">
                                        <SvgIcon>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter text-white text-sm" viewBox="0 0 16 16">
                                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                                            </svg>
                                        </SvgIcon>
                                    </Link>
                                </li>
                                <li className='inline-block ml-5'>
                                    <Link href="/">
                                        <SvgIcon>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pinterest text-white text-sm" viewBox="0 0 16 16">
                                                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
                                            </svg>
                                        </SvgIcon>
                                    </Link>
                                </li>
                                <li className='inline-block mx-5'>
                                    <Link href="/">
                                        <SvgIcon>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram text-white text-sm"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                            </svg>
                                        </SvgIcon>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='header-menu-area bg-white relative z-1'>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid xs={3}>
                            <Link href="#">
                                <Image className='text-center'
                                    src="/imgs/header-logo.png"
                                    alt="Description of image"
                                    width={178}
                                    height={68}
                                />
                            </Link>
                        </Grid>
                        <Grid xs={6}>
                            <div className="header-menu inline-block text-center	">
                                <ul>
                                    <li className='inline-block mr-5'>
                                        <Link href="#" className='flex items-center py-10 color-green'>
                                            Home
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className='inline-block mr-5'>
                                        <Link href="#" className='flex items-center py-10 color-green'>
                                            About
                                        </Link>
                                    </li>
                                    <li className='inline-block mr-5'>
                                        <Link href="#" className='flex items-center py-10 color-green'>
                                            Service
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className='inline-block mr-5'>
                                        <Link href="#" className='flex items-center py-10 color-green'>
                                            Blog
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className='inline-block mr-5'>
                                        <Link href="#" className='flex items-center py-10 color-green'>
                                            Pages
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className='inline-block mr-5'>
                                        <Link href="#" className='flex items-center py-10 color-green'>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid xs={3} className="flex items-center">
                            <div className="header-Shop-card mr-20">
                                <Link href="#" className='inline-block'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart4 color-yellow relative after:absolute " viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="header-btn inline-block no-underline text-lg py-3.5 px-8 rounded relative z-1 overflow-hidden">
                                <Link href="#" className='flex items-center text-white'>
                                    About us
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-arrow-right ml-0.5" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                    </svg>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </header>
    )
}

