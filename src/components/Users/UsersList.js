import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import classes from "./UsersList.module.scss";
import DeleteUser from "./DeleteUser";

const UsersList = props => {
    
    const fnDeleteUser = (id) => {
        props.onDeleteUser(id)
    }
    
    return (
        <Card className={classes.wrapper}>
            <CardContent className={classes.container}>
            {!props.users.length > 0 && <p>Users list will be displayed here.</p>}
            {props.users.length > 0 && <List dense>
                {
                    props.users.map((user) => {
                       return <ListItem disablePadding data-id={user.id} key={user.id} secondaryAction={<DeleteUser onClick={()=> { fnDeleteUser(user.id)}}  />}>{user.name} ({user.age} years old)</ListItem> 
                    })
                }
            </List>}
            </CardContent>
        </Card>
    )
}

export default UsersList;