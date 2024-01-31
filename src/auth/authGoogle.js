import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithCredential, signOut as signOutFirebase, onAuthStateChanged } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from '../../firebaseConfig';

export const useAuthLogic = () => {
    const [userInfo, setUserInfo] = useState();
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "528897780385-49f5rcbnp9b3gv0ulcababb7c7bkf8n8.apps.googleusercontent.com",
        iosClientId: "528897780385-9eb64vacj63893amv1odqobt8e968j0h.apps.googleusercontent.com",
        webClientId: "528897780385-le2ou4fm22s5c2hp62sm8uk41o1s0u2j.apps.googleusercontent.com",
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('Usuário já autenticado:', user);
                setUserInfo(user);
            } else {
                console.log('Usuário não autenticado');
                setUserInfo(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            const credential = GoogleAuthProvider.credential(
                authentication.idToken,
                authentication.accessToken
            );

            signInWithCredential(auth, credential)
                .then((userCredential) => {
                    console.log('Autenticação bem-sucedida:', userCredential.user);
                    setUserInfo(userCredential.user);
                })
                .catch((error) => {
                    console.error('Erro durante a autenticação:', error);
                });
        } else if (response?.type === 'error') {
            console.error('Erro de autenticação:', response.error);
        }
    }, [response]);

    const signOut = async () => {
        try {
            await signOutFirebase(auth);
            setUserInfo(null);
        } catch (error) {
            console.error('Erro durante o logout:', error);
        }
    };

    return { userInfo, promptAsync, signOut };
};
