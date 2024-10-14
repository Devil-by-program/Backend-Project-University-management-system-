import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/cuimslogo.png";
import BackgroundImage from "../assets/cufront.png"; // Add your background image here
import { RedButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0} style={{ height: '100vh' }}>
                <Grid item xs={12} md={6} style={{ display: 'flex' }}>
                    <img 
                        src={Students} 
                        alt="students" 
                        style={{ 
                            width: '50%', // Make the image take full width
                            height: '60px', // Maintain aspect ratio
                            margin: '20px 0', // Adjust margins as needed
                        }} 
                    />
                </Grid>
                <Grid item xs={12} md={5} style={{ display: 'flex', alignItems: 'center' }}>
                    <StyledPaper>
                        <StyledTitle>
                            Chandigarh University
                            
                            Management System
                        </StyledTitle>
                        <StyledText>
                            Enhance school management, effectively organize classes, and enroll students and faculty. Effortlessly monitor attendance, 
                            evaluate student performance, and give feedback. Easily retrieve records, check grades, and facilitate communication
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <RedButton variant="contained" fullWidth>
                                    Login
                                </RedButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "red", borderColor: "red" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{ color: "red" }}>
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

const StyledContainer = styled(Container)`
    width: 100%; // Set full width
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
    padding: 22px;
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
