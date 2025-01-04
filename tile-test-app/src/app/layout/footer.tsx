'use client';

import React from 'react';
import { StyledFooter } from './styles';
import { Typography } from '@mui/material';


const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Typography variant="body2">
            © {new Date().getFullYear()} My Website. All rights reserved.
            </Typography>
      </StyledFooter>
    );
};
export default Footer;
