'use client';

import React from 'react';
import Layout from '../layout/layout';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import MediaCard from '../shared/card/card';

const home: React.FC = () => {
    return (
        <Layout>
            <Typography variant="h4" gutterBottom>
                Welcome to My Website!
            </Typography>
            <Typography variant="body1" gutterBottom>
                This is a sample page built using MUI styled components. You can use this layout to create
                pages with a consistent header and footer.
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <MediaCard />
                    </Grid>
                    <Grid size={4}>
                        <MediaCard />
                    </Grid>
                    <Grid size={4}>
                        <MediaCard />
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}
export default home;