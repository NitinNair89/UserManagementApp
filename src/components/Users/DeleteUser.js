import React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { red } from '@mui/material/colors';



const DeleteUser = props => {

  return <Button type='button' onClick={props.onClick}><Icon sx={{color: red[500]}}>delete_forever</Icon></Button>;
};

export default DeleteUser;
