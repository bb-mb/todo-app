import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Firebase } from "@/domains/firebase";

export class LoginUseCase {
  #auth: Auth;
  #googleProvider = new GoogleAuthProvider();

  constructor(firebase: Firebase) {
    this.#auth = firebase.getAuth();
  }

  googleLogin = async () => {
    const result = await signInWithPopup(this.#auth, this.#googleProvider);
    console.log(result);
  };
}
