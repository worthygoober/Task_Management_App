import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton: React.FC = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        <nav >
            {isAuthenticated && (
                <button style={styles.button} onClick={() => logout({ returnTo: window.location.origin })}>
                    Logout
                </button>
            )}
        </nav>
    );
};

const styles = {
    button: {
        backgroundColor: "#e74c3c",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
    },
};

export default LogoutButton;