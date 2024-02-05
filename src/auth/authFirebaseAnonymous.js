import { getAuth, signInAnonymously } from "firebase/auth";

export const useAuthLogicAnonymously = () => {
  const auth = getAuth();

  const signIn = async () => {
    await signInAnonymously(auth)
      .then((response) => {
        // Signed in..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      console.log('Usuário desconectado');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      throw error;
    }
  };

  return { signIn, signOut };
}
