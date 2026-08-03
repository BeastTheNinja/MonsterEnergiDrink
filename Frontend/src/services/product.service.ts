import { getToken } from "./auth.service";

export const getProducts = async () => {
    const token = getToken();


    const response = await fetch("http://localhost:4000/api/products", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });


    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Failed to fetch blogs");
    }
    return data;
};

export const deleteProduct = async (id: number) => {
    const token = getToken();
    const response = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete blog");
    }
    return true;
};

export const createProducts = async (title: string, content: string) => {
    const token = getToken();
    const response = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, content })
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || "Failed to create blog");
    }
    return data;
};

export const updateBlog = async (id: number, title: string, content: string) => {
    const token = getToken();
    const response = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, content })
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || "Failed to update blog");
    }
    return data;
};