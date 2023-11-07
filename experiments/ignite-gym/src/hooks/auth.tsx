import { createContext, ReactNode, useState } from 'react';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

interface AuthContextData {
  authed: {
    state: boolean;
    set: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        authed: { state: isAuthed, set: setIsAuthed },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
