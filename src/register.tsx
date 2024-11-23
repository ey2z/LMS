import React from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import './register.css'; // Import the CSS file
import logoImage from './assets/logo.png';

const RegisterForm: React.FC = () => {
  return (
    <div className="background-container">
      <Paper elevation={3} className="login-paper">
        <Box sx={{ mb: 2 }}>
          <img src={logoImage} alt="PLM Logo" width={400} />
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
            className="text-field"
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
            className="text-field"
          />

          <Box sx={{ position: 'relative', width: '100%', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              className="submit-button"
            >
              REGISTER
            </Button>
          </Box>

          <Box mt={2} className="already-have-an-account-btn">
            <Button variant="text" color="secondary">
              Already Have an Account?
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default RegisterForm;
