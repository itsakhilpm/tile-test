'use client';

import React from 'react';
import { Box, Typography, AppBar, Toolbar, Button, Container } from '@mui/material';
import { StyledHeader } from './styles';

const Header: React.FC = () => {
    return (
        <StyledHeader position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Website
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </StyledHeader>
    );
  };
  export default Header;