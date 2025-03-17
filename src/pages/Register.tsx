import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const RegisterPage: React.FC = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    const handleRegister = () => {
        loginWithRedirect({
            appState: {
                returnTo: '/', //return to task dashboard after login
            },
            authorizationParams: {
                screen_hint: 'signup', // uses built in Auth0 signup form
            }, 
        });
    };

    return (
        <>
        <div>
            <h1>Register</h1>
            {isAuthenticated ? (
                <div>
                    <p>Welcome, {user?.name}! You are already a registered user.</p>
                </div>
            ) : (
                <div>
                    <p>Create an account to use the task manager securely.</p>
                    <button onClick={handleRegister}>Sign Up</button>
                </div>
            )}
            </div>  
        </>
    );
};

export default RegisterPage;