import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = ({ userInfo }) => {
    const navigation = useNavigation();

    const goToProfile = () => {
        navigation.navigate('Profile'); 
    };

    return (
        <View>
            <Text>Bem-vindo, {userInfo.displayName}</Text>
            <Image
                source={{ uri: userInfo.photoURL }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
                onError={(error) => console.error('Erro ao carregar imagem:', error.nativeEvent.error)}
            />
            <Button onPress={goToProfile} title="Ir para Perfil" />
        </View>
    );
};

export default Home;
