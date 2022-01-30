import React from "react";
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';

const ErrorModule = props => {
    return (
        <Dialog onClose={props.onDismissError} open={props.open} fullWidth maxWidth="sm">
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom variant="subtitle1" component="div">{props.message}</Typography>
            </DialogContent>
            <DialogActions>
                <Button type="button"  variant="contained" onClick={props.onDismissError}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ErrorModule;