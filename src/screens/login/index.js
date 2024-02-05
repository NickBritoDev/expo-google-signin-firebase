import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import {
  Div,
  Text,
  Button,
  Image,
  Input,
} from 'react-native-magnus';
import { useAuthLogicAnonymously } from '../../auth/authFirebaseAnonymous';

const Login = ({ promptAsync }) => {
  const { signIn } = useAuthLogicAnonymously()

  const goToHome = async () => { await signIn(); }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <Div flex={1} mt="2xl">
          <Text mt="3xl" mx="xl" w="70%" fontWeight="bold" fontSize="5xl">
            Vamos Começar!
          </Text>
          <Text mx="xl" fontSize="lg" color="gray600" mt="md" w="60%">
            Entre com seus dados
          </Text>

          <Text color="gray600" mx="xl" mt="2xl">
            Nome Completo
          </Text>
          <Input
            mx="xl"
            mt="md"
            px="md"
            py="sm"
            borderColor="gray200"
            borderWidth={1}
            keyboardType="default"
          />
          <Text color="gray600" mx="xl" mt="sm">
            Email
          </Text>
          <Input
            mx="xl"
            mt="md"
            px="md"
            py="sm"
            borderColor="gray200"
            borderWidth={1}
            keyboardType="email-address"
          />

          <Button
            mx="xl"
            mt="xl"
            mb="xl"
            py="lg"
            bg="#229544"
            rounded="circle"
            block
            onPress={goToHome}>
            Entrar no Modo Anônimo
          </Button>

          <Div
            mx="xl"
            alignItems="center"
            justifyContent="center"
            flexDir="row"
            mt="xl">
            <Div h={1} flex={1} bg="gray200" />
            <Text px="lg" fontSize="sm" color="gray500">
              Ou continue com
            </Text>
            <Div h={1} flex={1} bg="gray200" />
          </Div>

          <Div
            w={'100%'}
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            mt="xl">
            <Button
              m={'auto'}
              w={'90%'}
              flex={1}
              py="lg"
              rounded="circle"
              borderWidth={1}
              borderColor="gray200"
              bg="white"
              color="gray900"
              mb={10}
              onPress={promptAsync}
              prefix={
                <Image
                  h={20}
                  w={20}
                  mr="md"
                  source={require('../../../assets/google.svg.png')}
                />
              }
            >
              Google
            </Button>
            <Button
              m={'auto'}
              w={'90%'}
              flex={1}
              py="lg"
              rounded="circle"
              borderWidth={1}
              borderColor="gray200"
              bg="white"
              color="gray900"
              prefix={
                <Image
                  h={20}
                  w={20}
                  mr="md"
                  source={require('../../../assets/apple.png')}
                />
              }
            >
              Apple
            </Button>
          </Div>
        </Div>
      </SafeAreaView>
    </>
  );
};

export default Login;
