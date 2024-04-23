"use client";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { authFirebase } from "../firebase/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLogg: false,
    name: "",
  });

  const createUser = async () => {
    await createUserWithEmailAndPassword(authFirebase,"daniel@gmail.com","123pepito")
  }

  const loging = async () => {
    await signInWithEmailAndPassword(authFirebase,"daniel@gmail.com", "123pepito")
  }

  const logout = async () => {
    await signOut(authFirebase)
   
  }

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user)=>{
      setAuth({
        isLogg: !!user,
        name: !!user ? user.email : ''
      })
    })
  },[])

  return <AuthContext.Provider value={{ auth, createUser, loging, logout}}>{
    children
    }</AuthContext.Provider>;
};
