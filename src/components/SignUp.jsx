import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { ValidateEmailAndPassword } from "../Firebase/Validate";
const SignUp = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const HandleSubmit = (e) => {

        e.preventDefault();
        const validate = ValidateEmailAndPassword(user.name, user.email, user.password);
        if (validate != null) {
            setError(validate);
            return;
        }
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }

    return (
        <div className="bg-gradient-to-r from-green-100 to-teal-100 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8"> {/* Increased padding */}
                    <h2 className="text-2xl font-bold text-center mb-6 text-teal-600"> {/* Increased margin */}
                        Sign up
                    </h2>
                    <form className="space-y-4" onSubmit={HandleSubmit}> {/* Added spacing between form elements */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300" // Added transition
                                placeholder="Enter your email"
                                required
                                autoComplete="true"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300" // Added transition
                                placeholder="Enter your password"
                                required
                                autoComplete="true"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                        </div>


                        <div>
                            <label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirmPassword"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300" // Added transition
                                placeholder="Confirm your password"
                                required
                            />

                        </div>




                        <button
                            type="submit"
                            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300" // Added transition
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-6 text-center"> {/* Added margin-top */}
                        <p className="text-gray-600">
                            Already have an account?
                            <Link
                                to={"/login"}
                                className="text-teal-500 hover:underline cursor-pointer transition duration-300" // Added transition

                            >
                                Login
                            </Link>
                        </p>
                        {error && <p>{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;