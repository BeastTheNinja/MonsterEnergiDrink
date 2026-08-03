import { jwtDecode } from "jwt-decode";


const API_URL = "http://localhost:4000";

type JwtDecoded = {
    userId: number;
    email: string;
    role: "USER" | "ADMIN";
}


export const getToken = () => {
    return localStorage.getItem("token");
};
export const refreshToken = async () => {
    const token = getToken();

    if (!token) {
        throw new Error("No token found");
    }
}
export const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem("refreshToken", refreshToken);
}

export const setToken = (token: string) => {
    localStorage.setItem("token", token);
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const isLoggedIn = () => {
    return !!localStorage.getItem("token");
};

export const getRole = () => {
    const token = getToken();

    if (!token) return null;

    const decoded = jwtDecode<JwtDecoded>(token);

    return decoded.role;
}


export const login = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Login failed");
    }

    setToken(data.token);
    return data;
};


export const register = async (payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}) => {
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Register failed");
    }

    return data;
};