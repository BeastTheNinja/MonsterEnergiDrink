import { getToken } from "./auth.service";

const API_URL = "http://localhost:4000/api/users";

const getAuthHeaders = (): Record<string, string> => {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getUsers = async () => {
    const response = await fetch(API_URL, {
        headers: {
            ...getAuthHeaders(),
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to fetch users");
    }

    return data;
};

export const deleteUser = async (id: number) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
            ...getAuthHeaders(),
        },
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete user");
    }

    return true;
};