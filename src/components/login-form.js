import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
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
                <Section><Button onPress={this.handleLogin.bind(this)} title='Login' backgroundColor='#3bd3d4'/></Section>
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
    };
}

export default connect(mapStateToProps, { authInputChange, login } )(LoginForm);