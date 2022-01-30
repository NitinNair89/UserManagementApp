import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const fnOnAddUser = (name, age) => {
    setUsersList((prevState) => {
      return [...prevState, { name: name, age: age, id: Math.random().toString()}];
    });
  }

  const fnOnDeleteUser = (id) => {
    const newUsersList = usersList;
    const idxDeleteUser = newUsersList.indexOf(newUsersList.find((user) => { return user.id === id}));
    newUsersList.splice(idxDeleteUser, 1);
  
    setUsersList((prevState) => {
      return [...newUsersList];
    });
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Simple User Management
          </Typography>
        </Toolbar>
      </AppBar>
        <AddUser onAddUser={fnOnAddUser} />
        <UsersList users={usersList} onDeleteUser={fnOnDeleteUser} />
      </Container>
    </React.Fragment>
  )
}

export default App;
