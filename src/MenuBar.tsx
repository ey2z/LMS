import * as React from "react";
import { AppBar, Box, Toolbar, Button, Menu, MenuItem, IconButton, Avatar, Typography } from '@mui/material';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircle from '@mui/icons-material/AccountCircle';

import './MenuBar.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#333BA6',
      contrastText: '#fff',
    },
  },
});

function MenuBar() {
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
      <ThemeProvider theme={theme}>
        <Box>
          <AppBar position="static" color="primary" elevation={4} sx={{ width: "100%" }}>
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

                <Button color="inherit" sx={{ ml: '50px', }}>Home</Button>
                
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
                  <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                  <Box sx={{ml: '5px'}}>
                    <Typography sx={{ 
                      fontSize: 12, 
                      textTransform: 'Capitalize', 
                      fontWeight: 700, }}>
                        Surname, Name 
                    </Typography>
                    <Typography sx={{ fontSize: 10, textTransform: 'lowercase' }}>user@email.com</Typography>
                  </Box>
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
                  <MenuItem onClick={handleCloseProfile}>Manage Account</MenuItem>
                  <MenuItem onClick={handleCloseProfile}>Settings</MenuItem>
                  <MenuItem onClick={handleCloseProfile}>Log Out</MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        
        </ThemeProvider>
    </>
  )
}

export default MenuBar