import { getToken } from "./auth.service";

export const getUsers = async () => {
    const token = getToken();

    const response = await fetch("http://localhost:3000/users", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to fetch users");
    }

    return data;
};

export const deleteUser = async (id: number) => {
    const token = getToken();

    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete user");
    }

    return true;
};