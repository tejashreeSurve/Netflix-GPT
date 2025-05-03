import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useLocation, useNavigate } from "react-router";
import { AppStoreType } from "../utils/type";

function Header() {
  const user = useSelector((state: AppStoreType) => state.user);
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="w-50"
      />

      {location.pathname !== "/" ? (
        <div className="flex items-center p-5 gap-1">
          <span className="flex m-2 text-white">
            Welcome {user?.displayName}!
          </span>
          <img
            src="https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
