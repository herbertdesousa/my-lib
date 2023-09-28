import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

import { auth } from "../config/firebase";

type User = {
  uid: string;
  email: string | null;
};

type SignInWithGoogleRes = {
  type: "success" | "canceled" | "in-progress" | "not-available" | "error";
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  signInWithGoogle(): Promise<SignInWithGoogleRes>;
  signInWithEmailAndPassword: (
    email: string,
    password: string,
  ) => Promise<void>;
  signOut(): Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

GoogleSignin.configure();

type AuthContextProviderProps = { children: React.ReactElement };
export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsLoading(false);

      if (user) setUser({ email: user?.email, uid: user.uid });
      else setUser(null);
    });

    return unsub;
  }, []);

  const handleSignInWithGoogle =
    useCallback(async (): Promise<SignInWithGoogleRes> => {
      setIsLoading(true);

      const user = await GoogleSignin.getCurrentUser();

      if (user) await GoogleSignin.signOut();

      try {
        await GoogleSignin.hasPlayServices();

        await GoogleSignin.signIn();

        const { idToken, accessToken } = await GoogleSignin.getTokens();

        const credential = GoogleAuthProvider.credential(idToken, accessToken);

        await signInWithCredential(auth, credential);

        return { type: "success" };
      } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          return { type: "canceled" };
        } else if (error.code === statusCodes.IN_PROGRESS) {
          return { type: "in-progress" };
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          return { type: "not-available" };
        }

        console.log(error);

        return { type: "error" };
      }
    }, []);

  const handleSignOut = useCallback(async () => {
    await signOut(auth);

    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  }, []);

  const handleSignInWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);
    },
    [],
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signOut: handleSignOut,
        signInWithGoogle: handleSignInWithGoogle,
        signInWithEmailAndPassword: handleSignInWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
