import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { auth } from './firebaseConfig'
import { useEffect, useState } from 'react';

WebBrowser.maybeCompleteAuthSession()

export default function App() {
  const [userInfo, setUserInfo] = useState()
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "528897780385-49f5rcbnp9b3gv0ulcababb7c7bkf8n8.apps.googleusercontent.com"
  })

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])

  return (
    <View style={styles.container}>
      <Button onPress={() => promptAsync()} title='Entrar com Google' />
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
