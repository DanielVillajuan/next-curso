// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyASJHTRusIBgIAFOk0mHIerqZXdSTwgxE4",
  authDomain: "coder-next-1.firebaseapp.com",
  projectId: "coder-next-1",
  storageBucket: "coder-next-1.appspot.com",
  messagingSenderId: "128903805600",
  appId: "1:128903805600:web:516cf0a06d6dfbd5cd27c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const authFirebase = getAuth(app)
