import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material';

const Input = styled('form')(({ theme }) => ({
  position: 'relative',
  display: 'flex',  
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '50%',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),    
    transition: theme.transitions.create('width'),
    width: '100%'
  },
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SendButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '90px',
  backgroundColor: theme.palette.common.white,
  marginLeft: theme.spacing(1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  }
}))

export default function NavBar({ onSubmit }) {
  return (
    <Box sx={{ flexGrow: 1, position:'sticky', top:0 }}>
      <AppBar position="static">
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'center'}}>
          <Input onSubmit={onSubmit} >
            <StyledInputBase
              placeholder="Type text"
              inputProps={{ 'aria-label': 'search' }}
              name="search"
            />
          <SendButton type="submit">
            <Typography variant="body2" color="#000" component="span">
              Send
            </Typography>
            <SendIcon />
          </SendButton>
          </Input>
        </Toolbar>
      </AppBar>
    </Box>
  );
}