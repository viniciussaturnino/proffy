import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import TeacherList from '../pages/TeacherList';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={LandingPage} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="TeacherList" component={TeacherList} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;