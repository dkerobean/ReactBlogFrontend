import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import '@fontsource/roboto/300.css';
import Box from '@mui/material/Box';


function Body() {

    return (
        <Container>
            <Box>
                <Typography align='center' variant='h3' sx={{pt: 5, fontWeight: 'bold'}}>
                    Latest News
                </Typography>
                <Typography align='center' variant='h3' sx={{ fontWeight: 'bold'}}>
                    Updates and Tips
                </Typography>
                <Typography align='center' variant='h6' sx={{pt:3, mb: 5, fontWeight: 'light'}}>
                    Welcome to the blog, writen by professionals; It's connect people.
                </Typography>
            </Box>
        </Container>
    )

}

export default Body;