"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/app/Validation/LoginValidation";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { TbLockPassword } from "react-icons/tb";
import Background from "@/app/Components/background";
import { toast } from "react-toastify";
import Logo from "@/app/Components/logo";
import api from "@/app/api/api";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [customError, setCustomError] = useState('');

  const router = useRouter();
  const navigateToRegistration = () => {
    router.push('/Registration');
  };

  const navigateToForgetPassword = () => {
    router.push('/ForgetPassword');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  // Login handler
  const login = async (data: LoginSchema) => {
    try {
      const response = await api.post("/auth/login", data);
      const accessToken = response.data.Token;
      Cookies.set("accessToken", accessToken);
      toast.success("Login successful");
      router.push("/Student");
    } catch (error: any) {
      toast.error(error.response?.data?.message );
    }
  };

  return (
    <div className="min-h-screen bg-primary-content from-primary-50 to-primary-100 flex flex-col items-center justify-center p-4">
        {/* Background Image */}
        <Background />

      <div className="w-full max-w-sm p-4 rounded-3xl transform scale-200 inset-10 z-50 lg:translate-y-[-200px]">
        {/* Logo of AIUB */}
        <Logo />
        <div
          className="bg-white shadow-lg rounded-2xl p-4 space-y-4 pt-24"
        >
          {/* Form */}
          <form onSubmit={handleSubmit(login)}>
            {/* Email */}
            <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white translate-x-3"
            >
              Email
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <PiMicrosoftOutlookLogoFill 
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  />
              </div>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="XX-XXXXX-X@student.aiub.edu"
                {...register("email")}
              />
            </div>
            {errors.email && (
                <p className="text-red-500 text-xs -translate-y-4 pl-[10px]">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Password */}
            <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white translate-x-3"
            >
              Password
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <TbLockPassword 
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                {...register("password")}
              />
              {/* Toggle Visibility Button */}
              <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <VscEye
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                ) : (
                  <VscEyeClosed
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                )}
              </button>
            </div>
            </div>
            {/* Error */}
            {errors.password && (
              <p className="text-red-500 text-xs -translate-y-4" style={{paddingLeft: "10px"}}>
                {errors.password.message}
              </p>
            )}
            {/* Forgot password */}
            <div className="flex padding-left-400">
              {/* Forgot your password */}
              <a
                onClick={navigateToForgetPassword}
                className="text-sm text-blue-500 dark:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full px-2 py-1 transition-colors cursor-pointer"
              >
                Forgot your password?
              </a>
            </div>
            <br />
            <div className="flex items-center justify-center -translate-y-1.5">
            <button
              type="submit"
              className="w-1/2 mb-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-2 py-2.5 transition-colors"
           
           >
              Login
            </button>
            </div>
           {/* Register */}
           <div className="flex items-center justify-center">
            <p>
              Don't have an account? Click here{" "}
              <a
                onClick={navigateToRegistration}
                className="text-sm text-blue-500 dark:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full px-2 py-1.2 transition-colors cursor-pointer"
              >
                Register
              </a>
              </p>
            </div>
            {/* Custom error message */}
            {customError && (
              <p className="text-red-500 text-xs text-center translate-y-1">
                {customError}
              </p>
            )}
          </form>
        </div>
      </div>
      {/* Footer */}
      <footer className="absolute bottom-4 text-center w-full text-sm text-white">
        © 2024 AIUB Office of Sports. All Rights Reserved.
      </footer>
    </div>
  );
}