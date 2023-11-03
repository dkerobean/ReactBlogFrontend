import React from "react";
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function BlogList() {
    return (
        <Container maxWidth={false} sx={{ bgcolor: '#f1f8e9'}}>
            <Container  sx={{ pt: 5, mt: 5, pl: '5'}}>
                <Typography variant="h4">
                    Featured Posts
                </Typography>
                <Link underline="hover" variant="h6" href="#" color="inherit">
                    View All Posts
                </Link>
            </Container>
        </Container>
    )
}

export default BlogList;
