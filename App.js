import { StatusBar, Button, StyleSheet, View, Platform } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { auth } from './firebaseConfig';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useEffect, useState } from 'react';

if (Platform.OS === 'web') {
  WebBrowser.maybeCompleteAuthSession();
}

export default function App() {
  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "528897780385-49f5rcbnp9b3gv0ulcababb7c7bkf8n8.apps.googleusercontent.com",
    iosClientId: "528897780385-9eb64vacj63893amv1odqobt8e968j0h.apps.googleusercontent.com",
    webClientId: "528897780385-le2ou4fm22s5c2hp62sm8uk41o1s0u2j.apps.googleusercontent.com",
  });

  useEffect(() => {
    console.log('useEffect triggered with response:', response);

    if (response?.type === 'success') {
      const { authentication } = response;
      const credential = GoogleAuthProvider.credential(
        authentication.idToken,
        authentication.accessToken
      );

      signInWithCredential(auth, credential)
        .then((userCredential) => {
          // Aqui você pode acessar o usuário autenticado usando userCredential.user
          console.log('Authentication successful:', userCredential.user);
        })
        .catch((error) => {
          console.error('Error during authentication:', error);
        });
    } else if (response?.type === 'error') {
      console.error('Authentication error:', response.error);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button onPress={() => promptAsync()} title="Entrar com Google" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
