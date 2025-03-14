import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Auth0ProviderWithNavigateProps = {
    children: any;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
    children,
}) => {
    const navigate = useNavigate();
    const domain = 'dev-8y0e1ltd7bwaes3a.us.auth0.com';
    const clientId = 'MpTgV1lWgany02AX8LpUA6txmz9aQ6Gt';
    const redirectUri = 'http://localhost:5173/callback'; //make sure the port matches your server

    const onRedirectCallback = (appState.any) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
    };

    if (!(domain && clientId && redirectUri)) {
        return null;
    };

    return (
        <>
            <Auth0Provider
                domain={domain}
                clientId={clientId}
                authorizationParams={{
                    redirect_uri: redirectUri,
                    scope: 'openid profile email',
                }}
                onRedirectCallback={onRedirectCallback}
                cacheLocation='localstorage'
                >
                    {children}
            </Auth0Provider>
        </>
    )
};

export default Auth0ProviderWithNavigate;