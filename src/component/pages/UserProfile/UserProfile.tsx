import { useEffect, useState } from "react";
import { getUserById } from "../../../services/user.service";
import { getUserIdFromToken } from "../../../services/auth.service";
import { PasswordChange } from "./PasswordChange";

type User = {
    id: number;
    name: string;
    email?: string;
    image: string;
};

export const UserProfile = () => {
    const [user, setUser] = useState<User>({
        id: 0,
        name: "",
        image: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userId = getUserIdFromToken();

                if (!userId) {
                    throw new Error("No user id found in token");
                }

                const data = await getUserById(userId);
                setUser(data);
            } catch (err: unknown) {
                const message =
                    err instanceof Error ? err.message : "Failed to fetch user";
                console.error(message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) {
        return <div className="text-white">Henter profil...</div>;
    }

    return (
        <div className="user-profile box-content flex flex-col items-center justify-center mt-20">
            <div className="user-profile-header">
                <h1 className="text-2xl font-bold text-white">Brugerprofil</h1>
            </div>
            <div className="user-profile-content">
                <div className="user-profile-picture">
                    <img
                        src={user.image ? `http://localhost:4000${user.image}` : "https://via.placeholder.com/150"}
                        alt="User profile"
                        className="rounded-full w-32 h-32"
                    />
                    <h2 className="text-xl font-bold text-white mt-4">{user.name}</h2>
                </div>
                <PasswordChange />
            </div>
        </div>
    );
};