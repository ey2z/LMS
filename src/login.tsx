import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import './login.css'; // Import the CSS file
import logoImage from './assets/logo.png';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth methods
import { useNavigate } from 'react-router-dom'; // For navigation

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate(); // This hook will allow us to redirect

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    setError(''); // Reset any previous error

    try {
      const auth = getAuth();
      // Attempt to log in with Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);

      // After successful login, redirect to the dashboard
      navigate('/dashboard'); // Navigate to the dashboard page
    } catch (error: any) {
      setLoading(false);
      setError(error.message); // Display error message if login fails
    }
  };

  return (
    <div className="background-container">
      <Paper elevation={3} className="login-paper">
        <Box sx={{ mb: 2 }}>
          <img src={logoImage} alt="PLM Logo" width={400} />
        </Box>

        <form onSubmit={handleSubmit}>
          <Box sx={{ textAlign: 'left', width: '100%' }}>
            <Typography variant="h5">PLM Email</Typography>
          </Box>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
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
            value={password}
            onChange={handlePasswordChange}
            className="text-field"
          />

          {error && <Typography color="error">{error}</Typography>} {/* Display error message */}

          <Box sx={{ position: 'relative', width: '100%', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              className="submit-button"
              disabled={loading} // Disable the button while loading
            >
              {loading ? 'Logging In...' : 'LOGIN'}
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default LoginForm;
