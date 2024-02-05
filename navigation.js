import React from 'react';
import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './src/screens/profile';
import Login from './src/screens/login';
import Home from './src/screens/home';
import { useAuthLogic } from './src/auth/authGoogle';

if (Platform.OS === 'web') {
    WebBrowser.maybeCompleteAuthSession();
}

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const { userInfo, promptAsync, signOut } = useAuthLogic()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo ? (
                    <>
                        <Stack.Screen name="Home">
                            {(props) => <Home {...props} userInfo={userInfo} />}
                        </Stack.Screen>
                        <Stack.Screen name="Profile">
                            {(props) => <Profile {...props} userInfo={userInfo} signOut={signOut} />}
                        </Stack.Screen>
                    </>
                ) : (
                    <Stack.Screen name="Login">
                        {(props) => <Login {...props} promptAsync={promptAsync} />}
                    </Stack.Screen>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
