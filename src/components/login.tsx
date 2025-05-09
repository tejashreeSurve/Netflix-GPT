import { useRef, useState } from "react";
import Header from "./header";
import { LoadingIcon } from "../utils/icons";
import { validate } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import { NETFLIX_BG } from "../utils/constant";

export const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState<string | null>();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [onSubmit, setOnSubmit] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOnSubmit(true);
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const error = validate(email, password);

    if (error) setError(error);

    if (email && password) {
      if (signUp) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            })
              .then(() => {
                const { displayName, email, photoURL, phoneNumber, uid } = user;
                dispatch(
                  addUser({ displayName, email, photoURL, phoneNumber, uid })
                );
              })
              .catch((error) => {
                console.log(error);
              });

            setSignUp(false);
            setOnSubmit(false);
          })
          .catch((error) => {
            setError(error.message);
            setOnSubmit(false);
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            const { displayName, email, photoURL, phoneNumber, uid } = user;
            dispatch(
              addUser({ displayName, email, photoURL, phoneNumber, uid })
            );
            setOnSubmit(false);
          })
          .catch((error) => {
            if (error.code === "auth/invalid-credential")
              setError("Incorrect email or password. Please try again. ");
            setOnSubmit(false);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="relative w-full h-screen">
        <img
          className="absolute  inset-0 w-full h-full object-cover brightness-70"
          src={NETFLIX_BG}
          alt="netflix-bg-image"
        />
        <form
          onSubmit={handleSubmit}
          className="absolute gap-5 bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col p-15 w-3/12 text-white rounded-lg opacity-80 "
        >
          <h1 className="text-3xl font-bold">
            {!signUp ? "Sign In" : "Sign Up"}
          </h1>
          {error ? (
            <span className="text-red-500 font-bold">{error}</span>
          ) : null}
          {signUp ? (
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              name="name"
              className="p-4 border-1 border-white rounded bg-gray-800"
            />
          ) : null}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email"
            name="email"
            className="p-4 border-1 border-white rounded bg-gray-800"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            name="password"
            className="p-4 border-1 border-white rounded bg-gray-800"
          />
          <button
            className="p-2 bg-red-700 rounded font-bold flex gap-2 justify-center disabled:bg-red-800"
            disabled={onSubmit}
            type="submit"
          >
            {onSubmit ? <LoadingIcon /> : null}
            {signUp ? "Sign-up" : "Sign-in"}
          </button>
          <a className="cursor-pointer" onClick={() => setSignUp(!signUp)}>
            {!signUp ? (
              <>
                New to Netflix? <span className="font-bold">Sign up now</span>
              </>
            ) : (
              <>
                Already sign-up? <span className="font-bold">Sign-in now</span>
              </>
            )}
          </a>
        </form>
      </div>
    </div>
  );
};
