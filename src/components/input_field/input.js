import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const FiveTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#F99000',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#F99000',
      },
    },
  })(TextField);

export default function BasicTextFields({...props}) {
    // let style = {
    //     width: props.width? props.width: 200,
    //     height: props.height? props.height: 200,
    //     marginTop: props.marginTB? props.marginTB: 2,
    //     marginBottom: props.marginTB? props.marginTB: 2,
    //     marginLeft: props.marginLR? props.marginLR: 8,
    //     marginRight: props.marginLR? props.marginLR: 8,
    // }
    
    return(
        <div>
            {props.standard?
                <FiveTextField style={{
                    width: props.width? props.width: 200,
                    marginTop: props.marginTB? props.marginTB: 2,
                    marginBottom: props.marginTB? props.marginTB: 2,
                    marginLeft: props.marginLR? props.marginLR: 8,
                    marginRight: props.marginLR? props.marginLR: 8,
                    }} 
                    onChange={props.onChange} type={props.type?props.type: 'text'} name={props.name} id="standard-basic" label={props.label} />:
                props.filled?
                    <FiveTextField style={{
                        width: props.width? props.width: 200,
                        marginTop: props.marginTB? props.marginTB: 2,
                        marginBottom: props.marginTB? props.marginTB: 2,
                        marginLeft: props.marginLR? props.marginLR: 8,
                        marginRight: props.marginLR? props.marginLR: 8,
                        }} 
                        onChange={props.onChange} name={props.name} id="filled-basic" label="Filled" variant="filled" />:
                    props.outline?
                        <FiveTextField style={{
                            width: props.width? props.width: 200,
                            marginTop: props.marginTB? props.marginTB: 2,
                            marginBottom: props.marginTB? props.marginTB: 2,
                            marginLeft: props.marginLR? props.marginLR: 8,
                            marginRight: props.marginLR? props.marginLR: 8,
                            }} 
                            onChange={props.onChange} name={props.name} id="outlined-basic" label="Outlined" variant="outlined" />:
                        <h1>Missing Prop</h1>
            }
        </div>
    )
}