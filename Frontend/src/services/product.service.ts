import { getToken } from "./auth.service";

const API_URL = "http://localhost:4000/api/products";

const getAuthHeaders = (): Record<string, string> => {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getProducts = async () => {
    const response = await fetch(API_URL, {
        headers: {
            ...getAuthHeaders(),
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to fetch products");
    }

    return data;
};

export const deleteProduct = async (id: number) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
            ...getAuthHeaders(),
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to delete product");
    }

    return true;
};

export const createProduct = async (payload: {
    name: string;
    image: string;
    description: string;
    price: number;
    stock: number;
    isActive: boolean;
}) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to create product");
    }

    return data;
};

export const updateProduct = async (
    id: number,
    payload: {
        name: string;
        image: string;
        description: string;
        price: number;
        stock: number;
        isActive: boolean;
    }
) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to update product");
    }

    return data;
};