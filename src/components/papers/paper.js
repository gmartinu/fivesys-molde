import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
}));

export default function PaperSheet({...props}) {
  // const classes = useStyles();

  return (
    <Paper style={{
        width: props.width? props.width: 100, 
        height: props.height? props.height: 100,
        backgroundColor: props.color? props.color: 'White',
        paddingRight: props.paddingSideLR? props.paddingSideLR: 16,
        paddingLeft: props.paddingSideLR? props.paddingSideLR: 16,
        paddingTop: props.paddingSideTB? props.paddingSideTB: 8,
        paddingBottom: props.paddingSideTB? props.paddingSideTB: 8,
        }}>
      {props.children}
    </Paper>
  );
}