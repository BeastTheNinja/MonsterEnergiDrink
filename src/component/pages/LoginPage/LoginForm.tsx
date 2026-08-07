import { useState } from "react";
import { login } from "../../../services/auth.service";
import { useNavigate } from "react-router";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        setLoading(true);

        try {
            const res = await login(email, password); // forvent { token } eller throw

            console.log(res);

            navigate("/userProfile");

        } catch (err) {
            console.error("Login error (raw):", err);
            const raw = err instanceof Error ? err.message : String(err);
            if (/unauthorized|401|forkert|invalid/i.test(raw)) {
                setError("Forkert email eller adgangskode.");
            } else {
                setError("Login fejlede. Prøv igen senere.");
            }
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="login-form flex flex-col items-center justify-center  ">
            <form className="box-content mt-20" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        aria-label="Email"
                        value={email}
                        autoComplete="email"
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
                        aria-label="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {error && <p className="text-red-500 mb-3 max-w-50">{error}</p>}
                    {success && <p className="text-green-500 mb-3">Login lykkedes.</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-[#94C83D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                    {loading ? "Logger ind..." : ""}
                </div>
            </form>
        </div>
    );
}