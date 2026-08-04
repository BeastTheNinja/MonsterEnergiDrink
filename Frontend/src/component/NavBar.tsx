import { Link } from "react-router"

export const NavBar = () => {
    return (
        <div className="navbar relative">
            <div className="flex items-center justify-between  pt-10">
                <div className="logo max-w-65 -mb-10 z-10">
                    <img src="Monster Logo.svg" alt="Monster Logo" />
                </div>

                <div className="flex gap-6 font-bold text-lg">
                    <Link to="/">Forside</Link>
                    <Link to="/products">Produkter</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>

            <div className="ml-25 border-b border-[#94C83D] mb-5"></div>
        </div>
    )
}