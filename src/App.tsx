import React from 'react';
import LoginForm from './login'; // Adjust the path if necessary
import { CssBaseline } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <LoginForm />
    </>
  );
};

export default App;
