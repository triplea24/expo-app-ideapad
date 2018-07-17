import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LoginForm from './components/login-form';
import IdeasList from './components/ideas-list';
import IdeaForm from './components/idea-form';

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            headerTitle: 'Login',
        }
    },
});

const AppStack = createStackNavigator({
    Ideas: {
        screen: IdeasList,
        navigationOptions: {
            headerTitle: 'Ideas',
        }
    },
    NewIdea: {
        screen: IdeaForm,
        navigationOptions: {
            headerTitle: 'New Idea',
        }
    },
});

export default createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    }
);