import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from '../components/papers/paper';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { withRouter } from 'react-router-dom'
import Input from '../components/input_field/input'
import { userActions } from '../redux/_actions';
import Box from '@material-ui/core/Box';
import Button from '../components/buttons/button'
import image from '../img/background_login.png'
import logo from '../img/fiveLogo.png'

 const styles = theme => ({
 	"@global": {
 		body: {
            backgroundColor: 'black',
            backgroundImage: `url(${image})`,
 			backgroundRepeat: "no-repeat",
 			backgroundPosition: "relative",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            height: "100vh",
            }
         }
     });

function Login({...props}){
    return(
        <div style={{ height: '100vh', textAlign: 'center'}}>
            <Box style={{ height: '100%' }} display="flex" alignItems="center" justifyContent="center">
                <Box p={1}>
                    <Paper width='19em' height='20em'>
                        <img src={logo} style={{width: '8.5em', height: '3em', margin: 8}} />
                        <Divider style={{marginTop: 0}} />
                        <form onSubmit={props.handleSubmit} noValidate>
                            <Input standard name={'username'} width={250} marginTB={'16px'} label={'UserName'} onChange={props.handleChange} />
                            <Input standard name={'password'} width={250} marginTB={'0px'} type={'password'} label={'Password'} onChange={props.handleChange} />
                            <Button type="submit" width={250} height={60} marginTB={'32px'}>Sign In</Button>
                        </form>
                    </Paper>
                </Box>
            </Box>
        </div>
    )
}

class SignIn_Page extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        console.log(name)
        console.log(value)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('entrei aqui')
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }
    render() { 
        return (
            <Login handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

export default withRouter(connect(mapState, actionCreators)(withStyles(styles)(SignIn_Page)));
// export default withRouter(connect(mapState, actionCreators)(SignIn_Page));
