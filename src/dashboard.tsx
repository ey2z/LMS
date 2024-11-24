import React from "react";
import { Box, AppBar, Toolbar, Typography, Button, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { getAuth, signOut } from "firebase/auth"; // Import Firebase signOut method
import { auth } from "./firebase"; // Assuming Firebase is initialized in firebase.ts

import "./dashboard.css";

const Dashboard: React.FC = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign the user out from Firebase
      navigate("/login"); // Redirect to the login page after sign-out
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <Box
      className="dashboard-container"
      sx={{
        height: "100vh", // Full viewport height
        display: "flex", // Use flexbox to align content
        flexDirection: "column", // Align items vertically
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
        backgroundColor: "#f4f6f8", // Light background color
        padding: 0, // Remove default padding
        margin: 0, // Remove default margin
      }}
    >
      {/* Top AppBar */}
      <AppBar position="sticky" color="primary" elevation={4} sx={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            PLM Dashboard
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleLogout} // Handle logout on click
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container
        sx={{
          py: 4,
          maxWidth: "sm",
          width: "100%", // Ensure the container takes up full width
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        maxWidth="sm"
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            textAlign: "center",
            backgroundColor: "#fff",
            width: "100%", // Ensure the Paper takes full width
            maxWidth: "500px", // Limit the width for better readability
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Welcome to the Dashboard
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            You are successfully logged in! Here you can manage your profile and other settings.
          </Typography>

          {/* Logout Button */}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Dashboard;
