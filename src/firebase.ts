// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getStorage, FirebaseStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.firebaseKey,
  authDomain: 'memory-reflections.firebaseapp.com',
  projectId: 'memory-reflections',
  storageBucket: 'memory-reflections.appspot.com',
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage: FirebaseStorage = getStorage(app);
