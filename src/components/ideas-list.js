import React, {Component} from 'react';
import { StyleSheet, } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class IdeasList extends Component{   
    render(){
        return (
            <List containerStyle={styles.container}>
                 <ListItem
                    leftIcon={{name: 'flight-takeoff'}}
                    title={'Dummy'}
                />
            </List>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    }
});