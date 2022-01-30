import React, { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ErrorModule from "../UI/ErrorModule";
import Wrapper from "../Helpers/Wrapper";
import TextField from '@mui/material/TextField';
import classes from './AddUser.module.scss';

const AddUser = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();
    const [open, setOpen] = useState(false);

    const fnSubmitHandler = event => {
        event.preventDefault();

        if ( name.trim().length === 0 || age.trim().length === 0 ) {
            setError({
                title: 'Invalid Name or Age!',
                message: 'Please enter a valid name or age.'
            });
            setOpen(true);
            return;
        }

        if ( +age < 0 ) {
            setError({
                title: 'Invalid Age!',
                message: 'Agre should be greater than 0. Please enter a valid age.'
            });
            setOpen(true);
            return;
        }

        props.onAddUser(name, age);
        setName('');
        setAge('');
        setOpen(false);
    }

    const fnChangeNameHandler = event => {
        setName(event.target.value);
    }

    const fnChangeAgeHandler = event => {
        setAge(event.target.value);
    }

    const fnDismissError = () => {
        setError(null);
        setOpen(false);
    }

    return (
    <Wrapper>
        {error && <ErrorModule title={error.title} message={error.message} onDismissError={fnDismissError} open={open} />}
        <Card className={classes.wrapper}>
            <CardContent>
                <form onSubmit={fnSubmitHandler}>
                    <TextField type="text" id="username" label="Name" variant="outlined" fullWidth value={name} margin="normal" onChange={fnChangeNameHandler} size="small" />
                    <TextField type="number" id="age" fullWidth label="Age (years)" variant="outlined" value={age} margin="normal" onChange={fnChangeAgeHandler} size="small" />
                    <Button type="submit" variant="contained" onClick={fnSubmitHandler}>Add User</Button>
                </form>
            </CardContent>
        </Card>
    </Wrapper>
    )
};

export default AddUser;