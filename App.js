import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import LoginForm from './src/components/login-form';
import Header from './src/components/Header';
import reducers from './src/reducers';

// NOTE: Create a firebase.js file inside the project directory and export the config variable there!!!
import config from './firebase';

const initialStore = {};
const store = createStore(reducers, initialStore , applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  componentDidMount(){
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header title='Login'/>
          <LoginForm />
        </View>
      </Provider>
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
