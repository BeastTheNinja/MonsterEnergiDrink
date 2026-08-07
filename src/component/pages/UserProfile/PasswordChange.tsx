import { useState } from "react";
import { updateUser } from "../../../services/user.service";
import { getUserIdFromToken } from "../../../services/auth.service";

export const PasswordChange = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (password !== confirmPassword) {
            setError("Adgangskoderne matcher ikke.");
            return;
        }

        const userId = getUserIdFromToken();
        if (!userId) {
            setError("Kunne ikke finde bruger-id i token.");
            return;
        }

        try {
            setLoading(true);
            await updateUser(userId, { password, isActive: true });
            setMessage("Adgangskoden er opdateret.");
            setPassword("");
            setConfirmPassword("");
        } catch (err: unknown) {
            const text = err instanceof Error ? err.message : "Noget gik galt";
            setError(text);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white">Skift adgangskode</h2>

            <input
                type="password"
                placeholder="Ny adgangskode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded px-3 py-2"
            />

            <input
                type="password"
                placeholder="Gentag adgangskode"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="rounded px-3 py-2"
            />

            {error && <p className="text-red-500">{error}</p>}
            {message && <p className="text-green-500">{message}</p>}

            <button
                type="submit"
                disabled={loading}
                className="bg-[#94C83D] text-white font-bold py-2 px-4 rounded"
            >
                {loading ? "Gemmer..." : "Skift adgangskode"}
            </button>
        </form>
    );
};