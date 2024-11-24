import React, {useState} from "react";
import { Box, AppBar, Toolbar, Typography, Button, Container, Paper, Menu, MenuItem, Avatar, } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { getAuth, signOut } from "firebase/auth"; // Import Firebase signOut method
import { auth } from "./firebase"; // Assuming Firebase is initialized in firebase.ts
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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

  
  const auth = getAuth();
  const user = auth.currentUser;


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElRoom, setAnchorElRoom] = React.useState<null | HTMLElement>(null);
  const openRoom = Boolean(anchorElRoom);
  const handleClickRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElRoom(event.currentTarget);
  };
  const handleCloseRoom = () => {
    setAnchorElRoom(null);
  };

  const [anchorElTransaction, setAnchorElTransaction] = React.useState<null | HTMLElement>(null);
  const openTransaction = Boolean(anchorElTransaction);
  const handleClickTransaction = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTransaction(event.currentTarget);
  };
  const handleCloseTransaction = () => {
    setAnchorElTransaction(null);
  };

  const [anchorElProfile, setAnchorElProfile] = React.useState<null | HTMLElement>(null);
  const openProfile = Boolean(anchorElProfile);
  const handleClickProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex", // Use flexbox to align content
          flexDirection: "column", // Align items vertically
          alignItems: "center", // Center content horizontally
          backgroundColor: "#f4f6f8", // Light background color
          padding: 0, // Remove default padding
          margin: 0, // Remove default margin
        }}
      >
        {/* Top AppBar */}
        <AppBar position="sticky" color="primary" elevation={4} sx={{ width: "100%" }}>
          <Toolbar>
              {/* PLM Logo */}
              <Box sx={{ 
                display: 'flex', 
                width: '100%',
                justifyContent: 'space-evenly',  
                }}> 

                {/* Logo/Header */}
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}>
                  <Box 
                    component="img" 
                    sx={{ height: '50px', }}
                    alt="PLM Logo"
                    src="https://upload.wikimedia.org/wikipedia/en/d/dc/PLM_Seal_2013.png" 
                  />
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: 1, 
                    textTransform: 'uppercase' }}>
                    <Typography sx={{
                      fontSize: 11,
                      color: '#FFF3CD',
                      fontWeight: 'bold',
                      fontFamily: 'Lateef',
                    }}> Pamantasan ng Lungsod ng Maynila </Typography>
                    
                    <Typography sx={{
                      fontSize: 11,
                      fontFamily: 'sans-serif',
                      fontStyle: 'italic',
                    }}> University of the City of Manila </Typography>
                  </Box>
                </Box>

                <Button href="/dashboard" color="inherit" sx={{ ml: '50px', }}>Home</Button>
                
                {/* Enrollment Dropdown Button */}
                <Button
                  id="enrollment-button"
                  aria-controls={open ? 'enrollment-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  color="inherit"
                >
                  Enrollment
                  <ArrowDropDownIcon /> {/* dropdown icon */}
                </Button>
                {/* Dropdown contents/options */}
                <Menu
                  id="enrollment-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'enrollment-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Option E1</MenuItem>
                  <MenuItem onClick={handleClose}>Option E2</MenuItem>
                  <MenuItem onClick={handleClose}>Option E3</MenuItem>
                </Menu>

                {/* Classroom Dropdown Button */}
                <Button
                  id="classroom-button"
                  aria-controls={open ? 'classroom-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickRoom}
                  color="inherit"
                >
                  Classroom
                  <ArrowDropDownIcon /> {/* dropdown icon */}
                </Button>
                {/* Dropdown contents/options */}
                <Menu
                  id="classroom-menu"
                  anchorEl={anchorElRoom}
                  open={openRoom}
                  onClose={handleCloseRoom}
                  MenuListProps={{
                    'aria-labelledby': 'classroom-button',
                  }}
                >
                  <MenuItem onClick={handleCloseRoom}>Option C1</MenuItem>
                  <MenuItem onClick={handleCloseRoom}>Option C2</MenuItem>
                  <MenuItem onClick={handleCloseRoom}>Option C3</MenuItem>
                </Menu>

                {/* Transactions Dropdown Button */}
                <Button
                  id="transaction-button"
                  aria-controls={open ? 'transaction-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickTransaction}
                  color="inherit"
                >
                  Transactions
                  <ArrowDropDownIcon /> {/* dropdown icon */}
                </Button>
                {/* Dropdown contents/options */}
                <Menu
                  id="transaction-menu"
                  anchorEl={anchorElTransaction}
                  open={openTransaction}
                  onClose={handleCloseTransaction}
                  MenuListProps={{
                    'aria-labelledby': 'transaction-button',
                  }}
                >
                  <MenuItem onClick={handleCloseTransaction}>Option T1</MenuItem>
                  <MenuItem onClick={handleCloseTransaction}>Option T2</MenuItem>
                  <MenuItem onClick={handleCloseTransaction}>Option T3</MenuItem>
                </Menu>

                {/* Profile */}
                <Button
                  id="profile-button"
                  size="large"
                  aria-label="account of current user"
                  aria-controls={open ? 'profile-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickProfile}
                  color="inherit"
                >
                  {(() => {
                    if (user) {
                      return (
                        <>
                          <Avatar alt={user.email} src="/static/images/avatar/2.jpg" />
                          <Box sx={{ml: '5px'}}>
                            <Typography sx={{ 
                              fontSize: 12, 
                              textTransform: 'Capitalize', 
                              fontWeight: 700, }}>
                                {(() => {
                                  if (user) {
                                    return (
                                      <div>{user.email}</div>
                                    )
                                  }
                                })()}
                            </Typography>
                          </Box>
                        </>
                      )
                    }
                  })()}
                  <ArrowDropDownIcon /> {/* dropdown icon */}
                </Button>

                <Menu
                  id="profile-menu"
                  anchorEl={anchorElProfile}
                  open={openProfile}
                  onClose={handleCloseProfile}
                  MenuListProps={{
                    'aria-labelledby': 'profile-button',
                  }}
                >
                  <MenuItem onClick={handleCloseProfile}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={handleLogout} // Handle logout on click
                      sx={{border: 'none', color: 'red', }}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </Menu>
                
              </Box> 
            </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container
          className="dashboard-container"
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
              height: "20%", // Ensure the Paper takes full width
              maxWidth: "500px", // Limit the width for better readability
              display: "flex", // Use flexbox to align content
              flexDirection: "column", // Align items vertically
              alignItems: "center", // Center content horizontally
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4">
              Welcome to the Dashboard
            </Typography>
            <Typography variant="body1">
              You are successfully logged in!
            </Typography>

            {/* Logout Button 
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
            */}
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
