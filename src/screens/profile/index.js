import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const Profile = ({ userInfo, signOut }) => {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View>
            <Text>Bem-vindo, {userInfo.displayName}</Text>
            <Text>Email: {userInfo.email}</Text>
            <Text>Token: {userInfo.uid}</Text>
            <Image
                source={{ uri: userInfo.photoURL }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
                onError={(error) => console.error('Erro ao carregar imagem:', error.nativeEvent.error)}
            />
            <Button onPress={() => {
                signOut()
                goToLogin()
            }
            } title="Sair" />
        </View>
    );
};

export default Profile;