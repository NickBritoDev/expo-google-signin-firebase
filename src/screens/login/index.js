import React from 'react';
import { View, Button } from 'react-native';

const Login = ({ promptAsync }) => {
    return (
        <View>
            <Button onPress={promptAsync} title="Entrar com Google" />
        </View>
    );
};

export default Login;