import React from "react";
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Height } from "@mui/icons-material";

function BlogList() {
    return (
        <Container>
            <Box sx={{pt: 5, mt: 5}}>
                <Typography variant="h4" textAlign="left">
                    Featured Posts
                </Typography>
                <Link underline="hover" variant="h6" href="#" color="inherit" textAlign="right">
                    View All Posts
                </Link>
            </Box>
        </Container>
    )
}

export default BlogList;
