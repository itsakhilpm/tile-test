'use client';

import React from 'react';
import Layout from '../layout/layout';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import MediaCard from '../shared/card/card';

const home: React.FC = () => {
    const cardData = [
        {
            title: "Request new data access",
            description:
                "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
        },
        {
            title: "Auto approval",
            description:
                "Data management tools are essential for organizing and accessing data efficiently across multiple domains.",
        },
        {
            title: "Deprovisioning",
            description:
                "Trend analysis allows organizations to identify patterns and make data-driven decisions for the future.",
        },
        {
            title: "Deprovisioning",
            description:
                "Trend analysis allows organizations to identify patterns and make data-driven decisions for the future.",
        },
        {
            title: "Deprovisioning",
            description:
                "Trend analysis allows organizations to identify patterns and make data-driven decisions for the future.",
        },
        {
            title: "Deprovisioning",
            description:
                "Trend analysis allows organizations to identify patterns and make data-driven decisions for the future.",
        },
    ];
    return (
        <Layout>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    {cardData.map((card, index) => (
                        <Grid size={4} key={index}>
                            <MediaCard title={card.title} description={card.description} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    )
}
export default home;