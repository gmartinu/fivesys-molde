import React from 'react';
import Button from '@material-ui/core/Button';

export default function ContainedButtons({...props}) {
    return (
      <div>
        <Button style={{
            width: props.width? props.width: 100, 
            height: props.height? props.height: 50,
            backgroundColor: props.color? props.color: '#FF8500',
            '&hover':{
                backgroundColor: props.color? props.color: '#CB7400',
            },
            marginTop: props.marginTB? props.marginTB: 8,
            marginBottom: props.marginTB? props.marginTB: 8,
            marginLeft: props.marginLR? props.marginLR: 16,
            marginRight: props.marginLR? props.marginLR: 16,
        }} onClick={props.onClick?props.onClick: null} type={props.type?props.type: 'button'} variant="contained">
            {props.children}
        </Button>
      </div>
    );
  }