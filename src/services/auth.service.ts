import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:4000";

type JwtDecoded = {
    exp: number;
    data: {
        id: number;
    };
};

export const getToken = () => localStorage.getItem("token");
export const getRefreshToken = () => localStorage.getItem("refreshToken");

export const setToken = (token: string) => {
    localStorage.setItem("token", token);
};

export const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem("refreshToken", refreshToken);
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
};

export const login = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const text = await response.text();

    let data: any;
    try {
        data = text ? JSON.parse(text) : {};
    } catch {
        data = { message: text };
    }

    if (!response.ok) {
        const msg =
            response.status === 401
                ? "Forkert email eller adgangskode."
                : data?.message || "Login fejlede. Prøv igen senere.";
        throw new Error(msg);
    }

    setToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    return data;
};

export const refreshToken = async () => {
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
        throw new Error("No refresh token found");
    }

    const response = await fetch(`${API_URL}/api/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Token refresh failed");
    }

    setToken(data.accessToken);
    return data.accessToken;
};

export const getUserIdFromToken = () => {
    const token = getToken();
    if (!token) return null;

    const decoded = jwtDecode<JwtDecoded>(token);
    return decoded.data.id;
};

