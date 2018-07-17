import React, {Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';

import { authInputChange,login } from '../actions';

const Section = props => {
    const style = {
        marginTop: 10,
        marginBottom: 10,
    }
    return (
        <View style={style}>{props.children}</View>
    );
}


class LoginForm extends Component{
    renderLoginButton(){
        if( this.props.loading ){
            return (
                <ActivityIndicator size={'small'}/>
            );
        }
        return (
            <Button onPress={this.handleLogin.bind(this)} title='Login' backgroundColor='#3bd3d4'/>
        );
    }
    renderError(){
        if(this.props.error){
            return (
                <Section>
                    <FormValidationMessage>{this.props.error.message}</FormValidationMessage>
                </Section>
            );
        }
        return null;
    }
    render(){
        return (
            <View style={styles.container}>
                <Section><FormInput 
                    placeholder='Email' 
                    onChangeText={text=> this.props.authInputChange({field:'email',value: text})}/>
                </Section>
                <Section><FormInput 
                    onChangeText={text=> this.props.authInputChange({field:'password',value: text})}
                    placeholder='Password' 
                    secureTextEntry={true} />
                </Section>
                {this.renderError()}
                <Section>{this.renderLoginButton()}</Section>
            </View>
        );
    }

    handleLogin(){
        const { email, password } = this.props;
        this.props.login( { email, password } );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading,
    };
}

export default connect(mapStateToProps, { authInputChange, login } )(LoginForm);