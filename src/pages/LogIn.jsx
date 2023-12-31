import React from "react";
import loginFetch from "../libs/LoginFetch";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  
  const handleOTP = () => {
    if (email) {
      loginFetch(email)
        .then((result) => {
          toast.success("OTP sent to your email");
          navigate("/verify", {
            state: {
              email: email,
              redirect: state?.from?.pathname || "/",
            },
          });
        })
        .catch((error) => toast.error("Email isn't valid"));
    } else {
      return toast.error("Email is required");
    }
  };
  return (
    <div className="container  mx-auto">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1 gap-3">
        <div className="flex items-center w-full justify-center h-screen">
          <div className="card w-8/12 card-side bg-white shadow-xl">
            <figure>
              <img
                className="h-96 w-96"
                src="/images/login-banner.png"
                alt="login"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <div className="w-8/12">
                <h1 className="text-2xl my-4">WELCOME BACK</h1>
                <p className="mb-4 text-sm text-gray-600">
                  Enter your email address and get verification pin
                </p>
                <input
                  type="text"
                  placeholder="Email.."
                  className="input w-full bg-white rounded-lg input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="btn rounded-lg w-full my-4 btn-primary"
                  onClick={handleOTP}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
