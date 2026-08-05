import { useState } from "react";
import { login } from "../../../services/auth.service";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!emailRegex.test(email)) {
            setError("Ugyldig email.");
            return;
        }

        if (!passwordRegex.test(password)) {
            setError("Password skal være 8-16 tegn og indeholde stort bogstav, lille bogstav, tal og specialtegn.");
            return;
        }

        try {
            setLoading(true);
            await login(email, password);
            setSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login fejlede");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-form">
            <form className="box-content mt-20" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                {error && <p className="text-red-500 mb-3">{error}</p>}
                {success && <p className="text-green-500 mb-3">Login lykkedes.</p>}

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
                    >
                        {loading ? "Logger ind..." : "Login"}
                    </button>
                </div>
            </form>
        </div>
    );
};