import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APP_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_APP_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_MEASUREMENT_ID,
};

export class Firebase {
  #app: FirebaseApp;
  #auth: Auth;

  constructor() {
    const { app, auth } = this.initialize();
    this.#app = app;
    this.#auth = auth;

    this.runAnalytics();
  }

  initialize = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    return { app, auth };
  };

  runAnalytics = () => {
    if (typeof window !== "undefined") {
      getAnalytics(this.#app);
    }
  };

  getAuth = () => {
    return this.#auth;
  };
}

export const firebase = new Firebase();
