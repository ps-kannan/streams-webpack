import React from "react";
import {connect} from 'react-redux';
import {signIn, signOut} from '../../action';

class GoogleAuth extends React.Component {
    //state = {isSignedIn: null};

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '259021069798-jm8e0usnslum4pu48167mn77gk3qmre7.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log('this.auth',this.auth);
                //this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.onAuthChange(this.auth.isSignedIn.get());
                console.log('this.auth',this.auth.isSignedIn.get());
                console.log('listen',this.auth.isSignedIn.listen(this.onAuthChange));
            });
        });
    }

    onAuthChange = (isSignedIn)=>{
        //this.setState({isSignedIn: this.auth.isSignedIn.get()});
        console.log('isSignedIn',isSignedIn);
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId);
        }else{
            this.props.signOut();
        }
    };

    onSignInClick = () =>{
        console.log('onSignInClick called');
        this.auth.signIn();
    };

    onSignOutClick = () =>{
        console.log('onSignOutClick called');
        this.auth.signOut();
        console.log('onSignOutClick call end');
    };

    renderAuthButton() {
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        }else{
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign In With Google
                </button>
            );
        }
    }
    render() {
        return(
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);