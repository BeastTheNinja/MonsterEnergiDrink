import { NavLink } from "react-router"
import monsterlogo from "../assets/MonsterLogo.svg"

export const NavBar = () => {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "text-[#94C83D]" : "text-white"

    return (
        <div className="navbar relative">
            <div className="flex items-center justify-between pt-10">
                <div className="logo max-w-65 -mb-10 z-10">
                    <img src={monsterlogo} alt="Monster Logo" />
                </div>

                <div className="flex gap-6 font-bold text-lg">
                    <NavLink to="/" className={linkClass}>
                        Forside
                    </NavLink>
                    <NavLink to="/products" className={linkClass}>
                        Produkter
                    </NavLink>
                    <NavLink to="/login" className={linkClass}>
                        Login
                    </NavLink>
                </div>
            </div>

            <div className="ml-25 border-b border-[#94C83D] mb-5"></div>
        </div>
    )
}