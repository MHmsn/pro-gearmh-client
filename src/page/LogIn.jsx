import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import log from '../assets/login-lottie.json';

const LogIn = () => {
  const { signInUser, setUser, user } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const provider = new GoogleAuthProvider();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.message });
        toast.error("Login failed! Please check your credentials.");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google sign-in successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Google sign-in failed! Please try again.");
      });
  };

  useEffect(() => {
    if (!!user && typeof window !== "undefined") {
      window.location.replace("/");
    }
  }, [user]);

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.warn("Please provide a valid email address.");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("Password reset email sent! Please check your inbox.");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(`Failed to send password reset email: ${errorMessage}`);
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] px-4">
      <ToastContainer position="top-right" />
  
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Lottie animation */}
        <div className="flex-1 flex items-center justify-center bg-[#f0f4f8] p-4">
          <Lottie animationData={log} className="w-full h-full max-w-xs md:max-w-md lg:max-w-lg" />
        </div>
  
        {/* Login form */}
        <div className="flex-1 p-6 md:p-10 space-y-6">
          <h2 className="text-3xl font-bold text-center text-[#273248]">Log In</h2>
          <form onSubmit={handleLogIn} className="space-y-4">
            <div className="form-control">
              <label className="label font-medium">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
  
            <div className="form-control relative">
              <label className="label font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[50%] -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
  
              {error.login && (
                <p className="text-sm text-red-600 mt-1">{error.login}</p>
              )}
  
              <label
                onClick={handleForgetPassword}
                className="label pt-2 text-sm text-blue-600 hover:underline cursor-pointer"
              >
                Forgot password?
              </label>
            </div>
  
            <div className="form-control">
              <button className="btn w-full bg-[#273248] text-white hover:bg-black">
                Login
              </button>
            </div>
          </form>
  
          <p className="text-center text-sm font-medium">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-red-500 hover:underline">
              Register
            </Link>
          </p>
  
          <div className="divider">OR</div>
  
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center justify-center gap-2 border border-black bg-white hover:bg-gray-100"
          >
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default LogIn;
