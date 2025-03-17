import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginPage: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: '/', //return to task dashboard after login
            },
            authorizationParams: {
                prompt: 'login',
            },
        });
    };

    return (
        <>
            <div>
                <h1>Login</h1>
                <button onClick={handleLogin}>Log In</button>
            </div>
        </>
    )
};

export default LoginPage;