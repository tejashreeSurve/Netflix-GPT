import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../slices/userSlice";
import { useLocation, useNavigate } from "react-router";
import { AppStoreType } from "../utils/type";
import { useEffect } from "react";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constant";

function Header() {
  const user = useSelector((state: AppStoreType) => state.user);
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, phoneNumber, uid } = user;
        dispatch(addUser({ displayName, email, photoURL, phoneNumber, uid }));
        navigate("/browses");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return unSubscribe;
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-black z-50 flex justify-between items-center">
      <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-50" />

      {location.pathname !== "/" ? (
        <div className="flex items-center p-5 gap-1">
          <span className="flex m-2 text-white">
            Welcome {user?.displayName}!
          </span>
          <img
            src={USER_AVATAR}
            alt="netflix-logo"
            className="w-10 h-10 rounded-lg"
          />
          <button
            className="font-medium text-white p-1 rounded-lg hover:text-xl"
            onClick={handleSignout}
          >
            (Logout)
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
