import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import firebase from 'firebase';

import LoginForm from './src/components/login-form';
import Header from './src/components/Header';

// NOTE: Create a firebase.js file inside the project directory and export the config variable there!!!
import config from './firebase';

export default class App extends React.Component {
  componentDidMount(){
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
