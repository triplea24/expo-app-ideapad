import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginForm from './components/login-form';
import IdeasList from './components/ideas-list';
import IdeaForm from './components/idea-form';
import { signOut } from './actions';

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
        navigationOptions: ({navigation}) => {
            return ({
                title: 'Your Ideas',
                headerRight: (
                    <Icon
                        type='evilicon'
                        name='plus'
                        size={30}
                        onPress={()=>navigation.navigate('NewIdea')}
                        iconStyle={{paddingRight:10}}
                        />
                ),
                headerLeft: (
                    <Icon
                        type='evilicon'
                        name='user'
                        size={30}
                        onPress={()=> {
                            navigation.navigate('Auth');
                            signOut();
                        }}
                        iconStyle={{paddingLeft:10}}
                    />
                ),
            });
        }
    },
    NewIdea: {
        screen: IdeaForm,
        navigationOptions: {
            headerTitle: 'New Idea',
        }
    },
    EditIdea: {
        screen: IdeaForm,
        navigationOptions: ({navigation}) => {
            const idea = navigation.getParam('idea');
            return ({
                title: idea.title,
            });
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