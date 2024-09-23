import React from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import bgImage from './assets/bg.png';
import logoImage from './assets/logo.png';

// Updated background image styles for full screen
const BackgroundContainer = styled('div')({
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
});

const LoginPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 500,
  width: '100%',
  textAlign: 'center',
  backdropFilter: 'blur(9px)', // Stronger blur effect
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly less transparency
  borderRadius: '20px',
}));

const LoginForm: React.FC = () => {
  return (
    <BackgroundContainer>
      <LoginPaper elevation={3}>
        <Box sx={{ mb: 2 }}>
          <img src={logoImage} alt="PLM Logo" width={400} /> {/* Adjusted logo size */}
        </Box>

        <form>
          <Box sx={{ textAlign: 'left', width: '100%' }}>
            <Typography variant="h5">PLM Email</Typography>
          </Box>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type="email"
            required
            InputProps={{
              sx: {
                width: '100%',
                borderRadius: '2px',
                backgroundColor: '#e0e0e0',
                height: '39px',
                padding: '10px',
                boxSizing: 'border-box',
                fontSize: '18px',
                color: '#353333',
                fontFamily: 'Inter',
              },
            }}
          />

          <Box sx={{ textAlign: 'left', width: '100%' }}>
            <Typography variant="h5">Password</Typography>
          </Box>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            required
            InputProps={{
              sx: {
                width: '100%',
                borderRadius: '2px',
                backgroundColor: '#e0e0e0',
                height: '39px',
                padding: '10px',
                boxSizing: 'border-box',
                fontSize: '18px',
                color: '#353333',
                fontFamily: 'Inter',
              },
            }}
          />

          <Box sx={{ position: 'relative', width: '100%', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: '8px',
                backgroundColor: '#052b74',
                width: '100%',
                height: '41px',
                color: '#fff',
                fontSize: '24px',
                fontFamily: 'Roboto',
                fontWeight: 800,
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: '#041e4c', // Optional: darker shade on hover
                },
              }}
            >
              LOG IN
            </Button>
          </Box>

          <Box mt={2} sx={{ textAlign: 'right' }}>
            <Button variant="text" color="secondary">
              Forgot Password?
            </Button>
          </Box>
        </form>
      </LoginPaper>
    </BackgroundContainer>
  );
};

export default LoginForm;
