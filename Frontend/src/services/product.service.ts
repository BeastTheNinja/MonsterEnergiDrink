import { getToken } from "./auth.service";

export const getBlogs = async () => {
    const token = getToken();


    const response = await fetch("http://localhost:3000/blogs", {
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

export const deleteBlog = async (id: number) => {
    const token = getToken();
    const response = await fetch(`http://localhost:3000/blogs/${id}`, {
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

export const createBlog = async (title: string, content: string) => {
    const token = getToken();
    const response = await fetch("http://localhost:3000/blogs", {
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
    const response = await fetch(`http://localhost:3000/blogs/${id}`, {
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