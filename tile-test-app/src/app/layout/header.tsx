'use client';

import React, { useState } from 'react';
import { Box, Typography, Toolbar, Button, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { StyledHeader } from './styles';

const UserIconDropdown: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <>
        <IconButton onClick={handleMenuClick} color="inherit">
          <Avatar alt="Akhil P" src="/images/user-avatar.jpg" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            'aria-labelledby': 'user-icon-button',
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </>
    );
  };
const Header: React.FC = () => {
    return (
        <StyledHeader position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              My Website
            </Typography>
            <Box sx={{ margin: "auto" }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
            </Box>
            <UserIconDropdown />
          </Toolbar>
        </StyledHeader>
    );
  };
  export default Header;