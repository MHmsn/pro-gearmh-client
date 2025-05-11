import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import reg from "../assets/register-lottie.json";
import axios from "axios";

const Register = () => {
  const { createUser, setUser, user, updateUserProfile } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google sign-in successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Google sign-in failed! Please try again.");
        console.log(error)
      });
  };

  useEffect(() => {
    if (!!user && typeof window !== "undefined") {
      window.location.replace("/");
    }
  }, [user]);

  const handleSignUp = (e) => {
    e.preventDefault();
    let hasError = false;

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Validation Logic
    if (name.length < 4) {
      setError((prev) => ({
        ...prev,
        name: "Name must be at least 4 characters long.",
      }));
      hasError = true;
    }
    if (!/[A-Z]/.test(password)) {
      setError((prev) => ({
        ...prev,
        password: "Password must include at least one uppercase letter.",
      }));
      hasError = true;
    }
    if (!/[a-z]/.test(password)) {
      setError((prev) => ({
        ...prev,
        password: "Password must include at least one lowercase letter.",
      }));
      hasError = true;
    }
    if (password.length < 6) {
      setError((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long.",
      }));
      hasError = true;
    }

    if (hasError) return;
    // console.log(name, email, photo, password);


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((error) => {
            toast.error("Profile update failed. Please try again.");
            console.log(error);
          })

        const newUser = { name, email, photo }
        // save new user info to the firebase
        axios
          .post("https://pro-gearmh-server.vercel.app/users", newUser, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            const data = response.data;
            if (data.insertedId) {
              // console.log('user created in db');
            }
          })
          .catch((error) => {
            console.error("Error creating user:", error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`Registration failed: ${errorMessage}`);
        console.log(errorMessage);
      });
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] px-4">
      <ToastContainer position="top-right" />

      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Lottie animation */}
        <div className="flex-1 flex items-center justify-center bg-[#f0f4f8] p-4">
          <Lottie animationData={reg} className="w-full h-full max-w-xs md:max-w-md lg:max-w-lg" />
        </div>

        {/* Registration Form */}
        <div className="flex-1 p-6 md:p-10 space-y-6">
          <h2 className="text-3xl font-bold text-center text-[#273248]">Register your account</h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="form-control">
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
              {error.name && (
                <label className="text-xs text-red-600 mt-1">{error.name}</label>
              )}
            </div>

            <div className="form-control">
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
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
              {error.password && (
                <label className="text-xs text-red-600 mt-1">{error.password}</label>
              )}
            </div>

            <div className="form-control">
              <button className="btn w-full bg-[#273248] text-white hover:bg-black">
                Register
              </button>
            </div>
          </form>

          <p className="text-center text-sm font-medium">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-red-500 hover:underline">
              Login
            </Link>
          </p>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center justify-center gap-2 border border-black bg-white hover:bg-gray-100"
          >
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium">Register with Google</span>
          </button>
        </div>
      </div>
    </div>
  );

};

export default Register;