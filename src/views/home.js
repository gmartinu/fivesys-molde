import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { userActions } from '../redux/_actions';
import image from '../img/background_login.png'

 const styles = theme => ({
 	"@global": {
 		body: {
            backgroundColor: '#292929',
            color: 'White',
            }
         }
     });
function Home({...props}){
    return(
        <div style={{ height: '100%', textAlign: 'center'}}>
            <h1>Teste</h1>
        </div>
    )
}

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <Home/>
        );
    }
}

function mapState(state) {
    return {}
}

const actionCreators = {
};

export default withRouter(connect(mapState, actionCreators)(withStyles(styles)(HomePage)));
// export default withRouter(connect(mapState, actionCreators)(HomePage));
