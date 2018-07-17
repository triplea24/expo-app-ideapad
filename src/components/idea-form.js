import React, {Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';

import { ideaInputChange, addNewIdea } from '../actions';

const Section = props => {
    const style = {
        marginTop: 10,
        marginBottom: 10,
    }
    return (
        <View style={style}>{props.children}</View>
    );
}


class IdeaForm extends Component{
    renderSubmitButton(){
        if( this.props.loading ){
            return (
                <ActivityIndicator size={'small'}/>
            );
        }
        return (
            <Button onPress={this.handleSubmit.bind(this)} title='Submit' backgroundColor='#3bd3d4'/>
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
                    value={this.props.title}
                    placeholder='Title' 
                    onChangeText={text=> this.props.ideaInputChange({field:'title',value: text})}/>
                </Section>
                <Section><FormInput 
                    value={this.props.text}
                    onChangeText={text=> this.props.ideaInputChange({field:'text',value: text})}
                    placeholder='Text' 
                    multiline={true} />
                </Section>
                {this.renderError()}
                <Section><Section>{this.renderSubmitButton()}</Section></Section>
            </View>
        );
    }

    handleSubmit(){
        console.log('submit',this.props);
        const {title,text} = this.props;
        this.props.addNewIdea({title,text});
        // const { email, password } = this.props;
        // this.props.login( { email, password } );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});

const mapStateToProps = state => {
    return {
        title: state.ideas.title,
        text: state.ideas.text,
        loading: state.ideas.loading,
        error: state.ideas.error,
    };
}

export default connect(mapStateToProps, { ideaInputChange, addNewIdea } )(IdeaForm);