import React, {Component} from 'react';
import { StyleSheet, } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchIdeas } from '../actions';

class IdeasList extends Component{   
    componentDidMount(){
        this.props.fetchIdeas();
    }
    renderIdeas(){
        console.log('ideas',this.props.ideas);
        return this.props.ideas.map(idea => {
            return (
                <ListItem
                    key={idea.id}
                    leftIcon={{name: 'flight-takeoff'}}
                    onPress={()=> this.props.navigation.navigate('EditIdea',{idea})}
                    title={idea.title}
                />
            );
        });
    }
    render(){
        return (
            <List containerStyle={styles.container}>
                 { this.renderIdeas() }
            </List>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    }
});
function mapStateToProps(state){
    const ideas = _.map(state.ideas.ideas,(val,id)=> {
        val['id'] = id;
        return val;
    });
    return {
        ideas
    };
}
export default connect(mapStateToProps, { fetchIdeas })(IdeasList);