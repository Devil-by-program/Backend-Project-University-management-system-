import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';

import BackgroundImage from "../assets/s1.jpg"; // Add your background image here
import { GreenButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0} style={{ height: '100vh' }}>
                <Grid item xs={12} md={6} style={{ display: 'flex' }}>
                   
                    
                </Grid>
                <Grid item xs={12} md={5} style={{ display: 'flex', alignItems: 'center' }}>
                    <StyledPaper>
                        <StyledTitle>
                            Student
                            
                            Management System
                        </StyledTitle>
                        <StyledText>
                            Enhance school management, effectively organize classes, and enroll students and faculty. Effortlessly monitor attendance, 
                            evaluate student performance, and give feedback. Easily retrieve records, check grades, and facilitate communication
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <GreenButton variant="contained" fullWidth>
                                    Login
                                </GreenButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "green", borderColor: "green" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{ color: "green" }}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container).attrs({
    disableGutters: true,
    maxWidth: false, // Disable the default max-width constraint
})`
    width: 500px; // Set custom width
    height: 100vh; // Full height
    background-image: url(${BackgroundImage});
    background-size: cover; // Cover the entire viewport
    background-position: center; // Center the image
    background-repeat: no-repeat; // Prevent repeat
    position: relative; // For absolute positioning of the overlay
    overflow: hidden; // Prevent overflow
    margin: 0; // Remove default margin
    padding: 0; // Remove default padding
`;

const StyledPaper = styled.div`
    padding: 65px;
    height: auto; // Allow it to adjust based on content
    background: rgba(255, 255, 255, 0.8); // Slightly white background for readability
    border-radius: 8px; // Rounded corners
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); // Add some shadow for depth
`;

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 24px;
`;

const StyledTitle = styled.h1`
    font-size: 3rem;
    color: #252525; // Dark color for title
    font-weight: bold;
    padding-top: 5px;
    letter-spacing: normal;
    line-height: normal;
`;

const StyledText = styled.p`
    margin-top: 5px;
    margin-bottom: 5px; 
    letter-spacing: normal;
    line-height: normal;
    color: #252525; // Dark color for text
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;
