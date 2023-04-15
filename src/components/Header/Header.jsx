import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

export default HomePageHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  const [signUp, setSignUp] = useState("");

  const isOnline = useOnline();
  return (
    <>
      <div className="flex justify-between  shadow-lg">
        <Link to="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
            alt=""
            className="h-20"
          ></img>
        </Link>
        <div>
          <ul className="flex py-8">
            <li className="px-2 font-sans hover:font-serif">
              <Link to="/search">Search</Link>
            </li>
            <li className="px-2">
              <Link to="/offers">Offers</Link>
            </li>
            <li className="px-2">
              <Link to="/help">Help</Link>
            </li>
            <li className="px-2">
              {isLoggedIn ? (
                <Link to="/my-account">Mihir Poojara</Link>
              ) : (
                <button
                  onClick={() => {
                    setIsShowDrawer(true);
                  }}
                >
                  SignIn
                </button>
              )}
            </li>
            <li className="px-2">Cart</li>
          </ul>
        </div>
      </div>

      {isShowDrawer && (
        <main
          className={
            " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
            (isShowDrawer
              ? " transition-opacity opacity-100 duration-500 translate-x-0  "
              : " transition-all delay-500 opacity-0 translate-x-full  ")
          }
        >
          <section
            className={
              " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
              (isShowDrawer ? " translate-x-0 " : " translate-x-full ")
            }
          >
            <div className="flex flex-col ">
              <div className="flex flex-col">
                <p className="m-5 px-5 text-3xl">Login</p>
                <div className="flex flex-row">
                  <p className="mx-2">or</p>
                  <button
                    onClick={() => {
                      setSignUp(true);
                    }}
                  >
                    <p className="text-[#ff8702]">create an account </p>
                  </button>
                </div>
                <img
                  class="_2tuBw _12_oN jdo4W"
                  width="100"
                  height="105"
                  alt=""
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                ></img>
              </div>

              <div class="mb-6">
                <label
                  for="large-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Large input
                </label>
                <input
                  type="text"
                  id="large-input"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </section>
          <section
            className=" w-screen h-full cursor-pointer "
            onClick={() => {
              setIsShowDrawer(false);
            }}
          ></section>
        </main>
      )}
    </>
  );
};
