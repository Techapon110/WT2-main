import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../config/Db";

//1. create auth context
const AuthContext = createContext();

//2. provider auth context (function)
function AuthProvider({ children }) {
  const [claims, setClaims] = useState(null);

  useEffect(() => {
    supabase.auth.getClaims().then(({ data }) => {
      setClaims(!data ? null : data?.claims);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      supabase.auth.getClaims().then(({ data }) => {
        setClaims(!data ? null : data?.claims);
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  // function signup
  async function userSignup(email, password) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      return { success: false, error };
    }
    return { success: true, data };
  }

  // function signin
  async function userSignin(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return { success: false, error };
    }
    return { success: true, data };
  }

  // function signout
  async function userSignout() {
    await supabase.auth.signOut();
    // setClaims(null)
  }

  return (
    <AuthContext.Provider
      value={{ claims, userSignup, userSignin, userSignout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

//3. using auth context for target (function)
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
