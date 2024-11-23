import React from 'react';
import LoginForm from './login'; // Adjust the path if necessary
import { CssBaseline } from '@mui/material';
import RegisterForm from './register';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <RegisterForm />
    </>
  );
};

export default App;
