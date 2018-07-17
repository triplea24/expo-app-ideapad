import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, FormInput } from 'react-native-elements';

const Section = props => {
    const style = {
        marginTop: 10,
        marginBottom: 10,
    }
    return (
        <View style={style}>{props.children}</View>
    );
}

export default class LoginForm extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Section><FormInput value='' placeholder='Email' /></Section>
                <Section><FormInput value='' placeholder='Password' secureTextEntry={true}/></Section>
                <Section><Button title='Login' backgroundColor='#3bd3d4'/></Section>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});