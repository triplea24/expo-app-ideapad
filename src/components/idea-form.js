import React, {Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';

import { ideaInputChange, addNewIdea,editIdea } from '../actions';

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
    componentDidMount(){
        const { params } = this.props.navigation.state;
        this.edit = false;
        if( params && params.idea ){
            this.edit = true;
            _.each(params.idea,(value,field)=>{
                this.props.ideaInputChange({value,field})
            });
        }
    }
    renderSubmitButton(){
        if( this.props.loading ){
            return (
                <ActivityIndicator size={'small'}/>
            );
        }
        const title = this.edit ? 'Edit' : 'Create';
        const backgroundColor = '#3bd3d4';
        return (
            <Button onPress={this.handleSubmit.bind(this)} title={title} backgroundColor={backgroundColor}/>
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
                    multiline={true} 
                    inputStyle={{height:200}}/>
                </Section>
                {this.renderError()}
                <Section><Section>{this.renderSubmitButton()}</Section></Section>
            </View>
        );
    }

    handleSubmit(){
        console.log('submit',this.props);
        const {title,text} = this.props;
        if(this.edit){
            const { params } = this.props.navigation.state;
            const { id } =  params.idea;
            console.log('id',id);
            this.props.editIdea({id,title,text});
        }else{
            this.props.addNewIdea({title,text});
        }
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

export default connect(mapStateToProps, { ideaInputChange, addNewIdea, editIdea } )(IdeaForm);