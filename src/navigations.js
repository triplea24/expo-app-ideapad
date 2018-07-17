import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LoginForm from './components/login-form';
import IdeasList from './components/ideas-list';
import IdeaForm from './components/idea-form';
import { Icon } from 'react-native-elements';

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
                headerLeft: null,
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