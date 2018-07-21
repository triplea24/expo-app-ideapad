import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import AppNavigator from './src/navigations';
import { fetchAuthParams } from './src/utils';

// NOTE: Create a firebase.js file inside the project directory and export the config variable there!!!
import config from './firebase';

const initialStore = {};
const store = createStore(reducers, initialStore , applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  componentDidMount(){
    firebase.initializeApp(config);
    fetchAuthParams().then(params => {
      console.log(params);
    });
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
